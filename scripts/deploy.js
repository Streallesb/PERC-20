const { ethers } = require("hardhat");

async function main() {
  const contract = await ethers.deployContract("STPErc20");
  await contract.waitForDeployment();

  console.log(`STPErc20 was deployed to ${await contract.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});