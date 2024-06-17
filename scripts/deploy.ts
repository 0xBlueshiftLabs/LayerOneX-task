// scripts/deploy_myerc20.js
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Token = await ethers.getContractFactory("Token");
  const initialSupply = "1000e18"; // 1000 tokens

  const token = await Token.deploy(initialSupply);

  // await token.waitForDeployment();

  console.log("Token deployed to: ", await token.getAddress());
  console.log("Tx hash: ", token.deploymentTransaction().hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
