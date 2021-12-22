/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

const expandablesAddress = "0xD00e79629E2053D837285c74a0Ec09f51b33c141";
const expandablesAbi = () => {
return `[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_baseTokenURI","type":"string"},{"internalType":"address[]","name":"payees","type":"address[]"},{"internalType":"uint256[]","name":"shares_","type":"uint256[]"},{"internalType":"address","name":"_vrfCoordinator","type":"address"},{"internalType":"address","name":"_linkToken","type":"address"},{"internalType":"bytes32","name":"_keyHash","type":"bytes32"},{"internalType":"uint256","name":"_fee","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"PayeeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"ARWEAVE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"IPFS_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimedFreeTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"closeMintingForever","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getTraits","outputs":[{"components":[{"internalType":"uint8","name":"background","type":"uint8"},{"internalType":"uint8","name":"fur","type":"uint8"},{"internalType":"uint8","name":"mouth","type":"uint8"},{"internalType":"uint8","name":"eyes","type":"uint8"},{"internalType":"uint8","name":"clothes","type":"uint8"},{"internalType":"uint8","name":"hat","type":"uint8"},{"internalType":"uint8","name":"power","type":"uint8"},{"internalType":"uint8","name":"speed","type":"uint8"},{"internalType":"uint8","name":"cuteness","type":"uint8"},{"internalType":"uint8","name":"intelligence","type":"uint8"}],"internalType":"struct Expandables.Expandable","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ownerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"},{"internalType":"uint256","name":"randomness","type":"uint256"}],"name":"rawFulfillRandomness","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"account","type":"address"}],"name":"sendShares","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseTokenURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"},{"internalType":"bytes32","name":"_merkleRootFree","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintPrice","type":"uint256"},{"internalType":"uint256","name":"_whiteListPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_whitelistOpen","type":"uint256"},{"internalType":"uint256","name":"_whitelistClose","type":"uint256"},{"internalType":"uint256","name":"_publicOpen","type":"uint256"}],"name":"setSaleWindows","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"shares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"maxAmount","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"whiteListMintFree","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"maxAmount","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"whitelistMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"withdrawLink","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
};

const bambooAddress = "0xA75F96760B715A5958a62FDe3D739eB8b2A50A7C";
const bambooAbi = ()=>{
    return `[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"_pandaContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"Unstaked","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"calculateHolderRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"calculateStakingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"calculateStakingRewardsByAccount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimHolderRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokens","type":"uint256[]"}],"name":"claimStakingRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"finalizeRewardsEnd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lastClaimedBlockForToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pandaContract","outputs":[{"internalType":"contract IERC721Enumerable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardsEnd","type":"uint256"}],"name":"setEndingBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"stakePandas","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"stakedPandasOf","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokens","type":"uint256[]"}],"name":"unstakePandas","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
};

const etherscanBase = `https://etherscan.io/tx/`;

const baseImageURI = "https://ipfs.io/ipfs/QmSLsBWSEZrARakXbQd3XLFaxEJoZzksXPYcCSaVXJcHQ7/";

const correctChain = 1;

/*********************************************************************************/
/***********************************DEV CONFIG************************************/
/*********************************************************************************/

