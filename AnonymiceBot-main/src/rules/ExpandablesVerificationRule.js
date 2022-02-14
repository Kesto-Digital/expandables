const logger = require("../utils/logger");
const getProvider = require("../web3/provider");
const { Contract } = require("ethers");
const discordBot = require("../discordBot");

/**
 * pandas and staked pandas
 */
class ExpandablesVerificationRule {
  constructor(config) {
    this.config = config;
    this.logger = require("../utils/logger");
  }

  async execute(discordUser, role, result) {
    //  note:   this rule is customized to allow for more than one role assignment so we
    //          can ignore the fact that no specific role has been passed in

    let executionResults = [];

    let discordRoles = await this.getDiscordRoles(this.config.roles);

    //wrapping each role we are executing on in its own try/catch
    //if any one fails, others will still be processed

    let qualifiesForPandasRole = false;

    //execute - Pandas
    try {
      let pandasRoleConfig = this.config.roles.find(
          (r) => r.name === "Pandas"
      );
      let pandasRole = discordRoles.find(
          (r) => r.id === pandasRoleConfig.id
      );
      qualifiesForPandasRole =
        result.pandas.length > 0 ||
        result.stakedPandas.length > 0;
      await this.manageRoles(
        discordUser, // discord user
          pandasRole, //guild instance
          qualifiesForPandasRole
      );
      executionResults.push({
        role: "Pandas",
        roleId: pandasRole.id,
        qualified: qualifiesForPandasRole,
        result: {
          pandas: result.pandas,
          stakedPandas: result.stakedPandas
        },
      });
    } catch (err) {
      logger.error(err.message);
      logger.error(err.stack);
    }

    return executionResults;
  }

  async check(user) {
    const provider = await getProvider();
    let pandasResult = await this.getPandas(
      this.config.ExpandablesContract,
      user,
      provider
    );
    let stakedPandas = await this.getStakedPandas(
      this.config.BambooFactoryContract,
      user,
      provider
    );

    let result = {
      pandas: pandasResult,
      stakedPandas: stakedPandas
    };
    return result;
  }

  async getDiscordRoles(rolesConfig) {
    let guild = discordBot.getGuild();
    let roles = [];
    //retrieve each of the discord roles defined in the config
    await rolesConfig.forEachAsync(async (r) => {
      let role = await guild.roles.fetch(r.id, { force: true });
      if (!role) {
        logger.error(
          `Could not find the role id configured for ${r.name}. Please confirm your configuration.`
        );
        return;
      }
      roles.push(role);
    });

    return roles;
  }

  async getPandas(config, user, provider) {
    let logMessage = `Expandables Verification Rule is executing - Get Pandas:
Contract:       ${config.Address}
Argument(s):    ${user.walletAddress}`;

    if (!user.walletAddress) {
      logMessage += `
Wallet Address is null/empty. Skipping check against contract and returning 0.`;
      logger.info(logMessage);
      return 0;
    }

    const contract = new Contract(config.Address, config.ABI, provider);

    const result = await contract.balanceOf(user.walletAddress);

    logMessage += `
Result:       ${result}`;
    logger.info(logMessage);

    return result.toNumber() > 0 ? [1] : []; // quickfix as we dont get tokenIds
  }

  async getStakedPandas(config, user, provider) {
    let logMessage = `Expandables Verification Rule is executing - Get Staked Pandas:
Contract:       ${config.Address}
Argument(s):    ${user.walletAddress}`;

    if (!user.walletAddress) {
      logMessage += `
Wallet Address is null/empty. Skipping check against contract and returning 0.`;
      logger.info(logMessage);
      return 0;
    }

    const contract = new Contract(config.Address, config.ABI, provider);

    const result = await contract.stakedPandasOf(user.walletAddress);

    logMessage += `
Result:       ${result}`;
    logger.info(logMessage);

    return result.map((r) => r.toNumber());; // quickfix as we dont get tokenIds
  }

  //todo: cleanup return values arent consumed

  async manageRoles(discordUser, role, qualifies) {
    if (!role) {
      logger.error(
        `Could not locate the ${roleName} discord role using id ${roleId} specified. Please confirm your configuration.`
      );
      return false;
    }

    try {
      if (qualifies) {
        if (!discordUser.roles.cache.has(role.id)) {
          logger.info(`Assigning Role: ${role.name}`);
          await discordUser.roles.add(role);
        }
        return true;
      } else {
        if (discordUser.roles.cache.has(role.id)) {
          logger.info(`Removing Role: ${role.name}`);
          await discordUser.roles.remove(role);
        }
        return false;
      }
    } catch (err) {
      logger.error(err.message);
      logger.error(err.stack)
    }
  }
}

module.exports = ExpandablesVerificationRule;
