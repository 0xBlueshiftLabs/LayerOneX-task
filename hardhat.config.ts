import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";

const privateKey = ""; // don't do this is prod env

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    localhost: {
      url: "localhost:8545",
    },
    l1xTestnet: {
      url: "https://v2-testnet-rpc.l1x.foundation",
      accounts: [privateKey],
    },
  },
};

export default config;
