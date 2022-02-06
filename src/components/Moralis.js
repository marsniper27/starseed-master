
import Web3 from 'web3';
import Moralis from "moralis";

/* Moralis init code */
const NODE_URL = "https://speedy-nodes-nyc.moralis.io/3e80fd791515a22ed9b5992f/polygon/mainnet";
const provider = new Web3.providers.HttpProvider(NODE_URL);
const moralisWeb3 = new Web3(provider)
//this.moralisStarContractInstance = new moralisWeb3.eth.Contract(this.starContractAbi, this.starContractAddress);
//this.moralisMasterChefContractInstance = new moralisWeb3.eth.Contract(this.masterChefContractAbi, this.masterChefContractAddress);

const serverUrl = "https://vwtvxfrruomo.usemoralis.com:2053/server";
const appId = "z1N9pHNcRMvVK7QAvDi13firPwgNaoNuzb1fYD9T";
Moralis.start({ serverUrl, appId })

export async function fetchPrice(options){
    return Moralis.Web3API.token.getTokenPrice(options);
}