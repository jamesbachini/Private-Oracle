require('dotenv').config();
const axios = require('axios');
const { ethers } = require('ethers');

const API_ENDPOINT = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const RPC_URL = 'https://rpc.sepolia.org';
const CONTRACT_ADDRESS = '0xFD0F9A208fE892E6f5110A92bBcB58DfD4f361C7';
const CONTRACT_ABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_newPrice",
                "type": "string"
            }
        ],
        "name": "updatePrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

async function fetchBitcoinPrice() {
    const response = await axios.get(API_ENDPOINT);
    return response.data.bpi.USD.rate_float;
}

async function updateOracle() {
    try {
        const bitcoinPrice = await fetchBitcoinPrice();
        // You probably wouldn't want to format this in json
        const json = `{"bitcoin":"${bitcoinPrice}"}`;

        const provider = new ethers.JsonRpcProvider(RPC_URL);
        const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

        const tx = await contract.updatePrice(json);
        await tx.wait();

        console.log('The oracle has spoken:', json);
    } catch (error) {
        console.error('The spirits are angry:', error);
    }
}

setInterval(updateOracle, 60 * 1000); // every 60 seconds
updateOracle();