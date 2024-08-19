const hre = require("hardhat");
const utils = require("../utils/utils.js")

async function main() {
  const contractAddress = "0x07a316C555Cad3A160EA7718BD05f162B9ED8AF3";
  const [signer] = await hre.ethers.getSigners();

  const contractFactory = await hre.ethers.getContractFactory("STPErc20");
  const contract = contractFactory.attach(contractAddress);

  const mint = await utils.sendShieldedTransaction(
    signer,
    contractAddress,
    "",
    0
  );

  await mint.wait();
  console.log("Transaction Receipt: ", mint.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});