const hre = require("hardhat");

async function main() {
  const DeFiLending = await hre.ethers.getContractFactory("DeFiLending");
  const lending = await DeFiLending.deploy();

  await lending.waitForDeployment();

  console.log(`DeFiLending deployed at: ${lending.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
