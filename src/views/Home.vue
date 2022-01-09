<template>
<main id="main">
    <div class="content">
            <h3 class="account">
                Connected Account <span id="account" class="purple">{{account}}</span>
                <button v-if="!starAdded" @click="CustomToken" class="addStar">Add Stars to <img width="30px" src="https://jaguarswap.com/images/tokens/metamask.png"></button>
                <div v-if="!connected" class="connect">
                    <button  @click="matics" class="connectWallet"><i class="fas fa-network-wired"></i>Connect</button>
                </div>
                <div v-if="connected" class="disconnect">
                    <button @click="disconnect()" class="connectWallet"><i class="fas fa-network-wired"></i>Disconnect</button>
                </div>
            </h3>
            <!-- <button @click="MetaMask" class="connectWallet"><i class="fas fa-network-wired"></i>Connect</button> -->

        <h4 class="heading center">Welcome to the Starseed Exchange</h4>
        <p class="sm-heading center">The future is now.</p>
        <!-- <h5 class="sub-heading">Time until farming ends</h5> -->
        <div class="cards">
            <div class="container">
                <div class="card" style="min-width:40%">
                    <div>
                        <div class="icon">
                            <img :src="logoMain"> Farms & Staking
                        </div>
                        <div class="grid">
                            <div class="label">
                                Star to Harvest :
                            </div>
                            <div class="starHarvest">
                                {{starHarvest}}
                            </div>
                        </div>
                        <div class="grid">
                            <div class="label">
                                Star in Wallet :
                            </div>
                            <div v-if="availStar" class="availStar">
                                {{availStar}}
                            </div>
                        </div>

                        <button v-if="!connected" @click="matics">Unlock Wallet</button>

                    </div>
                </div>
                <div class="card"  style="min-width:40%">
                    <div style="width:100%;height:100%;">
                        <div class="icon">
                            <img :src="Announcement"> Announcement
                        </div>
                    </div>
                </div>
                <div class="card"  style="min-width:20%">
                    <router-link :to="{path:'/farm'}">

                        <div class="headings">
                            Earn up to <br><span class="purple"> $ 0.00</span> in Farms
                        </div>

                    </router-link>

                </div>
                <div class="card"  style="min-width:20%;background:rgb(41 12 58 / 90%)">
                     <router-link :to="{path:'/pool'}">
                        
                        <div class="grid">
                            <div class="headings">
                                Stake <br> <span class="purple">STAR, WETH, WBTC</span> in Polls
                            </div>
                        </div>

                    </router-link>

                </div>
                <div class="card"  style="min-width:20%" @click="getStar()">
                    <div>
                        
                        <div class="grid">
                            <div class="headings">
                                Buy <br> <span class="purple">STARS</span> 
                            </div>
                        </div>

                    </div>

                </div>
                <div class="card"  style="min-width:40%">
                    <div>
                        <div class="icon">
                            <img :src="logoMain"> STAR Stats
                        </div>
                        <div class="grid">
                            <div class="label">
                                STAR Price :
                            </div>
                            <div class="cont">
                                 ${{(+starValue).toFixed(4)}}
                            </div>
                        </div>
                        <div class="grid">
                            <div class="label">
                                Maximum Mint :
                            </div>
                            <div class="cont">
                                111,111
                            </div>
                        </div>
                        <div class="grid">
                            <div class="label">
                               Total Minted : 
                            </div>
                            <div class="cont">
                                {{(+totalMinted).toFixed(4)}}
                            </div>
                        </div>
                        <div class="grid">
                            <div class="label">
                                Circulating Supply :
                            </div>
                            <div class="cont">
                                {{(+currentSupply).toFixed(4)}}
                            </div>
                        </div>
                        <div class="grid">
                            <div class="label">
                               Total Burned :
                            </div>
                            <div class="cont">
                                {{(+burnedStar).toFixed(4)}}
                            </div>
                        </div>
                        <div class="grid">
                            <div class="label">
                                Burn Value
                            </div>
                            <div class="cont">
                                ${{(+burnValue).toFixed(4)}}
                            </div>
                        </div>
                        <div class="grid">
                            <div class="label">
                                Market Cap :
                            </div>
                            <div class="cont">
                                $0
                            </div>
                        </div>
                        <div class="grid">
                            <div class="label">
                                New STAR/block :
                            </div>
                            <div class="cont">
                                0
                            </div>
                        </div>

                    </div>

                </div>
                <div class="card"  style="min-width:40%">
                    <div>
                        <div class="grid">
                            <div class="headings">
                                <span class="purple">$0.00</span> <br> Across all <br> Farms and Pools
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
        
    </div>
    <div v-if="messages" class="messages">
            <h4>{{messages}}</h4>
        </div>