// const expandablesAddress = "0x29c9559b0c323051d124b1d2936667f40a0ce317";
// const expandablesAbi = () => {
//     return `[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_baseTokenURI","type":"string"},{"internalType":"address[]","name":"payees","type":"address[]"},{"internalType":"uint256[]","name":"shares_","type":"uint256[]"},{"internalType":"address","name":"_vrfCoordinator","type":"address"},{"internalType":"address","name":"_linkToken","type":"address"},{"internalType":"bytes32","name":"_keyHash","type":"bytes32"},{"internalType":"uint256","name":"_fee","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"PayeeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"ARWEAVE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"IPFS_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimedFreeTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"closeMintingForever","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getTraits","outputs":[{"components":[{"internalType":"uint8","name":"background","type":"uint8"},{"internalType":"uint8","name":"fur","type":"uint8"},{"internalType":"uint8","name":"mouth","type":"uint8"},{"internalType":"uint8","name":"eyes","type":"uint8"},{"internalType":"uint8","name":"clothes","type":"uint8"},{"internalType":"uint8","name":"hat","type":"uint8"},{"internalType":"uint8","name":"power","type":"uint8"},{"internalType":"uint8","name":"speed","type":"uint8"},{"internalType":"uint8","name":"cuteness","type":"uint8"},{"internalType":"uint8","name":"intelligence","type":"uint8"}],"internalType":"struct Expandables.Expandable","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ownerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"},{"internalType":"uint256","name":"randomness","type":"uint256"}],"name":"rawFulfillRandomness","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"account","type":"address"}],"name":"sendShares","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseTokenURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"},{"internalType":"bytes32","name":"_merkleRootFree","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintPrice","type":"uint256"},{"internalType":"uint256","name":"_whiteListPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_whitelistOpen","type":"uint256"},{"internalType":"uint256","name":"_whitelistClose","type":"uint256"},{"internalType":"uint256","name":"_publicOpen","type":"uint256"}],"name":"setSaleWindows","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"shares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"maxAmount","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"whiteListMintFree","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"maxAmount","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"whitelistMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"withdrawLink","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
// };

// const bambooAddress = "0x22eB574e99d999cD579356a3487f6c6AF4684272";
// const bambooAbi = ()=>{
//     return `[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"_pandaContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"Unstaked","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"calculateHolderRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"calculateStakingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"calculateStakingRewardsByAccount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimHolderRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokens","type":"uint256[]"}],"name":"claimStakingRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lastClaimedBlockForToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pandaContract","outputs":[{"internalType":"contract IERC721Enumerable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardsEnd","type":"uint256"}],"name":"setEndingBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"stakePandas","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"stakedPandasOf","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokens","type":"uint256[]"}],"name":"unstakePandas","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
// };

// const etherscanBase = `https://rinkeby.etherscan.io/tx/`;

// const baseImageURI = 'https://ipfs.io/ipfs/QmfP6VGcW147NaijnWV3KeJyM6LnxQCaCaVMhXHgPmuGrf/'

// const correctChain = 4;

/*********************************END CONFIG************************************/

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser with MetaMask or the MetaMask mobile app to access staking.', false);
}

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const expandables = new ethers.Contract(expandablesAddress, expandablesAbi(),signer);
const bamboo = new ethers.Contract(bambooAddress, bambooAbi(),signer);
const connect = async()=>{
    await provider.send("eth_requestAccounts", []);
    await checkConnectedStatus();
};

const getAddress = async()=>{
    return await signer.getAddress()
};

const formatEther = (balance_)=>{
    return ethers.utils.formatEther(balance_)
};

const parseEther = (eth_)=>{
    return ethers.utils.parseEther(eth_)
};

const getChainId = async()=>{
    return await signer.getChainId()
};

const getExpandablesEnum = async()=>{
    let _ownedPandasCount = await expandables.balanceOf(await getAddress());
    return  _ownedPandasCount;
};

const getExpandablesOwned = async() => {
    let _userAddress = await getAddress();
    let _ownedPandasCount = await getExpandablesEnum();
    let _ownedPandas = [];
    for (let i = 0; i < _ownedPandasCount; i++) {
        _ownedPandas.push(Number(await expandables.tokenOfOwnerByIndex(_userAddress, i)))
    }
    return _ownedPandas.sort((a, b) => a - b);
}

const getExpandablesStakedEnum = async()=>{
    let _stakedPandas = await bamboo.stakedPandasOf((await getAddress()));
    return _stakedPandas.length;
};

const updateApprovedStatus = async()=>{
    if ((await expandables.isApprovedForAll((await getAddress()), bambooAddress))) {
        $("#approval-section").addClass('hidden');
        $("#block-screen-approval").addClass('hidden');
    }
    else {
        $("#approval-section").removeClass('hidden');
        $("#block-screen-approval").removeClass('hidden');
    }
};

