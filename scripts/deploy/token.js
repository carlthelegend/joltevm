const { ethers } = require("hardhat");

async function main() {
    // This gets the network config and a list of accounts
    const [account] = await ethers.getSigners();
    
    // Fetch the balance of the first account in the list
    const balance = await account.getBalance();

    console.log(`Balance of account ${account.address} is: ${ethers.utils.formatEther(balance)} ETH`);

    const Token = await ethers.getContractFactory("Token");
    const totalSupply = ethers.utils.parseEther("10").toString()
    const token = await Token.deploy(totalSupply);

    const symbol = await token.symbol();
    console.log(symbol, "token deployed to:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
