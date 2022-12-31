<template>
    <main id="main">
        <div class="content">
            <h4 class="heading center">Star Command Bridge Wallet</h4>
            <p class="xsm-heading center">Stations can take a couple minutes to appear after mint</p>
            <div class="cards" style=" color:white; ">
                <div class="container" style="width:90%">
                    <div class="card" v-for="station in starStations" v-bind:class="{'larger':station.type}" style="align-items:center; overflow: visible;min-height:600px;text-align: center; ">
                        <div>
                            <div style="font-size:x-large">{{station.name}} #{{station.TokenId}}</div>
                            <video controls width="300" height="300"
                                            autoplay loop muted preload="auto"
                                            poster="poster.png">
                                        <source :src=station.image type="video/mp4">
                            </video>
                            <!-- <div>Class: {{station.attributes[0].value}}</div> -->
                            <div>{{station.description}}</div>
                            <button style=" width:200px; position:absolute; bottom:5px; margin-left:-100px; left:50%; " @click="transferClick(station.TokenId)">Transfer</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="transfer">
                <Modal>
                    <!-- <div style="width: 300px;
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
                        <div>Transfer Token #{{station}}</div>
                        <div>Recipient Address:</div>
                        <input v-model="transferAddress">
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
                            @click="transferStation(station)">
                            Transfer
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
                            z-index: 8;" @click="transfer=false">Cancel</button>
                    </div> -->
                </Modal>
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
    import Moralis1 from 'moralis-v1';
    import Modal from './modal.vue'
    const classes = require( "../components/CommandBridge.js");

    export default {
        components: {Modal},
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
                transfer:false,
                transferAddress:'',
                controllerContractAbi : [{"inputs": [{"internalType": "address","name": "_starGov","type": "address"},{"internalType": "address","name": "_stationAddress","type": "address"},{"internalType": "address","name": "operatorAddress","type": "address"}],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "MintNFT","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"inputs": [],"name": "URI","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "counter","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "","type": "uint256"}],"name": "lastPayout","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "maxStations","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "user","type": "address"}],"name": "mintNFT","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "owner","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "numProcess","type": "uint256"}],"name": "payout","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "operatorAddress","type": "address"}],"name": "setOperator","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "amount","type": "uint256"}],"name": "setPayout","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newAddress","type": "address"}],"name": "setStarAdress","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newAddress","type": "address"}],"name": "setStarDaoAdress","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "setStarGovOwner","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "limit","type": "uint256"}],"name": "setStationLimit","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "setStationOwner","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "price","type": "uint256"}],"name": "setStationPrice","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "stationPrice","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalMinted","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalPayout","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"}],
                controllerContractAddress : "0x3917dE9F1cd31F0b9BCdC459F9C1c47B633680d9",
                controllerContractInstance: null,
                tokenURIABI :[{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "owner","type": "address"},{"indexed": true,"internalType": "address","name": "approved","type": "address"},{"indexed": true,"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "Approval","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "owner","type": "address"},{"indexed": true,"internalType": "address","name": "operator","type": "address"},{"indexed": false,"internalType": "bool","name": "approved","type": "bool"}],"name": "ApprovalForAll","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "from","type": "address"},{"indexed": true,"internalType": "address","name": "to","type": "address"},{"indexed": true,"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "Transfer","type": "event"},{"inputs": [{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "approve","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"}],"name": "balanceOf","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "burn","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "getApproved","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "address","name": "operator","type": "address"}],"name": "isApprovedForAll","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "name","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "owner","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "ownerOf","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "to","type": "address"}],"name": "safeMint","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "safeTransferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"},{"internalType": "bytes","name": "data","type": "bytes"}],"name": "safeTransferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "operator","type": "address"},{"internalType": "bool","name": "approved","type": "bool"}],"name": "setApprovalForAll","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "bytes4","name": "interfaceId","type": "bytes4"}],"name": "supportsInterface","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "symbol","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "tokenURI","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "transferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"}],
                tokenContract:"0xC4Bf83f6ee6C09e9581DB4B3379683efd89449FE",
                tokenContractInstance:null,
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
                    // if(chainId != 0x89){await Functions.setChain('0x89')
                    //     this.$router.go();};
                    // this.starContractInstance = new this.web3.eth.Contract(this.starContractAbi, this.starContractAddress);
                    this.controllerContractInstance = new this.web3.eth.Contract(this.controllerContractAbi, this.controllerContractAddress);
                    this.tokenContractInstance = new this.web3.eth.Contract(this.tokenURIABI, this.tokenContract);
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
                        // web3.eth.getChainId().then((chainId)=>{if(chainId != 0x89){Functions.setChain('0x89')};});
                        
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
                this.totalStations = await this.controllerContractInstance.methods.totalMinted().call();
                if(numStations > 0){
                    for(let x = 0; x < this.totalStations;x++){
                        let nftOwner = await this.tokenContractInstance.methods.ownerOf(x).call();
                        if(nftOwner == this.account){
                            let nftUri = await this.tokenContractInstance.methods.tokenURI(x).call(); 
                            fetch(nftUri)
                                .then((response) =>response.json())
                                .then((data) => {
                                    data.image = this.classes[0].image
                                    data.TokenId = x;
                                    this.starStations.push(data);
                                })
                            if(this.starStations.length == numStations){break}
                        }
                    }
                }
            },
            async transferClick(station){
                this.station = station;
                this.transfer = true;
            },
            async transferStation(){
                try{
                    var rates = await Functions.getRates();
                    this.tokenContractInstance.methods.safeTransferFrom(this.account,this.transferAddress,this.station)
                        .send({
                            maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                            maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                            from: this.account
                        });
                }catch(error){
                    console.log(error)
                }
                this.transfer = false
            }
        }
    }
</script>