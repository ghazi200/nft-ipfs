require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const POLYGON_HTTP_URL = process.env.POLYGON_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: POLYGON_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};