const approvePandasToBamboo= async()=>{
    if ((await expandables.isApprovedForAll((await getAddress()), bambooAddress))) {
        displayErrorMessage(`Pandas already approved!`);
    }
    else {
        await expandables.setApprovalForAll(bambooAddress, true).then( async(tx_) => {
            await waitForTransaction(tx_);
        });
    }
};

const stakePandasToBamboo = async()=>{
    if (await bamboo.paused()) {
        displayErrorMessage("Staking contract is paused!")
    }
    else if (selectedForStaking.size == 0) {
        displayErrorMessage("Select at least 1 Panda to stake!")
    }
    else if ((await getExpandablesEnum()) == 0) {
        displayErrorMessage("No available Pandas to stake!")
    }
    else {
        const _pandasArray = Array.from(selectedForStaking);
    
        if (!(await expandables.isApprovedForAll((await getAddress()), bambooAddress))) {
            displayErrorMessage(`Error: Approve your Pandas first!`);
            return;
        };
        await bamboo.stakePandas(_pandasArray).then( async(tx_) => {
            for (let i = 0; i < _pandasArray.length; i++) {
                $(`#available-panda-${_pandasArray[i]}`).remove();
            }
            selectedForStaking = new Set();
            $("#selected-for-staking").text("None");
            $("#your-pandas").html(`Your Available Pandas (<span class="one">.</span><span class="two">.</span><span class="three">.</span>)`);
            await waitForTransaction(tx_);
        });
    }
};

const getBambooBalance = async()=>{
    return (formatEther(await bamboo.balanceOf((await getAddress()))));
};

const getPendingBambooBalance = async()=>{
    const pendingBamboo = (formatEther(await bamboo.calculateStakingRewardsByAccount((await getAddress()))));
    $("#claimable-bamboo").text(`${pendingBamboo}`);
    $("#claimable-bamboo").append( "<img style='margin-left:2px' src='./images/Bamboo5.png' width=32>");
};

const claimBamboo = async()=>{
    if (await bamboo.paused()) {
        displayErrorMessage("Staking contract is paused!")
    }
    else if (await bamboo.calculateStakingRewardsByAccount((await getAddress())) == 0) {
        await displayErrorMessage('You have no $BAMBOO to claim!')
    }
    else {
        await bamboo.claimStakingRewards(await bamboo.stakedPandasOf((await getAddress()))).then( async(tx_) => {
            await waitForTransaction(tx_);
        });
    }
};

const claimHolderBonus = async()=>{
    try {
        await bamboo.claimHolderRewards().then( async(tx_) => {
            await waitForTransaction(tx_);
        });
    }
    catch (error) {
        if ((error.message).includes("no rewards to claim")) {
            await displayErrorMessage(`No rewards to claim!`)
        }
        else if ((error.message).includes("paused")) {
            await displayErrorMessage(`Staking contract is paused!`)
        }
        else {
            console.log(error);
        }
    }
};

const unstakeByIds = async()=>{
    const numStaked = await getExpandablesStakedEnum();
    if (await bamboo.paused()) {
        displayErrorMessage("Staking contract is paused!")
    }
    else if (numStaked == 0) {
        displayErrorMessage("No Pandas staked!")
    }
    else if (selectedForUnstaking.size == 0) {
        displayErrorMessage("Select at least 1 Panda to unstake!")
    }
    else {
        const _pandasArray = Array.from(selectedForUnstaking);
        await bamboo.unstakePandas(_pandasArray).then( async(tx_) => {
            for (let i = 0; i < _pandasArray.length; i++) {
                $(`#staked-pandas-${_pandasArray[i]}`).remove();
            }
            selectedForUnstaking = new Set();
            $("#selected-for-unstaking").text("None");
            $("#bamboo-to-claim").text(`$BAMBOO to Claim: 0`);
            $("#your-staked-pandas").html(`Your Staked Pandas (<span class="one">.</span><span class="two">.</span><span class="three">.</span>)`);
            await waitForTransaction(tx_);
        }); 
    }
}

