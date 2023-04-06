<template>
    <main id="main">
        <div class="content">
            <h4 class="heading center">Star Command Bridge</h4>
            <div class="cards">
                <div class="container" style=" color:white; ">
                    <div class="card" v-for="stationClass in classes" v-bind:class="{'larger':stationClass.type}" style="min-height:600px;height:fit-content;align-items:center; padding: 5px 20px; text-align: center; min-width:200px; width:35%; overflow: auto;">
                        <div>
                            <div style="font-size:x-large">{{stationClass.name}}</div>
                            <div v-if="stationClass.class === 'Meteor'" style="padding-top: 19%; padding-bottom: 19%; ">
                                <video controls width="100%" 
                                    autoplay loop muted preload="auto"
                                    poster="poster.png">
                                    <source :src=stationClass.image type="video/mp4">
                                </video>
                            </div>
                            <div v-else>
                                <video controls width="100%" 
                                    autoplay loop muted preload="auto"
                                    poster="poster.png">
                                    <source :src=stationClass.image type="video/mp4">
                                </video>
                            </div>
                            <div>Cost: {{stationClass.price}} Star</div>
                            <!-- <div>APR: {{stationClass.apr}}</div>
                            <div>Class: {{stationClass.class}}</div> -->
                            <div style="padding-top:10px; padding-bottom: 10px; text-align:left">{{stationClass.description}}</div>
                            <button style="left:0%; " @click="mintStation(stationClass.pid)">Create {{stationClass.name}}</button>
                        </div>
                    </div>
                    <iframe data-aa='2196220' src='//ad.a-ads.com/2196220?size=728x90' style='width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe>
                    <iframe data-aa='2196218' src='//acceptable.a-ads.com/2196218' style='border:0px; padding:0; width:100%; height:100%; overflow:hidden; background-color: transparent;'></iframe>
                    <iframe data-aa='2196223' src='//ad.a-ads.com/2196223?size=728x90' style='width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe>
                </div>
            </div>
        </div>
        <div v-if="messages" class="messages">
                <h4>{{messages}}</h4>
            </div>
    </main>
    </template>
    
    <script>
    
    import getWeb3 from './web3.js';
    import Web3 from 'web3';
    import {ethers} from "ethers";
    import Moralis from "moralis";
    import { commify } from '@ethersproject/units';
    import * as Functions from "../components/functions.js";
    import {initMasterchef} from "../components/masterchef";
    
    const classes = require( "../components/CommandBridge.js");
    export default {
        components: {},
        data() {
            return {
                Functions:Functions,
                account: "Not Connected",
                classes:classes.classes,
                web3:null,
                availStar:"Connect Wallet",
                messages:false,
                connected:false,
                starStations:[],
                starContractAbi :[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "bool", "name": "enabled", "type": "bool" } ], "name": "BuyBackEnabledUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "tokenAmount", "type": "uint256" } ], "name": "RewardLiquidityProviders", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "tokensSwapped", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "ethReceived", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokensIntoLiqudity", "type": "uint256" } ], "name": "SwapAndLiquify", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "bool", "name": "enabled", "type": "bool" } ], "name": "SwapAndLiquifyEnabledUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "indexed": false, "internalType": "address[]", "name": "path", "type": "address[]" } ], "name": "SwapETHForTokens", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "indexed": false, "internalType": "address[]", "name": "path", "type": "address[]" } ], "name": "SwapTokensForETH", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "newRate", "type": "uint256" } ], "name": "UpdateDevFee", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "newRate", "type": "uint256" } ], "name": "UpdateFundOrBurnFee", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "newRate", "type": "uint256" } ], "name": "UpdateLiquidityFee", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "newAmount", "type": "uint256" } ], "name": "UpdateMaxTxAmount", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "newRate", "type": "uint256" } ], "name": "UpdateTaxFee", "type": "event" }, { "inputs": [], "name": "MAX_DEV_FEE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_FUND_OR_BURN_FEE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_LIQUIDITY_FEE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_TAX_FEE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MIN_TX_AMOUNT_HARD_CAP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_devFee", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_fundOrBurnFee", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_liquidityFee", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_maxTxAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_taxFee", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_amount", "type": "uint256" } ], "name": "buyBackAndBurn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "buyBackEnabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "buyBackUpperLimitAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "deadAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "excludeFromFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "excludeFromReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "includeInFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "includeInReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_account", "type": "address" } ], "name": "isExcludedFromAntiWhale", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "isExcludedFromFee", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "isExcludedFromReward", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_address", "type": "address" } ], "name": "isIncludedInStarLpList", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minimumBalanceRequired", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minimumSellOrderAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minimumTokensBeforeSwapAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tAmount", "type": "uint256" }, { "internalType": "bool", "name": "deductTransferFee", "type": "bool" } ], "name": "reflectionFromToken", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "_enabled", "type": "bool" } ], "name": "setBuyBackEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "buyBackLimit", "type": "uint256" } ], "name": "setBuybackUpperLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "devFee", "type": "uint256" } ], "name": "setDevFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_account", "type": "address" }, { "internalType": "bool", "name": "_isExcludedOrNot", "type": "bool" } ], "name": "setExcludedFromAntiWhale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "fundorBurnFee", "type": "uint256" } ], "name": "setFundOrBurnFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_address", "type": "address" }, { "internalType": "bool", "name": "_isIncludedOrNot", "type": "bool" } ], "name": "setIncludeInStarLpList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "liquidityFee", "type": "uint256" } ], "name": "setLiquidityFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "maxTxAmount", "type": "uint256" } ], "name": "setMaxTxAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_newAmount", "type": "uint256" } ], "name": "setMinimumBalanceRequired", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_newAmount", "type": "uint256" } ], "name": "setMinimumSellOrderAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_minimumTokensBeforeSwap", "type": "uint256" } ], "name": "setNumTokensSellToAddToLiquidity", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "_enabled", "type": "bool" } ], "name": "setSwapAndLiquifyEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "taxFee", "type": "uint256" } ], "name": "setTaxFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "swapAndLiquifyEnabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "rAmount", "type": "uint256" } ], "name": "tokenFromReflection", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalFees", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "uniswapV2Pair", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "uniswapV2Router", "outputs": [ { "internalType": "contract IUniswapV2Router02", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ],
                starContractAddress : "0x8440178087C4fd348D43d0205F4574e0348a06F0",
                starContractInstance:null,
                controllerContractAbi : [{"inputs": [{"internalType": "address","name": "_starGov","type": "address"},{"internalType": "address","name": "_stationAddress","type": "address"},{"internalType": "address","name": "operatorAddress","type": "address"}],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "MintNFT","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"inputs": [],"name": "URI","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "counter","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "","type": "uint256"}],"name": "lastPayout","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "maxStations","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "user","type": "address"}],"name": "mintNFT","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "owner","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "numProcess","type": "uint256"}],"name": "payout","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "operatorAddress","type": "address"}],"name": "setOperator","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "amount","type": "uint256"}],"name": "setPayout","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newAddress","type": "address"}],"name": "setStarAdress","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newAddress","type": "address"}],"name": "setStarDaoAdress","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "setStarGovOwner","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "limit","type": "uint256"}],"name": "setStationLimit","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "setStationOwner","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "price","type": "uint256"}],"name": "setStationPrice","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "stationPrice","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalMinted","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalPayout","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"}],
                controllerContractAddress : "0x2b4cF5D2dEB7305e5d9C2009Bc1D3b9b60d36c2f",
                controllerContractInstance: null,
                tokenURIABI :[{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "owner","type": "address"},{"indexed": true,"internalType": "address","name": "approved","type": "address"},{"indexed": true,"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "Approval","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "owner","type": "address"},{"indexed": true,"internalType": "address","name": "operator","type": "address"},{"indexed": false,"internalType": "bool","name": "approved","type": "bool"}],"name": "ApprovalForAll","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "from","type": "address"},{"indexed": true,"internalType": "address","name": "to","type": "address"},{"indexed": true,"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "Transfer","type": "event"},{"inputs": [{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "approve","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"}],"name": "balanceOf","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "burn","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "getApproved","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "address","name": "operator","type": "address"}],"name": "isApprovedForAll","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "name","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "owner","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "ownerOf","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "to","type": "address"}],"name": "safeMint","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "safeTransferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"},{"internalType": "bytes","name": "data","type": "bytes"}],"name": "safeTransferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "operator","type": "address"},{"internalType": "bool","name": "approved","type": "bool"}],"name": "setApprovalForAll","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "bytes4","name": "interfaceId","type": "bytes4"}],"name": "supportsInterface","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "symbol","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "tokenURI","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "transferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"}],
                tokenContract:"0x9e0E40e4Fc049df4Ab73140900DBfE9b0245DbbA",
                tokenContractInstance:null,
                image:null
            }
        },
        watch: {
            '$route': {
                handler(newValue, oldValue) {
    
                }
            }
        },
        async created() {
            if (typeof window.ethereum !== 'undefined') {
                console.log('MetaMask is installed!');
                if(this.$route.params.web3 == null || this.$route.params.account == null){
                    console.log("account not set");
                    await this.matics();
                    // await this.getNFTMetadata();
                }
                else{
                    console.log("account already set");
                    this.connected= true;
                    this.account = this.$route.params.account;
                    this.web3 = this.$route.params.web3;
                    var chainId = new this.web3.eth.getChainId();
                    if(chainId != 0x89){await Functions.setChain('0x89')
                        this.$router.go();};
                    this.starContractInstance = new this.web3.eth.Contract(this.starContractAbi, this.starContractAddress);
                    this.controllerContractInstance = new this.web3.eth.Contract(this.controllerContractAbi, this.controllerContractAddress);
                    this.tokenContractInstance = new this.web3.eth.Contract(this.tokenURIABI, this.tokenContract);
                    // await this.getBalance();
                    // await this.getNFTMetadata();
                }                    
            }
            else{
                //this.matics();
                if(confirm("Would you like to get MetaMask?")){
                    Functions.getMetamask();
                }
            }
            // console.log(this.web3.currentProvider)
        },
        methods: {
            async matics(){
                getWeb3().then((result) => {
                    //console.log(result);
                    if(result == 'Non-Ethereum browser detected. You should consider trying MetaMask!'){
                        this.messages = result;
                        setTimeout(d=>{
                            this.messages = false;
                        },5000)
                    }
                    else{
                        const web3 = result;// we instantiate our contract next
                        this.web3 = web3;
                        this.$route.params.web3 = web3;
                        web3.eth.getChainId().then((chainId)=>{if(chainId != 0x89){Functions.setChain('0x89')};});
                        
                        web3.eth.getAccounts().then((accounts) => {
                            if(accounts.length > 0){
                                this.$route.params.account = accounts[0];
                                this.connected = true;
                                this.account = accounts[0];
                                //this.messages = " Account: " + this.account;
                                setTimeout(d=>{this.messages = false},1000);
                                this.starContractInstance = new web3.eth.Contract(this.starContractAbi, this.starContractAddress);
                                this.controllerContractInstance = new web3.eth.Contract(this.controllerContractAbi, this.controllerContractAddress);
                                this.tokenContractInstance = new this.web3.eth.Contract(this.tokenURIABI, this.tokenContract);
                                this.messages = " Pending..."
                                // this.getBalance();
                                // this.getNFTMetadata();
                            }
                                
                            else{
                                this.messages = "No account Connected"
                                setTimeout(d=>{
                                    this.messages = false
                                },3000)
                            }
                        })
                    }
                })
            },
            // async getBalance(){
            //     try{
            //         this.starContractInstance.methods.balanceOf(this.account).call()
            //         .then (
            //             (receipt) => {
            //                 // console.log("balance: "+receipt)
            //                 this.messages = "Transaction Successfull.";
            //                 this.availStar = (receipt/10**18).toFixed(4);
            //             setTimeout(d=>{
            //                     this.messages = false
            //             },1000)
            //             //this.$router.go();
            //         })
            //     }catch (error) {
            //         console.log(error);
            //         this.messages = "Get balance: " +error
            //         setTimeout(d=>{
            //             this.messages = false
            //         },5000)
            //     }
            // },
            async disconnect(){
                this.account = "Not Connected";
                this.$route.params.account = null;
                this.$route.params.web3 = null;
                this.web3 = null;
                this.connected = false;
                this.availStar="Connect Wallet";
                this.starHarvest="Connect Wallet";
                this.lpContractInstance = false;
                this.masterChefContractInstance = false;
            },
            async mintStation(stationClass){
                var totalStations = await this.controllerContractInstance.methods.totalMinted().call();
                console.log(totalStations)
                var allowance = await this.starContractInstance.methods.allowance(this.account,this.controllerContractAddress).call();
                if(allowance < 22*10**18){
                    var rates = await Functions.getRates();
                    try{
                        var receipt = await this.starContractInstance.methods.approve(this.controllerContractAddress,ethers.utils.parseUnits("100000",18))
                            .send({
                                maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                                maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                                from:this.account
                            });
                            if(receipt){
                                try{
                                    this.controllerContractInstance.methods.mintNFT(this.account)
                                        .send({
                                            maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                                            maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                                            from:this.account
                                        }).then((res)=>{
                                            this.message = "Deploying Star Command Bridge"
                                            if(res){
                                                setTimeout(()=>{
                                                    this.controllerContractInstance.methods.totalMinted().call().then((newStations)=>{
                                                        console.log(newStations);
                                                        if(newStations>totalStations){
                                                            this.message = "Deployment Complete"
                                                        }
                                                        return;
                                                    })}
                                                ,20000)
                                            }
                                        });
                                }catch(error){
                                    console.log("staking after approval error: " +error);
                                }
                            }
                    }catch(error){
                        console.log("mint approval error: " +error);
                    }
                }
                else{
                    try{
                        var rates = await Functions.getRates();
                        this.controllerContractInstance.methods.mintNFT(this.account)
                            .send({
                                maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                                maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                                from:this.account
                            }).then((res)=>{
                                this.message = "Deploying Star Station"
                                if(res){
                                    setTimeout(()=>{
                                        this.controllerContractInstance.methods.totalMinted().call().then((newStations)=>{
                                            console.log(newStations);
                                            if(newStations>totalStations){
                                                this.message = "Deployment Complete"
                                            }
                                            return;
                                        })}
                                    ,20000)
                                }
                            });
                    }catch(error){        
                        console.log("mint error : " +error);
                    }
                }
            }
        }
    }
</script>