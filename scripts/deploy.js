const hre = require("hardhat");

async function main() {
  const CabBooking = await hre.ethers.getContractFactory("CabBooking");
  const cabBooking = await CabBooking.deploy();

  await cabBooking.deployed();
  console.log("CabBooking deployed to:", cabBooking.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