var currentlyStaked = [];

const getPandaImages = async()=>{
    $("#available-panda-images").empty();
    $("#staked-panda-images").empty();

    const _unstakedPandas = (await getExpandablesOwned());
    if (_unstakedPandas.length == 0) {
        $("#available-panda-images").append("<br><p style='color:black'>No pandas available...</p>");
    }
    else {
        for (let i = 0; i < _unstakedPandas.length; i++) {
            let _pandaId = _unstakedPandas[i];
            let active = "";
            if (selectedForStaking.has(Number(_pandaId))) {
                active = "active";
            }
            let _fakeJSX = `<div id="panda-${_pandaId}" class="staker-panda ${active}"><img onclick="selectForStaking(${_pandaId})" src="${baseImageURI}${_pandaId}.png"><p class="panda-id">#${_pandaId}</p></div>`

            $("#available-panda-images").append(_fakeJSX);
        };
    }

    const _stakedPandas = (await bamboo.stakedPandasOf((await getAddress())));
    currentlyStaked = _stakedPandas;
    stakedPandaCount = _stakedPandas.length;
    if (_stakedPandas.length == 0) {
        $("#staked-panda-images").append("<br><p>No pandas staking...</p>");
    }
    else {
        for (let b = 0; b < _stakedPandas.length; b++) {
            let _pandaId = _stakedPandas[b];
            let active= "";
            if (selectedForUnstaking.has(Number(_pandaId))) {
                active = "active";
            }
            let bambooEarned = formatEther(await bamboo.calculateStakingRewards(_pandaId));
            let _fakeJSX = `<div id="panda-${_pandaId}" class="staker-panda ${active}"><img onclick="selectForUnstaking(${_pandaId})" src="${baseImageURI}${_pandaId}.png"><p class="panda-id">#${_pandaId}</p><p class="bamboo-earned"><span id="bamboo-earned-${_pandaId}">${bambooEarned}</span><img class="stake-bamboo-symbol" style="border:none;margin-left:2px;cursor:default;" src='./images/Bamboo5.png' width=16 height=16></p></div>`
            
            $("#staked-panda-images").append(_fakeJSX);
        };
    }
};

const getBambooEarnedByID = async(id) => {
    try {
        return Number(formatEther(await bamboo.calculateStakingRewards(id))).toFixed(3);
    }
    catch {
        console.log('Metamask throws extra error. Token reward lookup was successful.')
        return 0;
    }
};

const updateBambooEarned = async() => {
    let totalEarned = 0;
    for (let i = 0; i < currentlyStaked.length; i++) {
        let _pandaId = currentlyStaked[i];
        let bambooEarnedByID = await getBambooEarnedByID(_pandaId);
        $(`#bamboo-earned-${_pandaId}`).text(bambooEarnedByID);
        if (selectedForUnstaking.has(Number(_pandaId))) {
            totalEarned += Number(bambooEarnedByID);
        }
    };
    $("#bamboo-to-claim").text(`$BAMBOO to Claim: ${totalEarned.toFixed(3)}`);
};

