/*##############################################################################
# File: settings.js                                                            #
# Project: Anonymice - Discord Bot                                             #
# Author(s): Oliver Renner (@_orenner) & slingn.eth (@slingncrypto)            #
# © 2021                                                                       #
###############################################################################*/

const ExpandablesABI = require("../contracts/expandables_abi.json");
const BambooFactoryABI = require("../contracts/bamboo_factory_abi.json");

const settings = {
  rules: [
    {
      name: "Expandables Verifier",
      executor: {
        type: "ExpandablesVerificationRule.js",
        config: {
          roles: [
            {
              name: "Pandas",
              id: "918146827545636864"
            }
          ],
          ExpandablesContract: {
            Address: "0xD00e79629E2053D837285c74a0Ec09f51b33c141",
            ABI: ExpandablesABI,
          },
          BambooFactoryContract: {
            Address: "0xA75F96760B715A5958a62FDe3D739eB8b2A50A7C",
            ABI: BambooFactoryABI,
          },
        },
      },
    },
  ],
};

module.exports = settings;
