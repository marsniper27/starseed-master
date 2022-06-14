<template>
<main id="main">
    <div class="content">
        <h4 class="heading center">Star Bridge</h4>
        <div class="cards">
            <div class="container" style="min-width:100%" >       
                <div class="card" style="min-width:20%">
                <h4 class="sm-heading center">STAR Polygon</h4>
                    <div class="icon">
                        <img :src="starLogo"> 
                    </div>
                    <div  class="grid">
                        <div class="label large-text">
                            STAR Balance
                        </div>
                        <div  class="cont  large-text">
                            {{(+pools[0].balance).toFixed(4)}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<script>
import Web3 from 'web3';
import getWeb3 from './web3.js';
import {ethers} from "ethers";
var Pools = require("./pools.js");
var fantomPools = require( "../components/fantomPools.js");
import * as Functions from "../components/functions.js";
import {initMasterchef} from "../components/masterchef.js";
import logoMain from '../assets/logo.png';


export default {
    components: {},
    data() {
        return {
            chain:0,
            starLogo:logoMain,
            Functions:Functions,
            pools:Pools.tokenPools,
            fantomPools:fantomPools.Pools,
            connected:false,
            web3:false,
            web3Poly:false,
            web3FTM:false,
            account: "Not Connected",
            showPops:false,
            messages:false,
            lpContractInstance : false,
        }
    },
    watch: {
        '$route': {
            handler(newValue, oldValue) {

            }
        }
    },
    async created() {
        this.web3Poly = new Web3(new Web3.providers.HttpProvider('https://speedy-nodes-nyc.moralis.io/3e80fd791515a22ed9b5992f/polygon/mainnet'));
        // this.web3FTM = new Web3(new Web3.providers.HttpProvider('https://speedy-nodes-nyc.moralis.io/3e80fd791515a22ed9b5992f/fantom/mainnet'));
        if (typeof window.ethereum !== 'undefined') {
            window.addEventListener("load", function() {
                window.ethereum.on('chainChanged', function(networkId){
                    console.log('chainChanged',networkId);
                    if(networkId == 0x89){
                        this.chain = 0;
                        Functions.setChain('0x89');
                    }
                    else if(networkId == 0xfa){
                        this.chain = 1;
                        Functions.setChain('0xfa');
                    }
                    //this.refresh();
                });
                window.ethereum.on('accountsChanged', function (accounts) {
                    console.log('accountsChanges',accounts);
                    this.account = accounts[0];
                    //this.refresh();
                });
            })
            console.log('MetaMask is installed!');
            if(this.$route.params.web3 == null || this.$route.params.account == null){
                console.log("account not set stard");
                await this.metaMaskWallet();
                this.pools[0].balance = await this.Functions.getBalance(this.pools[0],this.web3Poly,this.account)
                this.fantomPools[0].balance = await this.Functions.getBalance(this.fantomPools[0],this.web3Poly,this.account)
            }
            else{
                this.messages = "Loading user Details";
                console.log("account already set stard");
                this.account = this.$route.params.account;
                this.web3 = this.$route.params.web3;
                var chainId = new this.web3.eth.getChainId();
                if(this.chain == 0||this.chain ==3){
                    if(chainId != 0x89){
                        await Functions.setChain('0x89');
                        this.$router.go();
                    };
                }
                else if(this.chain == 1){
                    if(chainId != 0xfa){
                        await Functions.setChain('0xfa');
                        this.$router.go();
                    };
                }
                // this.pools[0].balance = await this.Functions.getBalance(this.pools[0],this.web3,this.account)
                this.connected = true;
                this.pools[0].balance = await this.Functions.getBalance(this.pools[0],this.web3Poly,this.account)
                // this.fantomPools[0].balance = await this.Functions.getBalance(this.fantomPools[0],this.web3Poly,this.account)
                this.messages = false;
            }
        }
        else{
            //this.matics();
            if(confirm("Would you like to get MetaMask?")){
                Functions.getMetamask();
            }
        }
    },
    methods: {
        async metaMaskWallet(){
            this.showPops = false
            getWeb3().then((result) => {
                this.messages = " Pending..."
                const web3 = result;// we instantiate our contract next
                this.web3 = web3;
                this.$route.params.web3 = web3;
                web3.eth.getAccounts()
                .then((accounts) => {
                    if(accounts.length > 0){
                        this.account = accounts[0];
                        this.$route.params.account = accounts[0];
                        this.connected = true;
                        this.messages = false;
                        this.messages = "Loading user Details";
                        // this.Functions.getBalance(this.pools[0],this.web3,this.account).then((result)=>{this.pools[0].balance = result;})
                        setTimeout(d=>{
                            this.messages = false
                        },1000)
                    }else{
                        this.messages = "No account Connected"
                        console.log("no account connected")
                        setTimeout(d=>{
                            this.messages = false
                        },3000)
                    }                
                })
            })
        },
        async bridge(){
            sd
        }
    }
}
</script>