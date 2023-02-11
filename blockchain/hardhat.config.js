require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

require("dotenv").config({ path: ".env" });

const key = process.env.PRIVATE_KEY;
const url = process.env.INFURA_URL;
module.exports = {
  solidity: { compilers: [{ version: "0.8.1" }, { version: "0.8.0" }] },
  networks: {
    goerli: {
      url: url,
      accounts: [key],
    },
  },
};
