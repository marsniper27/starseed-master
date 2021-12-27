<template>
<main id="main">
    <div class="content">
            <!-- <h3 class="account">
                Connected Account <span id="account" class="purple">{{account}}</span>
                <button @click="CustomToken" class="addStar">Add Stars to <img width="30px" src="https://jaguarswap.com/images/tokens/metamask.png"></button>
                <div class="connect">
                    <button @click="matics" class="connectWallet"><i class="fas fa-network-wired"></i>Connect</button>
                </div>
            </h3> -->
            <!-- <button @click="MetaMask" class="connectWallet"><i class="fas fa-network-wired"></i>Connect</button> -->

        <h4 class="heading center">Welcome to the Master Chef Control Center</h4>
        
        <div class="cards">
            <h1 class="sub-heading">Operator Functions</h1>
            <div class="container">
                <div class="card" style="min-width:40%">
                    <div>
                        <div class="icon">
                            <h2>Fund MasterChef</h2>
                        </div>
                        <input v-model="fundAmount" placeholder="Amount to fund" />
                        <button>Fund</button>;
                    </div>
                </div>
                <div class="card"  style="min-width:40%">
                    <div class="icon">
                        <h2>Update Emmision Rate </h2>
                    </div>
                        <input v-model="emmisionAmount" placeholder="New Emmsion Rate" />
                        <button>Fund</button>;
                </div>
                <div class="card"  style="min-width:40%">
                    <div class="icon">
                        <h2>Update Pool Allocation Points </h2>
                    </div>
                        <input v-model="poolPid" placeholder="Pool Index" />
                        <input v-model="allocationAmount" placeholder="New Allocation amount" />
                        <button>Fund</button>;
                </div>
                <div class="card"  style="min-width:40%">
                    <div class="icon">
                        <h2>Transfer Operator </h2>
                    </div>
                        <input v-model="operator" placeholder="New Operator Address" />
                        <button>Fund</button>;
                </div>
            </div>
            <h1 class="sub-heading">Owner Functions</h1>
            <div class="container">           
                <div class="card"  style="min-width:40%">
                    <div>
                        <div class="icon">
                            <h2>Add Pool</h2>
                        </div>
                        <input v-model="fundAmount" placeholder="Amount to fund" />
                        <button>Fund</button>;
                    </div>
                </div>          
                <div class="card"  style="min-width:40%">
                    <div>
                        <div class="icon">
                            <h2>Set Pool Values</h2>
                        </div>
                        <input v-model="fundAmount" placeholder="Amount to fund" />
                        <button>Fund</button>;
                    </div>
                </div>          
                <div class="card"  style="min-width:40%">
                    <div>
                        <div class="icon">
                            <h2>Set Bonus Multiplier</h2>
                        </div>
                        <input v-model="fundAmount" placeholder="Amount to fund" />
                        <button>Fund</button>;
                    </div>
                </div>          
                <div class="card"  style="min-width:40%">
                    <div>
                        <div class="icon">
                            <h2>Collect Fees</h2>
                        </div>
                        <input v-model="fundAmount" placeholder="Amount to fund" />
                        <button>Fund</button>;
                    </div>
                </div>
                <div class="card"  style="min-width:40%">
                    <div>
                        <div class="icon">
                            <h2>transfer out</h2>
                        </div>
                        <input v-model="transferOut" placeholder="Amount to fund" />
                        <button>Fund</button>;
                    </div>
                </div>
            </div>
        </div>        
    </div>
    <div v-if="messages" class="messages">
            <h4>Transaction  {{messages}}</h4>
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
            totalMinted:"111,111",
            fundAmount:null,
            masterChefContractAbi : [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"BonusMupltiplier","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"EmissionRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBalance","type":"uint256"}],"name":"Funded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountLockedUp","type":"uint256"}],"name":"RewardLockedUp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_DEPOSIT_FEE_RATE","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_HARVEST_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_STAR_PER_BLOCK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"_harvestInterval","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"canHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"collectFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"fundMasterChef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"getDepositFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"harvestStar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingStar","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accStarPerShare","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"harvestInterval","type":"uint256"},{"internalType":"uint256","name":"totalLp","type":"uint256"},{"internalType":"uint256","name":"depositFees","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"remainingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"_harvestInterval","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devAddress","type":"address"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"setStarId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setstarContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"star","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"starPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startFarming","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLockedUpRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStarInPools","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"updateAllocPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bonus","type":"uint256"}],"name":"updateBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_starPerBlock","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"rewardLockedUp","type":"uint256"},{"internalType":"uint256","name":"nextHarvestUntil","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],
            masterChefContractAddress : "0x56658E666Da404dD23107306453c7c8dE6351776",
            masterChefContractInstance : false,
            emmisionAmount: null,
            allocationAmount: null,
            poolPid:null,
            operator:null
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
            if(this.$route.params.web3 == null || this.$route.params.account == null){
                console.log("account not set");
                this.matics();
            }
            else{
                console.log("account already set");
                this.account = this.$route.params.account;
                this.web3 = this.$route.params.web3;
                if(this.account !=  0x1f42Ad4C83ff23fD1a7bf5527FD74B731083cFaB && this.account != 0xf60de76791c2f09995df52aa1c6e2e7dcf1e75d7){
                    console.log("your account is not owner or operator: " +this.acount)
                    this.$router.push({ name: 'Home' });
                }
            }
        }
    },
    methods: {
        async matics(){
            getWeb3().then((result) => {
                const web3 = result;// we instantiate our contract next
                this.$route.params.web3 = web3;
                this.messages = " Pending..."
                web3.eth.getAccounts()
                    .then((accounts) => {
                        if(accounts.length > 0){
                            this.$route.params.account = accounts[0];
                            this.connected = true;
                            this.account = accounts[0];
                            if(this.account !=  "0x1f42Ad4C83ff23fD1a7bf5527FD74B731083cFaB" && this.account != "0xf60de76791c2f09995df52aa1c6e2e7dcf1e75d7"){
                                console.log("not set your account is not owner or operator: " + this.acount)
                                this.$router.push({ name: 'Home' });
                            }
                            this.messages = " Account: " +this.account;
                            this.masterChefContractInstance = new web3.eth.Contract(this.masterChefContractAbi, this.masterChefContractAddress);
                            setTimeout(d=>{
                                this.messages = false
                            },5000);
                        }
                        else{
                            this.messages = "No account Connected"
                            setTimeout(d=>{
                                this.messages = false
                            },5000);
                            this.$router.push({ name: 'Home' });
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
        async MetaMask() {
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts'
            });
            console.log(accounts)
            this.account = accounts[0];
            const accountss = await ethereum.request({ method: 'eth_accounts' });
            //We take the first address in the array of addresses and display it
            console.log(accountss[0])
            return
            const transactionParameters = {
                nonce: '0x00', // ignored by MetaMask
                gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
                gas: '0x2710', // customizable by user during MetaMask confirmation.
                to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
                from: ethereum.selectedAddress, // must match user's active address.
                value: '0x00', // Only required to send ether to the recipient from the initiating external account.
                data:
                    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/0xC6e2e8395A671eE3f6f55177F8Fe5984D5dA7741', // Optional, but used for defining smart contract creation and interaction.
                chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
                };

                // txHash is a hex string
                // As with any RPC call, it may throw an error
                const txHash = await ethereum.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
                });
        },
        async CustomToken() {
            var tokens = await this.MetaMask()
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
        async transferOut(){
            
            lpContractInstance = new this.web3.eth.Contract(itm.ABI, itm.address);
                try{
                    var harvest = await this.masterChefContractInstance.methods.canHarvest(itm.pid,this.account).call()
                    console.log("can harvest: " + harvest);
                    if(harvest){
                        try{
                            var receipt = await this.masterChefContractInstance.methods.harvestStar(itm.pid).send({from:this.account})
                                console.log("harvest star: " + receipt);
                                return(receipt);
                        }catch(error){
                            console.log("harvest Star error: " + error);
                        }
                    }
                }catch(error){
                    console.log("can harvest error: " + error);
                }
        }
    }
}
</script>