const updateStakingInfo = async()=>{
    if ((await getChainId()) === correctChain) {
        const loadingDiv = `<div class="loading-div" id="refresh-notification">REFRESHING <br>STAKING INTERFACE<span class="one">.</span><span class="two">.</span><span class="three">.</span>​</div><br>`;
        $("#pending-transactions").append(loadingDiv);

        await updateApprovedStatus();
        await getPandaImages();
        $("#your-staked-pandas").text(`YOUR STAKED PANDAS (${await getExpandablesStakedEnum()})`);
        $("#your-pandas").text(`YOUR AVAILABLE PANDAS (${await getExpandablesEnum()})`);
        $("#your-bamboo").text(`${await getBambooBalance()} $BAMBOO`);
        await getPendingBambooBalance();
        $("#error-popup").remove();
        $("#refresh-notification").remove();

    } else {
        $("#wallet").text(`Wrong Network!`);
        $("#available-panda-images").empty();
        $("#staked-panda-images").empty();
        $("#available-panda-images").text("Error: Wrong Network");
        $("#staked-panda-images").text("Error: Wrong Network");
        $("#your-staked-pandas").text(`YOUR STAKED PANDAS (0)`);
        $("#your-pandas").text(`YOUR AVAILABLE PANDAS (0)`);
        $("#your-bamboo").text(`0.0 $BAMBOO`);
        $("#your-pending-bamboo").text(`0.0`);
        $("#your-pending-bamboo").append(`<img src='./images/Bamboo5.png' width=32>`);
        displayErrorMessage("Error: Wrong Network", false);
    }
};

const updateCurrentChain = async() => {
    if ((await getChainId()) !== correctChain) {
        displayErrorMessage("Error: Wrong Network!", false);
    }
    else {
        $("#error-popup").remove();
        $("#block-screen-error").remove();
    }
}

provider.on("network", async(newNetwork, oldNetwork) => {
        if (oldNetwork) {
            $("#refresh-notification").remove();
            await updateCurrentChain();
            await updateStakingInfo();
        }
    });

// Processing tx returns
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("ExpandablesPendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i =0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("ExpandablesPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("ExpandablesPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span>​<br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateStakingInfo();
    }
}

var selectedForStaking = new Set();
var selectedForUnstaking = new Set();

async function selectForStaking(id) {
    if (!selectedForStaking.has(id)) {
        selectedForStaking.add(id);
        $(`#panda-${id}`).addClass("active");
    }
    else {
        selectedForStaking.delete(id);
        $(`#panda-${id}`).removeClass("active");
    }
    if (selectedForStaking.size == 0) {
        $("#selected-for-staking").text("None");
    }
    else {
        let selectedString = `${Array.from(selectedForStaking).sort((a, b) => a - b).join(' ')}`;
        $("#selected-for-staking").text(selectedString);
    }
}

async function selectForUnstaking(id) {
    if (!selectedForUnstaking.has(id)) {
        selectedForUnstaking.add(id);
        $(`#panda-${id}`).addClass("active");
    }
    else {
        selectedForUnstaking.delete(id);
        $(`#panda-${id}`).removeClass("active");
    }
    if (selectedForUnstaking.size == 0) {
        $("#selected-for-unstaking").text("None");
        $("#bamboo-to-claim").text(`$BAMBOO to Claim: 0`);
    }
    else {
        let selectedForUnstakingArray = Array.from(selectedForUnstaking).sort((a, b) => a - b);
        let bambooToClaim = 0;
        for (let i = 0; i < selectedForUnstakingArray.length; i++) {
            bambooToClaim += Number(await getBambooEarnedByID(selectedForUnstakingArray[i]));
        }
        $("#bamboo-to-claim").text(`$BAMBOO to Claim: ${bambooToClaim.toFixed(3)}`);
        let selectedString = `${selectedForUnstakingArray.join(' ')}`;
        $("#selected-for-unstaking").text(selectedString);
    }
}

const checkConnectedStatus = async() => {
    try {
        await getAddress();
        $(".connect-wallet-div").addClass('hidden');
    }
    catch {
        $(".connect-wallet-div").removeClass('hidden');
    }
}

setInterval(async()=>{
    await checkConnectedStatus();
    await updateApprovedStatus();
    await getPendingBambooBalance();
}, 5000)

setInterval(async()=> {
    await updateBambooEarned();
}, 20000)

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
    await updateStakingInfo()
    await getPandaImages();
});

window.onload = async()=>{
    await checkConnectedStatus();
    await updateApprovedStatus();


    if (pendingTransactions.size < 1) {
        await updateStakingInfo();
    }
};

window.onunload = async()=>{
    cachePendingTransactions();
}