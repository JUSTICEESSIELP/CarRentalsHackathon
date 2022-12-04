require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
const fs = require('fs');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const PRIVATEKEY = fs.readFileSync('.secret').toString()


const MUMBAIID = 'I-IBZKqmQ28PguAPzADnRyFQrlI2kwHd'
const MAINNETID = 'QIwF5vSTw6fjOBHhm5ieXSeer9_g6Q4e'


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  networks:{
    hardhat:{
      chainId:1337
      // no accounts are required because hardhat gives 20 fake accounts 

    }, 
    mumbai:{
      url:`https://polygon-mumbai.g.alchemy.com/v2/${MUMBAIID}`, 
      accounts:[PRIVATEKEY]

    },
    mainnet:{

      url:`https://polygon-mainnet.g.alchemy.com/v2/${MAINNETID}`, 
      accounts:[PRIVATEKEY]
    }
  }, 
  solidity: "0.8.17",
};