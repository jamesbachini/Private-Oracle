# Private Oracle

This guide will walk you through the steps to set up your own oracle service to bring data on-chain. The process involves deploying a smart contract and setting up a NodeJS client to fetch the price of Bitcoin and update the contract with this data.

Full tutorial is on the blog at: https://jamesbachini.com/creating-your-own-oracle-solidity-nodejs/

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Deploying the Oracle Smart Contract](#deploying-the-oracle-smart-contract)
3. [Setting Up the Oracle NodeJS App](#setting-up-the-oracle-nodejs-app)
4. [Running the Oracle Service](#running-the-oracle-service)
5. [Considerations for Production](#considerations-for-production)

## Prerequisites

Before starting, ensure you have the following:

- **NodeJS** installed on your machine. You can download it from the [official website](https://nodejs.org/).
- **MetaMask** wallet set up with Sepolia testnet ETH.
- **Remix IDE** for deploying the smart contract. Access it at [Remix Ethereum](https://remix.ethereum.org/).

## Deploying the Oracle Smart Contract

1. **Create a Test Wallet:**
   - Set up a new wallet in MetaMask for testing purposes and fund it with Sepolia testnet ETH.

2. **Deploy the Smart Contract:**
   - Open [Remix](https://remix.ethereum.org/).
   - Create a new file and copy the smart contract code into it.
   - Compile the contract using `CTRL + S`.
   - Go to the "Deploy & Run Transactions" tab, set the environment to "Injected Provider - MetaMask".
   - Ensure you are connected to the Sepolia testnet, then deploy the contract.

3. **Save the Contract Address:**
   - After deployment, note down the contract address as you will need it later.

## Setting Up the Oracle NodeJS App

1. **Clone the Repository:**
   - Clone the [Private Oracle repository](https://github.com/jamesbachini/Private-Oracle) to your local machine.

2. **Install Dependencies:**
   - Navigate to the project directory and install the necessary NodeJS packages by running:
     ```bash
     npm install ethers dotenv axios
     ```

3. **Configure Environment Variables:**
   - In the root directory of the project, create a `.env` file.
   - Add your MetaMask wallet's private key to this file as follows:
     ```bash
     PRIVATE_KEY=0xYourPrivateKeyHere
     ```
   - **Warning:** Ensure this file is not shared or uploaded to any public repository, as it contains sensitive information.

4. **Update the Contract Address:**
   - Open the `oracle.js` file in the project.
   - Replace the existing contract address with the one you saved earlier.

## Running the Oracle Service

1. **Start the Oracle Service:**
   - In the terminal, navigate to the project directory and run the following command:
     ```bash
     node ./oracle.js
     ```
   - The script will start fetching the Bitcoin price every 60 seconds and updating the smart contract.

2. **Verify On-Chain Updates:**
   - You can verify the updates by checking the contract on [Sepolia Etherscan](https://sepolia.etherscan.io/).

## Considerations for Production

When moving from a test environment to production, consider the following:

1. **Oracle Type:** Determine if a private oracle is sufficient or if you need a decentralized service like Chainlink.
2. **Data Accuracy:** Use multiple data sources and perform sanity checks before updating the contract.
3. **Data Storage:** Normalize data to a Big Number format and store it in the contract as a `UINT` to avoid floating-point issues.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Socials

- [Website](https://jamesbachini.com)
- [YouTube](https://www.youtube.com/c/JamesBachini?sub_confirmation=1)
- [Substack](https://bachini.substack.com)
- [Podcast](https://podcasters.spotify.com/pod/show/jamesbachini)
- [Spotify](https://open.spotify.com/show/2N0D9nvdxoe9rY3jxE4nOZ)
- [Twitter](https://twitter.com/james_bachini)
- [LinkedIn](https://www.linkedin.com/in/james-bachini/)
- [GitHub](https://github.com/jamesbachini)
