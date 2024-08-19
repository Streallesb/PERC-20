const hre = require("hardhat");
const utils = require("../utils/utils.js")

async function main() {
  const contractAddress = "0x07a316C555Cad3A160EA7718BD05f162B9ED8AF3";

  const [signer] = await hre.ethers.getSigners();

  const contractFactory = await hre.ethers.getContractFactory("STPErc20");
  const contract = contractFactory.attach(contractAddress);

  const transaction = await utils.sendShieldedTransaction(signer, contractAddress, contract.interface.encodeFunctionData("transfer", ["0x16af037878a6cAce2Ea29d39A3757aC2F6F7aac1", "1"]), 0);

  await transaction.wait();

  console.log("Transaction Response: ", transaction);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});