</main>
</template>

<script>
import axios from 'axios'
import moment from "moment"

import logoMain from '../assets/logo-3.png';
import Announcement from '../assets/loudspeaker.png';
import Earn from '../assets/salary.png';

import WalletConnectProvider from "@maticnetwork/walletconnect-provider"

import Web3 from "web3"
import Matic from "maticjs"
import getWeb3 from './web3.js';
import {ethers} from "ethers";
export default {
    components: {},
    data() {
        return {
            Announcement:Announcement,
            logoMain:logoMain,
            account: "Not Connected",
            messages:false,
            availStar:"Connect Wallet",
            starHarvest:"Connect Wallet",
            connected:false,
            totalMinted:null,
            starAdded:false,
            burnedStar:"--",
            currentSupply: null,
            burnValue:null,
            starValue:0,
            starContractInstance:null,
            starContractAbi :[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "bool", "name": "enabled", "type": "bool" } ], "name": "BuyBackEnabledUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "tokenAmount", "type": "uint256" } ], "name": "RewardLiquidityProviders", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "tokensSwapped", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "ethReceived", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokensIntoLiqudity", "type": "uint256" } ], "name": "SwapAndLiquify", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "bool", "name": "enabled", "type": "bool" } ], "name": "SwapAndLiquifyEnabledUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "indexed": false, "internalType": "address[]", "name": "path", "type": "address[]" } ], "name": "SwapETHForTokens", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "indexed": false, "internalType": "address[]", "name": "path", "type": "address[]" } ], "name": "SwapTokensForETH", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "newRate", "type": "uint256" } ], "name": "UpdateDevFee", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "newRate", "type": "uint256" } ], "name": "UpdateFundOrBurnFee", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "newRate", "type": "uint256" } ], "name": "UpdateLiquidityFee", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "newAmount", "type": "uint256" } ], "name": "UpdateMaxTxAmount", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "newRate", "type": "uint256" } ], "name": "UpdateTaxFee", "type": "event" }, { "inputs": [], "name": "MAX_DEV_FEE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_FUND_OR_BURN_FEE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_LIQUIDITY_FEE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_TAX_FEE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MIN_TX_AMOUNT_HARD_CAP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_devFee", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_fundOrBurnFee", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_liquidityFee", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_maxTxAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_taxFee", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_amount", "type": "uint256" } ], "name": "buyBackAndBurn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "buyBackEnabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "buyBackUpperLimitAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "deadAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "excludeFromFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "excludeFromReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "includeInFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "includeInReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_account", "type": "address" } ], "name": "isExcludedFromAntiWhale", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "isExcludedFromFee", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "isExcludedFromReward", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_address", "type": "address" } ], "name": "isIncludedInStarLpList", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minimumBalanceRequired", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minimumSellOrderAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minimumTokensBeforeSwapAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tAmount", "type": "uint256" }, { "internalType": "bool", "name": "deductTransferFee", "type": "bool" } ], "name": "reflectionFromToken", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "_enabled", "type": "bool" } ], "name": "setBuyBackEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "buyBackLimit", "type": "uint256" } ], "name": "setBuybackUpperLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "devFee", "type": "uint256" } ], "name": "setDevFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_account", "type": "address" }, { "internalType": "bool", "name": "_isExcludedOrNot", "type": "bool" } ], "name": "setExcludedFromAntiWhale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "fundorBurnFee", "type": "uint256" } ], "name": "setFundOrBurnFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_address", "type": "address" }, { "internalType": "bool", "name": "_isIncludedOrNot", "type": "bool" } ], "name": "setIncludeInStarLpList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "liquidityFee", "type": "uint256" } ], "name": "setLiquidityFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "maxTxAmount", "type": "uint256" } ], "name": "setMaxTxAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_newAmount", "type": "uint256" } ], "name": "setMinimumBalanceRequired", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_newAmount", "type": "uint256" } ], "name": "setMinimumSellOrderAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_minimumTokensBeforeSwap", "type": "uint256" } ], "name": "setNumTokensSellToAddToLiquidity", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "_enabled", "type": "bool" } ], "name": "setSwapAndLiquifyEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "taxFee", "type": "uint256" } ], "name": "setTaxFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "swapAndLiquifyEnabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "rAmount", "type": "uint256" } ], "name": "tokenFromReflection", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalFees", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "uniswapV2Pair", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "uniswapV2Router", "outputs": [ { "internalType": "contract IUniswapV2Router02", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ],
            starContractAddress : "0xC6e2e8395A671eE3f6f55177F8Fe5984D5dA7741", 
            web3: null,
            contracts:{
                "WMatic":{
                    address:"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
                    ABI:[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]
                },
                "MaticETH":{
                    address:"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
                    ABI:[{"inputs":[{"internalType":"address","name":"childChainManager","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CHILD_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CHILD_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSITOR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ERC712_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bytes","name":"depositData","type":"bytes"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getDomainSeperator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
                },
                "ETHBTC":{
                    address:"0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
                    ABI:[{"inputs":[{"internalType":"address","name":"_proxyTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_new","type":"address"},{"indexed":false,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyOwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_new","type":"address"},{"indexed":true,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyType","outputs":[{"internalType":"uint256","name":"proxyTypeId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"updateAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"}],"name":"updateImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
                },
                "MaticBTC":{
                    address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
                    ABI:[{"inputs":[{"internalType":"address","name":"_proxyTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_new","type":"address"},{"indexed":false,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyOwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_new","type":"address"},{"indexed":true,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"IMPLEMENTATION_SLOT","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OWNER_SLOT","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyType","outputs":[{"internalType":"uint256","name":"proxyTypeId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"updateAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"}],"name":"updateImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
                }
            }
        }
    },
    watch: {
        '$route': {
            handler(newValue, oldValue) {

            }
        }
    },
    created() {
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
        }
        if(this.$route.params.web3 == null || this.$route.params.account == null){
            console.log("account not set");
            this.matics();
            this.getBurnedStar();
            this.getTotalSupply();
        }
        else{
            console.log("account already set");
            this.account = this.$route.params.account;
            this.web3 = this.$route.params.web3;
            var chainId = new this.web3.eth.getChainId();
            this.starContractInstance = new this.web3.eth.Contract(this.starContractAbi, this.starContractAddress);
            if(chainId != 0x89){this.setChain()};
            this.getBurnedStar();
            this.getTotalSupply();
        }
    },
    methods: {
        async matics(){
            getWeb3().then((result) => {
                const web3 = result;// we instantiate our contract next
                this.web3 = web3;
                this.$route.params.web3 = web3;
                var chainId = new web3.eth.getChainId();
                if(chainId != 0x89){this.setChain()};
                console.log(web3);
                web3.eth.getAccounts()
                    .then((accounts) => {
                        if(accounts.length > 0){
                            this.$route.params.account = accounts[0];
                            this.connected = true;
                            this.account = accounts[0];
                            this.messages = " Account: " + this.account;
                            setTimeout(d=>{this.messages = false},1000);

                            this.starContractInstance = new web3.eth.Contract(this.starContractAbi, this.starContractAddress);
                            
                            const masterChefContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"BonusMupltiplier","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"EmissionRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBalance","type":"uint256"}],"name":"Funded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountLockedUp","type":"uint256"}],"name":"RewardLockedUp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_DEPOSIT_FEE_RATE","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_HARVEST_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_STAR_PER_BLOCK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contractIERC20","name":"_lpToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"_harvestInterval","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"canHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"collectFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"fundMasterChef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"getDepositFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"harvestStar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingStar","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contractIERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accStarPerShare","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"harvestInterval","type":"uint256"},{"internalType":"uint256","name":"totalLp","type":"uint256"},{"internalType":"uint256","name":"depositFees","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"remainingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"_harvestInterval","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devAddress","type":"address"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"setStarId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setstarContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"star","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"starPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startFarming","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLockedUpRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStarInPools","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"updateAllocPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bonus","type":"uint256"}],"name":"updateBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_starPerBlock","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"rewardLockedUp","type":"uint256"},{"internalType":"uint256","name":"nextHarvestUntil","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
                            const masterChefContractAddress = "0x56658E666Da404dD23107306453c7c8dE6351776";
                            const masterChefContractInstance = new web3.eth.Contract(masterChefContractAbi, masterChefContractAddress);

                            this.messages = " Pending..."
                            try{
                                this.starContractInstance.methods.balanceOf(this.account).call()
                                .then (
                                    (receipt) => {
                                        console.log(receipt)
                                        this.messages = "Trasnaction Successfull.";
                                        this.availStar = (receipt/10**18).toFixed(4);
                                    setTimeout(d=>{
                                            this.messages = false
                                    },1000)
                                    //this.$router.go();
                                })
                            }catch (error) {
                                console.log(error);
                                this.messages = "Get balance: " +error
                                setTimeout(d=>{
                                    this.messages = false
                                },5000)
                            }
                            try{
                                this.messages = "Getting star ready for harvest";
                                masterChefContractInstance.methods.pendingStar(0,this.account).call()
                                    .then((receipt) => {
                                        console.log(receipt)
                                        this.messages = "Transaction Successfull.";
                                        this.starHarvest = (receipt/10**18).toFixed(4);
                                        setTimeout(d=>{
                                            this.messages = false
                                        },1000)
                                    //this.$router.go();
                                })
                            }catch (error) {
                                console.log(error);
                                this.messages = "get star harvest: " +error
                                setTimeout(d=>{
                                    this.messages = false
                                },5000)
                            }
                        }
                        else{
                            this.messages = "No account Connected"
                            setTimeout(d=>{
                                this.messages = false
                            },5000)
                        }                
                    })
            })
            
                
            return;
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts'
            });
            console.log(accounts)
            this.account = accounts[0];
            const maticProvider = new WalletConnectProvider(
                {
                    host: "https://rpc-mumbai.matic.today",
                    callbacks: {
                    onConnect: console.log('connected'),
                    onDisconnect: console.log('disconnected!')
                    }
                }
                )
            const ropstenProvider = new WalletConnectProvider({
                host: "https://ropsten.infura.io/v3/70645f042c3a409599c60f96f6dd9fbc",
                callbacks: {
                    onConnect: console.log('connected'),
                    onDisconnect: console.log('disconnected')
                }
                })
            const maticWeb3 = new Web3(maticProvider)
            const ropstenWeb3 = new Web3(ropstenProvider)
            const myContractAbi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"setFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_transferFee","type":"uint256"}],"name":"setTransferFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setWhitelisted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
            const myContractAddress = "0xC6e2e8395A671eE3f6f55177F8Fe5984D5dA7741"; 
            const myContractInstance = new maticWeb3.eth.Contract(myContractAbi, myContractAddress)
            const tx = {
                            from: this.account,
                            to: myContractAddress,
                            gas: 800000,
                            data: myContractInstance.methods.balanceOf(this.account).encodeABI(),
                       }
                maticWeb3.eth.signTransaction(tx)
                .then((result) =>{
                    maticWeb3.eth.sendSignedTransaction(result)
                    .then((receipt) => 
                    console.log (receipt)
                )
                })

        },
        async CustomToken() {
            //var tokens = await this.MetaMask()
            const tokenAddress = '0xC6e2e8395A671eE3f6f55177F8Fe5984D5dA7741';
            const tokenSymbol = 'STAR';
            const tokenDecimals = 18;
            const tokenImage = 'https://upwork-usw2-prod-file-storage-wp1.s3.us-west-2.amazonaws.com/workplace/attachment/fa082a5b2e94bf1e76ca0f9b5fc23411?response-content-disposition=inline%3B%20filename%3D%22Starseed-Dimension1.jpg%22%3B%20filename%2A%3Dutf-8%27%27Starseed-Dimension1.jpg&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIGw2APTHGT%2BDzrP4FrawkgDvU5hD%2Fr2hbDHPVM074KpkAiEAw3sFP5RDbQn1YefTCH8FISnhl724N4UQ0KBQPmIKouAq1gQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3Mzk5MzkxNzM4MTkiDAImma6YwmGQI3Wu3SqqBIuFEDzBiTY5AOjndBtNhTUDamknRsuB4AX8IDsrm6bMNu8sVHOhQFMJ7UiFK155cMYs%2FM6IfhxFJUqzZuAZsks4dLdKMe%2FVpe10XlmbulaYyJXKY577ULBsuhh56ba3Jx4UVWydotee0NMbjZOb%2FBuHXlogYtBvmk258j8mqjuVVxsgdo8slUfw85os%2Bzmk7%2F%2B3onTI2vl2BdTmI3oD1cpCz334mNvsxMLsAwTSl8f2A7L12W3MWuNAQtvNh%2By7Q5LSPn9cyqb1raUIoF2jS%2FRvH%2BaulGp2bhn733qJGqzwUNLYmi9pQyVnpJg66V5dPjF1t168QLbbSjEx9t7fp%2FWidZK08yL0%2FAy1doNH2FzNkPKmrhmiPAYqoohEgLlIeBqACzy70MLA9YJcsL%2Fe5Xh%2F7tkmYUdPk%2BtfKbMVo9fOxsibrmYaZ0vOr%2F5VdpckU%2FW%2FE2VUS%2BJwi21h%2Bee7UXXSsdSQBIBisOPhRj4dEn6skev41s49kmtHgsQvzCNvCzMc4kAteI87c7WnUb9CQjDVPxgpcMuLrR8xzh9Hd1PpOhB5aObvxaWJpCiAbDt8NgpcxUNWAr0HTxHmCRNV4iRz4GxwODTx9OHTv8xpkWsOlBMGw0%2BKgwZ9KKD1BvFu%2BsktKg2pLg3lkU0Er0%2FZe1fo%2Bs2STOPpoax8%2BlXU1w11R5XaC34KnJW0zz%2BUx6twfOy%2F7cFI4CF1Qsj%2BVD0%2BhLjJYu0%2BTKFJFo3SMNPp04oGOqcB%2Bg0mDvadqMC65u%2FMo3EWEkRwlPAByx8QTbIbNLPzVOcY5lqCEVhQVBYoXs2%2FbsNhKdUH3y5FjRewUPsk0grVBvanllaDyu6wHbCWcjcclKm8TmSKCOFFqCszfbqOU6nvOhnTL6sawLSx7f%2FGQI1FuYgqJIBTnuujPxGYrmq55XnVg%2Fdi30ijaSDj9VhpHqwukthXwNAlUUQnTsFvqzwOdkG6G2JvNSQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210930T001840Z&X-Amz-SignedHeaders=host&X-Amz-Expires=599&X-Amz-Credential=ASIA2YR6PYW54ATYNRN4%2F20210930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=b071723508914fffe021f4069504334a80e996e73e3079cc6b01ea48879aa57a';

            try {
                // wasAdded is a boolean. Like any RPC method, an error may be thrown.
                const wasAdded = await ethereum.request({
                    method: 'wallet_watchAsset',
                    params: {
                        type: 'ERC20', // Initially only supports ERC20, but eventually more!
                        options: {
                            address: tokenAddress, // The address that the token is at.
                            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                            decimals: tokenDecimals, // The number of decimals in the token
                            image: tokenImage, // A string url of the token logo
                        },
                    },
                });

                if (wasAdded) {
                    console.log('Thanks for your interest!');
                } else {
                    console.log('Your loss!');
                }
            } catch (error) {
                console.log(error);
            }
        },
        async setChain(){
            try {
                await ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x89' }],
                });
            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [{
                                chainId: '0x89',
                                chainName: 'Polygon Mainnet',
                                nativeCurrency: {
                                    name: 'Binance Coin',
                                    symbol: 'MATIC',
                                    decimals: 18
                                },
                                rpcUrls: ['https://polygon-rpc.com/'],
                                blockExplorerUrls: ['https://polygonscan.com/']
                            }],
                        });
                    } catch (addError) {
                        console.log("add chian error: "+addError);
                    }
                }
                else{
                    console.log("switch error: "+switchError)
                }
            }
        },
        async disconnect(){
            this.account = "Not Connected";
            this.$route.params.account = null;
            this.$route.params.web3 = null;
            this.web3 = null;
            this.connected = false;
            this.availStar="Connect Wallet";
            this.starHarvest="Connect Wallet";
        },
        async getBurnedStar(){
            try{
                var receipt = await this.starContractInstance.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call()
                    console.log("get burned star: " + receipt)
                    if(receipt == undefined){receipt = 0;}
                    this.burnedStar = ethers.utils.formatUnits(receipt,18);
                    this.burnValue = ethers.utils.formatUnits((receipt*this.starValue),18);
            }catch(error){
                console.log("get burned star error: " + error);
                }
        },
        async getTotalSupply(){
            try{
                var receipt = await this.starContractInstance.methods.totalSupply().call()
                    console.log("get total supply: " + receipt)
                    if(receipt == undefined){receipt = 0;}
                    this.totalMinted = ethers.utils.formatUnits(receipt,18);
                    this.currentSupply = (this.totalMinted) - (this.burnedStar);
                    console.log("currentsupply :" +this.currentSupply);
            }catch(error){
                console.log("get total supply error: " + error);
                }
        },
        getStar(){
            location.href = "https://quickswap.exchange/#/swap?outputCurrency=0xc6e2e8395a671ee3f6f55177f8fe5984d5da7741";
        },
    }
}
</script>

