require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    amoy: {
      url: `https://polygon-amoy.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`, // Use the ALCHEMY_API_KEY from .env
      accounts: [process.env.PRIVATE_KEY], // Use the PRIVATE_KEY from .env
      chainId: 80002, // Polygon Amoy Testnet's chain ID
    },
  },
};
