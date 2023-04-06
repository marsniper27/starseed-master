<template>
    <main id="main">
        <div class="content">
            <h4 class="heading center">Nexus Star Stations Lock</h4>
            <p class="xsm-heading center">Stations can take a couple minutes to appear after Create</p>
            <div class="cards" style=" color:white; ">
                <div class="container" style="width:90%">
                    <div class="card" v-for="station in starStations" v-bind:class="{'larger':station.type}" style="align-items:center; overflow: visible;min-height:620px;text-align: center; ">
                        <div>
                            <div style="font-size:x-large">{{station.name}} #{{station.TokenId}}</div>
                            <video controls width="300" height="300"
                                            autoplay loop muted preload="auto"
                                            poster="poster.png">
                                        <source :src=station.image type="video/mp4">
                            </video>
                            <div>APR: {{station.apr}}%</div>
                            <!-- <div>Weight: {{station.weight}}</div> -->
                            <div>Class: {{station.attributes[0].value}}</div>
                            <div>{{station.description}}</div>
                            <button style=" width:200px; position:absolute; bottom:55px; margin-left:-100px; left:50%; " @click="lockClick(station.TokenId)">Lock Station</button>
                            <button style=" width:200px; position:absolute; bottom:5px; margin-left:-100px; left:50%; " @click="lockForClick(station.TokenId)">Lock Station for User</button>
                        </div>
                    </div>
                    <iframe data-aa='2196220' src='//ad.a-ads.com/2196220?size=728x90' style='width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe>
                    <iframe data-aa='2196218' src='//acceptable.a-ads.com/2196218' style='border:0px; padding:0; width:100%; height:100%; overflow:hidden; background-color: transparent;'></iframe>
                    <iframe data-aa='2196223' src='//ad.a-ads.com/2196223?size=728x90' style='width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe>
                </div>
            </div>
            <div v-if="lock">
                <div class ="modal__wrapper" className="modal__wrapper">
                    <div className="modal">
                        <div style="width: 300px;
                                    height: 200px;
                                    border-radius: 10px;
                                    background-color: white;
                                    padding: 20px 20px;
                                    z-index: 1200;
                                    top: calc(50em - 400px);
                                    left: calc(50%);
                                    display: flex;
                                    flex-direction:column;
                                    align-items: center;">
                            <div>Lock Station #{{station}}</div>
                            <button style=" background-color:purple;
                                background-image: linear-gradient(to right, #d35ff6 , #a700ee);
                                color: #fff;
                                border: none;
                                box-shadow: 0px 0px 7px -1px #000;
                                padding: 6px 11px;
                                border-radius: 20px;
                                font-size: 15px;
                                text-transform: uppercase;
                                font-weight: bold;
                                width:200px;
                                z-index: 8;
                                margin-bottom:10px;
                                margin-top:10px;" 
                                @click="lockStation(station)">
                                Lock Station
                            </button>
                            <button style=" background-color:purple;
                                background-image: linear-gradient(to right, #d35ff6 , #a700ee);
                                color: #fff;
                                border: none;
                                box-shadow: 0px 0px 7px -1px #000;
                                padding: 6px 11px;
                                border-radius: 20px;
                                font-size: 15px;
                                text-transform: uppercase;
                                font-weight: bold;
                                width:200px;
                                z-index: 8;" @click="lock=false">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="lockFor">
                <div class ="modal__wrapper" className="modal__wrapper">
                    <div className="modal">
                        <div style="width: 300px;
                                    height: 200px;
                                    border-radius: 10px;
                                    background-color: white;
                                    padding: 20px 20px;
                                    z-index: 1200;
                                    top: calc(50em - 400px);
                                    left: calc(50%);
                                    display: flex;
                                    flex-direction:column;
                                    align-items: center;">
                            <div>Lock Station #{{station}}</div>
                            <div>Lock for:</div>
                            <input v-model="lockForAddress">
                            <button style=" background-color:purple;
                                background-image: linear-gradient(to right, #d35ff6 , #a700ee);
                                color: #fff;
                                border: none;
                                box-shadow: 0px 0px 7px -1px #000;
                                padding: 6px 11px;
                                border-radius: 20px;
                                font-size: 15px;
                                text-transform: uppercase;
                                font-weight: bold;
                                width:200px;
                                z-index: 8;
                                margin-bottom:10px;
                                margin-top:10px;" 
                                @click="lockStationFor(station)">
                                Lock Station
                            </button>
                            <button style=" background-color:purple;
                                background-image: linear-gradient(to right, #d35ff6 , #a700ee);
                                color: #fff;
                                border: none;
                                box-shadow: 0px 0px 7px -1px #000;
                                padding: 6px 11px;
                                border-radius: 20px;
                                font-size: 15px;
                                text-transform: uppercase;
                                font-weight: bold;
                                width:200px;
                                z-index: 8;" @click="lockFor=false">Cancel</button>
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
    
<style lang="scss" scoped>
    .modal{
    width: 300px;
    height: 100px;
    border-radius: 10px;
    background-color: white;
    padding: 20px 20px;
    z-index: 1200;
    &__wrapper{
        background-color: rgba(0,0,0,0.4);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        position: absolute;
        top: 0;
    }
    }

</style>

    
    
    <script>
    
    import getWeb3 from './web3.js';
    import Web3 from 'web3';
    import {ethers} from "ethers";
    import Moralis from "moralis";
    import { commify } from '@ethersproject/units';
    import * as Functions from "../components/functions.js";
    import {initMasterchef} from "../components/masterchef";
    import Moralis1 from 'moralis-v1';
    import freighter from '../assets/videos/square-Space junker.mp4'
    import meteor from '../assets/videos/astroid Colony.mp4'
    import city from '../assets/videos/Square-Automated Planet.mp4'
    import planet from '../assets/videos/Atlantean Mothership.mp4'
    import { AddressZero } from '@ethersproject/constants';
    
    var pools = require( "./pools.js");
    const classes = require( "../components/StationClasses.js");
    var fantomPools = require( "../components/fantomPools.js");
    var starStats = require("../components/starStats.js");
    const fleekStorage = require('@fleekhq/fleek-storage-js')
    var fs = require('fs');

    export default {
        data() {
            return {
                Functions:Functions,
                account: "Not Connected",
                classes:classes.classes,
                web3:null,
                messages:false,
                connected:false,
                starStations:[],
                station:null,
                totalStations:0,
                lock:false,
                lockFor:false,
                lockForAddress:'',
                controllerContractAbi : [{"inputs": [{"components": [{"internalType": "uint256","name": "startingWeight","type": "uint256"},{"internalType": "uint256","name": "upgradeRate","type": "uint256"},{"internalType": "uint256","name": "price","type": "uint256"},{"internalType": "uint256","name": "maxUpgrade","type": "uint256"},{"internalType": "string","name": "uri","type": "string"}],"internalType": "struct NexusStarStation_Control.StationClass","name": "_station","type": "tuple"}],"name": "addClass","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_classPID","type": "uint256"}],"name": "buyGift","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_classPID","type": "uint256"}],"name": "mintNFT","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_emissionRate","type": "uint256"},{"internalType": "address","name": "_stationAddress","type": "address"},{"internalType": "address","name": "_rewardPool","type": "address"}],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "uint256","name": "class","type": "uint256"}],"name": "BuyGift","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "uint256","name": "tokenId","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "class","type": "uint256"}],"name": "MintNFT","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"inputs": [{"internalType": "address","name": "_recipient","type": "address"},{"internalType": "uint256","name": "_classPID","type": "uint256"},{"internalType": "string","name": "_giftCode","type": "string"}],"name": "redeemGift","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "nonpayable","type": "function"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "uint256","name": "tokenId","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "class","type": "uint256"},{"indexed": false,"internalType": "string","name": "giftCode","type": "string"}],"name": "RedeemGift","type": "event"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_burnRate","type": "uint256"}],"name": "setBurnRate","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_increase","type": "uint256"}],"name": "setMaxIncrease","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_poolAddress","type": "address"}],"name": "setRewardPool","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_newOwner","type": "address"}],"name": "setStationOwner","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_classPid","type": "uint256"},{"internalType": "uint256","name": "_price","type": "uint256"}],"name": "updateClassPrice","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_classPid","type": "uint256"},{"internalType": "uint256","name": "_upgradeRate","type": "uint256"}],"name": "updateClassUpgrade","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_classPid","type": "uint256"},{"internalType": "uint256","name": "_startingWeight","type": "uint256"}],"name": "updateClassWeight","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_rate","type": "uint256"}],"name": "updateEmission","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "updateNftWeight","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_startId","type": "uint256"},{"internalType": "uint256","name": "_endId","type": "uint256"}],"name": "updateWeight","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "getEmission","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getStations","outputs": [{"components": [{"internalType": "uint256","name": "tokenId","type": "uint256"},{"internalType": "uint256","name": "class","type": "uint256"},{"internalType": "uint256","name": "weight","type": "uint256"},{"internalType": "uint256","name": "lastUpdate","type": "uint256"}],"internalType": "struct NexusStarStation_Control.SpaceStations[]","name": "","type": "tuple[]"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getWeight","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "owner","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"}],
                controllerContractAddress : "0x449f6D4F55ad3038F1Bcfb5D91b7015D51b72bA8",
                controllerContractInstance: null,
                tokenURIABI :[{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "owner","type": "address"},{"indexed": true,"internalType": "address","name": "approved","type": "address"},{"indexed": true,"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "Approval","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "owner","type": "address"},{"indexed": true,"internalType": "address","name": "operator","type": "address"},{"indexed": false,"internalType": "bool","name": "approved","type": "bool"}],"name": "ApprovalForAll","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "from","type": "address"},{"indexed": true,"internalType": "address","name": "to","type": "address"},{"indexed": true,"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "Transfer","type": "event"},{"inputs": [{"internalType": "uint256","name": "","type": "uint256"}],"name": "_tokenWeight","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "approve","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"}],"name": "balanceOf","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "getApproved","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "address","name": "operator","type": "address"}],"name": "isApprovedForAll","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "name","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "owner","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "ownerOf","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "to","type": "address"},{"internalType": "string","name": "uri","type": "string"},{"internalType": "uint256","name": "weight","type": "uint256"}],"name": "safeMint","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "safeTransferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"},{"internalType": "bytes","name": "data","type": "bytes"}],"name": "safeTransferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "operator","type": "address"},{"internalType": "bool","name": "approved","type": "bool"}],"name": "setApprovalForAll","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "bytes4","name": "interfaceId","type": "bytes4"}],"name": "supportsInterface","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "symbol","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "index","type": "uint256"}],"name": "tokenByIndex","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "uint256","name": "index","type": "uint256"}],"name": "tokenOfOwnerByIndex","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "tokenURI","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalSupply","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "transferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"},{"internalType": "uint256","name": "increase","type": "uint256"}],"name": "updateWeight","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "weightOf","outputs": [{"internalType": "uint256","name": "weight","type": "uint256"}],"stateMutability": "view","type": "function"}],
                tokenContract:"0x430f397f1533a14Cb0467E99041E216dc9b21879",
                tokenContractInstance:null,
                lockContractAbi:[{"inputs": [{"internalType": "uint256","name": "stationId","type": "uint256"}],"name": "lockStation","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_owner","type": "address"},{"internalType": "uint256","name": "stationId","type": "uint256"}],"name": "lockStationFor","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "operator","type": "address"},{"internalType": "address","name": "from","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"},{"internalType": "bytes","name": "data","type": "bytes"}],"name": "onERC721Received","outputs": [{"internalType": "bytes4","name": "","type": "bytes4"}],"stateMutability": "nonpayable","type": "function"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "owner","type": "address"},{"indexed": false,"internalType": "uint256","name": "tokenId","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "lockedOn","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "unlockTime","type": "uint256"}],"name": "StationLocked","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "lockedBy","type": "address"},{"indexed": false,"internalType": "address","name": "lockedFor","type": "address"},{"indexed": false,"internalType": "uint256","name": "tokenId","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "lockedOn","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "unlockTime","type": "uint256"}],"name": "StationLockedFor","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "owner","type": "address"},{"indexed": false,"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "StationUnlocked","type": "event"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "stationId","type": "uint256"}],"name": "unlockStation","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "getStationOwner","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "_user","type": "address"}],"name": "getUsersLocks","outputs": [{"components": [{"internalType": "uint256","name": "tokenId","type": "uint256"},{"internalType": "uint256","name": "unlockDate","type": "uint256"}],"internalType": "struct StationLock.lockedStation[]","name": "","type": "tuple[]"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "owner","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"}],
                lockContractAddress:'0x3eE1e1Ac84e18557A38Ff80C507010BA665259Ad',
                lockContractInstance:null
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
                    // this.starContractInstance = new this.web3.eth.Contract(this.starContractAbi, this.starContractAddress);
                    this.controllerContractInstance = new this.web3.eth.Contract(this.controllerContractAbi, this.controllerContractAddress);
                    this.tokenContractInstance = new this.web3.eth.Contract(this.tokenURIABI, this.tokenContract);
                    this.lockContractInstance = new this.web3.eth.Contract(this.lockContractAbi,this.lockContractAddress);
                    // await this.getBalance();
                    await this.getNFTMetadata();
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
                                // this.starContractInstance = new web3.eth.Contract(this.starContractAbi, this.starContractAddress);
                                this.controllerContractInstance = new web3.eth.Contract(this.controllerContractAbi, this.controllerContractAddress);
                                this.tokenContractInstance = new this.web3.eth.Contract(this.tokenURIABI, this.tokenContract);
                                this.lockContractInstance = new this.web3.eth.Contract(this.lockContractAbi,this.lockContractAddress);
                                this.messages = " Pending..."
                                // this.getBalance();
                                this.getNFTMetadata();
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
            async getNFTMetadata() {
                const numStations = await this.tokenContractInstance.methods.balanceOf(this.account).call();
                let stationInfo = await this.controllerContractInstance.methods.getStations().call();
                this.totalStations = stationInfo.length;
                if(numStations > 0){
                    for(let x = 0; x < numStations;x++){
                        let nftId = await this.tokenContractInstance.methods.tokenOfOwnerByIndex(this.account,x).call();
                        let nftUri = await this.tokenContractInstance.methods.tokenURI(nftId).call(); 
                        fetch(nftUri)
                            .then((response) =>response.json())
                            .then((data) => {
                                switch(data.attributes[0].value){
                                    case 'Freighter Class':
                                        data.upgradeRate = this.classes[0].upgradeRate
                                        data.weight = this.classes[0].startingWeight
                                        data.apr = this.classes[0].startApr
                                        data.image = freighter
                                        break
                                    case 'Meteor Class':
                                        data.upgradeRate = this.classes[1].upgradeRate
                                        data.weight = this.classes[1].startingWeight
                                        data.apr = this.classes[1].startApr
                                        data.image = meteor
                                        break
                                    case 'City Class':
                                        data.upgradeRate = this.classes[2].upgradeRate
                                        data.weight = this.classes[2].startingWeight
                                        data.apr = this.classes[2].startApr
                                        data.image = city
                                        break
                                    case 'Planet Class':
                                        data.upgradeRate = this.classes[3].upgradeRate
                                        data.weight = this.classes[3].startingWeight
                                        data.apr = this.classes[3].startApr
                                        data.image = planet
                                        break
                                }
                                data.TokenId = nftId;
                                var addedWeight = (data.upgradeRate*(this.totalStations-nftId-1))*data.weight/100
                                data.apr = (((data.weight + addedWeight)/data.weight)*data.apr)
                                data.apr = data.apr.toFixed(2)
                                this.starStations.push(data);
                            })
                    }
                }
            },
            async lockClick(station){
                this.station = station;
                this.lock = true;
            },
            async lockForClick(station){
                this.station = station;
                this.lockFor = true;
            },
            async lockStation(){
                try{
                    var rates = await Functions.getRates();
                    var result = await this.tokenContractInstance.methods.approve(this.lockAddress,this.station)
                        .send({
                            maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                            maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                            from: this.account
                        });
                    if(result){
                        await this.lockContractInstance.methods.lockStation(this.station)
                        .send({
                            maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                            maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                            from: this.account
                        });
                    }
                }catch(error){
                    console.log(error)
                }
                this.lock = false
            },
            async lockStationFor(){
                if(this.lockForAddress ==''){
                    this.messages = "No For Address provided"
                                setTimeout(d=>{
                                    this.messages = false
                                },3000)
                }
                else{
                    try{
                        var rates = await Functions.getRates();
                        var result = await this.tokenContractInstance.methods.approve(this.lockContractAddress,this.station)
                            .send({
                                maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                                maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                                from: this.account
                            });
                        if(result){
                            await this.lockContractInstance.methods.lockStationFor(this.lockForAddress,this.station)
                            .send({
                                maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                                maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                                from: this.account
                            });
                        }
                    }catch(error){
                        console.log(error)
                    }
                    this.lock = false
                }
            }
        }
    }
</script>