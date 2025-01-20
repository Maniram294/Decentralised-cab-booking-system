import { JsonRpcProvider } from 'ethers';

// Connect to the Ethereum network
const provider = new JsonRpcProvider("https://polygon-amoy.g.alchemy.com/v2/P3lTSoQpPQyHVLjbMXafVq5fFGUntGsS");

// Get block by number
const blockNumber = "latest";
const block = await provider.getBlock(blockNumber);

console.log(block);