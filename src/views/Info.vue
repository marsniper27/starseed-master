<template>
<main id="main">
    <div class="content">
        <h4 class="heading center">Star Seeds System Token Info</h4>
        <p class="sm-heading center">Token Contracts and price charts</p>
            <div class="container">
                <div class="card" style="min-width:45%">
                    <div>
                        <div class="icon">
                            <img :src="logoMain"> STAR Token
                        </div>
                        <div class=card style = 'width: 98%; margin: 1%; ' >
                            <div class ='headings'>Polygon</div>
                            <div class="grid" style = 'width:97%;'>
                                <div class="label" style = 'width:50%;'>
                                    Contract:
                                </div>
                                <div style = 'width:50%; margin-right: 5%;'>
                                    <a href=https://polygonscan.com/token/0x8440178087c4fd348d43d0205f4574e0348a06f0#readContract target="_new">
                                        <button class = 'btn-grid'>Polygonscan</button>
                                    </a>
                                </div>
                            </div>
                            <div class="grid" style = 'width:97%'>
                                <div class="label" style = 'width:50%;'>
                                    Charts:
                                </div>
                                <div style = 'width:50%; margin-right: 5%;'>
                                    <a href=https://www.dextools.io/app/polygon/pair-explorer/0xa740f2d3a26fc0e5ea730efa319086801f27b389 target="_new">
                                        <button class = 'btn-grid' >Dextools.io</button>
                                    </a>
                                </div>
                            </div>
                            <div class="grid" style = 'width:97%'>
                                <div class="label" style = 'width:50%;' />
                                <div style = 'width:50%; margin-right: 5%;'>
                                    <b href=https://swap.arken.finance/tokens/polygon/0x8440178087c4fd348d43d0205f4574e0348a06f0 target="_new">
                                        <button class = 'btn-grid'>Arken Finance</button>
                                    </b>
                                </div>
                            </div>
                            <!-- </div> -->
                        </div>
                        <!-- <div class="grid">
                            <div class="label">
                                STAR Contract Fantom:
                            </div>
                            <div >
                                <a href="https://polygonscan.com/token/0x8440178087c4fd348d43d0205f4574e0348a06f0#readContract" target="_new">
                                    <button class = 'btn-grid'>FTMscan</button>
                                </a>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="label">
                                STAR Chart Fantom:
                            </div>
                            <div>
                                <a href=https://www.dextools.io/app/polygon/pair-explorer/0xa740f2d3a26fc0e5ea730efa319086801f27b389 target="_new">
                                    <button class = 'btn-grid'>Dextools.io</button>
                                </a>
                                <a href=https://swap.arken.finance/tokens/polygon/0x8440178087c4fd348d43d0205f4574e0348a06f0 target="_new">
                                    <button class = 'btn-grid'>Arken Finance</button>
                                </a>
                            </div>
                        </div> -->
                        <div class=card style = 'width: 100%; margin: 0; ' >
                            <div class ='headings'>Telos</div>
                            <div class="grid" style = 'width:97%'>
                                <div class="label" style = 'width:50%;'>
                                    Contract:
                                </div>
                                <div  style = 'width:50%; margin-right: 5%;'>
                                    <a href="https://www.teloscan.io/address/0xE0395f4cA79A5a16E8A75F958a5ca31335e394a1" target="_new">
                                        <button class = 'btn-grid'>Telosscan</button>
                                    </a>
                                </div>
                            </div>
                            <div class="grid" style = 'width:97%'>
                                <div class="label" style = 'width:50%;'>
                                    Chart:
                                </div>
                                <div style = 'width:50%; margin-right: 5%;'>
                                    <a href=https://www.dextools.io/app/telos/pair-explorer/0x88b2336898d2f3318ad509bf7729d544c8539537 target="_new">
                                        <button class = 'btn-grid'>Dextools.io</button>
                                    </a>
                                </div>
                            </div>
                            <div class="grid" style = 'width:97%'>
                                <div class="label" style = 'width:50%;'/>
                                <!-- <a href=https://swap.arken.finance/tokens/polygon/0x8440178087c4fd348d43d0205f4574e0348a06f0 target="_new">
                                    <button class = 'btn-grid'>Arken Finance</button>
                                </a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card" style="min-width:45%">
                    <div>
                        <div class="icon">
                            <img :src="logoMain"> DAO Token
                        </div>
                        <div class="grid" style = 'width:95%'>
                            <div class="label" style = 'width:50%;'>
                                DAO Contract:
                            </div>
                            <div style = 'width:50%; margin-right: 5%;'>
                                <a href="https://polygonscan.com/address/0x17840df7caa07e298b16e8612157b90ed231c973#code" target="_new">
                                    <button class = 'btn-grid'>Polygonscan</button>
                                </a>
                            </div>
                        </div>
                        <div class="grid" style = 'width:97%'>
                            <div class="label" style = 'width:50%;'>
                                DAO Chart :
                            </div>
                            <div style = 'width:50%; margin-right: 5%;'>
                                <a href=https://www.dextools.io/app/polygon/pair-explorer/0x6df66882f6f0320f08a1a673b9b9ef57d34b1950 target="_new">
                                    <button class = 'btn-grid'>Dextools.io</button>
                                </a>
                            </div>
                        </div>
                        <div class="grid" style = 'width:97%'>
                            <div class="label" style = 'width:50%;'/>
                            <div style = 'width:50%; margin-right: 5%;'>
                                <a href=https://swap.arken.finance/tokens/polygon/0x17840df7caa07e298b16e8612157b90ed231c973 target="_new">
                                    <button class = 'btn-grid'>Arken Finance</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card" style="min-width:45%">
                    <div>
                        <div class="icon">
                            <img :src="logoMain">Star Dollars Token
                        </div>
                            <div class="grid" style = 'width:97%'>
                            <div class="label" style = 'width:50%;'>
                                STARD Contract:
                            </div>
                            <div style = 'width:50%; margin-right: 5%;'>
                                <a href="https://ftmscan.com/address/0xD7308FE1E9Aaa8ae59C9b93316b8E23911c1Be1E#writeContract" target="_new">
                                    <button class = 'btn-grid'>Ftmscan</button>
                                </a>
                            </div>
                        </div>
                            <div class="grid" style = 'width:97%'>
                            <div class="label" style = 'width:50%;'>
                                STARD Chart :
                            </div>
                            <div style = 'width:50%; margin-right: 5%;'>
                                <a href=https://www.dextools.io/app/fantom/pair-explorer/0x0e6602958b0ef0b0538b8985bcc5f2c1684c516e target="_new">
                                    <button class = 'btn-grid'>Dextools.io</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card" style="min-width:45%">
                    <div>
                        <div class="icon">
                            <img :src="logoMain">STARQI Token
                        </div>
                            <div class="grid" style = 'width:97%'>
                            <div class="label" style = 'width:50%;'>
                                STARQI Contract:
                            </div>
                            <div style = 'width:50%; margin-right: 5%;'>
                                <a href="https://polygonscan.com/token/0x825A381355A51f50a39a18b7c69627380CA38B80" target="_new">
                                    <button class = 'btn-grid'>Polygonscan</button>
                                </a>
                            </div>
                        </div>
                            <div class="grid" style = 'width:97%'>
                            <div class="label" style = 'width:50%;'>
                                STARQI Chart :
                            </div>
                            <div style = 'width:50%; margin-right: 5%;'>
                                <a href=https://www.dextools.io/app/polygon/pair-explorer/0x5175a069642dd288af118bd3365b22456ab7bab2 target="_new">
                                    <button class = 'btn-grid'>Dextools.io</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card" style="min-width:45%">
                    <div>
                        <div class="icon">
                            <img :src="logoMain">Nexus Star Stations
                        </div>
                            <div class="grid" style = 'width:97%'>
                            <div class="label" style = 'width:50%;'>
                               Nexus Star Stations:
                            </div>
                            <div style = 'width:50%; margin-right: 5%;'>
                                <a href="https://polygonscan.com/address/0x430f397f1533a14Cb0467E99041E216dc9b21879#code" target="_new">
                                    <button class = 'btn-grid'>Polygonscan</button>
                                </a>
                            </div>
                        </div>
                            <div class="grid" style = 'width:97%'>
                            <div class="label" style = 'width:50%;'>
                               Nexus Star Station Control:
                            </div>
                            <div style = 'width:50%; margin-right: 5%;'>
                                <a href="https://polygonscan.com/address/0x449f6D4F55ad3038F1Bcfb5D91b7015D51b72bA8#code" target="_new">
                                    <button class = 'btn-grid'>Polygonscan</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card" style="min-width:45%">
                    <div>
                        <div class="icon">
                            <img :src="logoMain">Star Command
                        </div>
                            <div class="grid" style = 'width:97%'>
                            <div class="label" style = 'width:50%;'>
                               Star Command Bridge:
                            </div>
                            <div style = 'width:50%; margin-right: 5%;'>
                                <a href="https://polygonscan.com/address/0x9e0E40e4Fc049df4Ab73140900DBfE9b0245DbbA#code" target="_new">
                                    <button class = 'btn-grid'>Polygonscan</button>
                                </a>
                            </div>
                        </div>
                            <div class="grid" style = 'width:97%'>
                            <div class="label" style = 'width:50%;'>
                               Star Command Controller:
                            </div>
                            <div style = 'width:50%; margin-right: 5%;'>
                                <a href="https://polygonscan.com/address/0x2b4cF5D2dEB7305e5d9C2009Bc1D3b9b60d36c2f#code" target="_new">
                                    <button class = 'btn-grid'>Polygonscan</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card" style="min-width:45%">
                    <div>
                        <div class="icon">
                            <img :src="logoMain">StarSeeds Protocol Documentation
                        </div>
                            <div class="grid" style = 'width:97%'>
                            <div class="label" style = 'width:50%;'>
                                Documentation:
                            </div>
                            <div style = 'width:50%; margin-right: 5%;'>
                                <a href="http://docs.starseeds.exchange" target="_new">
                                    <button class = 'btn-grid'>Docs</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card" style="min-width:45%">
                    <div>
                        <div class="icon">
                            <img :src="logoMain">Audit Results
                        </div>
                            <div class="grid" style = 'width:97%'>
                            <div class="label" style = 'width:50%;'>
                               STAR Audit:
                            </div>
                            <div style = 'width:50%; margin-right: 5%;'>
                                <a href="https://solidity.finance/audits/StarToken/" target="_new">
                                    <button class = 'btn-grid'>Solidity.Finance</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</main>
</template>https://ftmscan.com/address/0xD7308FE1E9Aaa8ae59C9b93316b8E23911c1Be1E#writeContract

<script>

import logoMain from '../assets/logo.png';
import metaMask from '../assets/metamask-fox.svg'
import Announcement from '../assets/loudspeaker.png';

import getWeb3 from './web3.js';
import Web3 from 'web3';
import {ethers} from "ethers";
import Moralis from "moralis";
import { commify } from '@ethersproject/units';
import * as Functions from "../components/functions.js";
import {initMasterchef} from "../components/masterchef";

var pools = require( "./pools.js");
var fantomPools = require( "../components/fantomPools.js");
var starStats = require("../components/starStats.js");
const fleekStorage = require('@fleekhq/fleek-storage-js')
var fs = require('fs');

export default {
    components: {},
    data() {
        return {
            Functions:Functions,
            Announcement:Announcement,
            logoMain:logoMain,
            account: "Not Connected",
            web3:null,
            messages:false,
            availStar:"Connect Wallet",
            starHarvest:"Connect Wallet",
            stardHarvest:"Connect Wallet",
            connected:false,
            totalMinted:null,
            starAdded:false,
            DAOAdded: false,
            burnedStar:null,
            currentSupply: 9000,
            burnValue:null,
            starValue:null,
            emissionRate: null,
            emissionValue:null,
            poolsValue:0,
            marketCap:null,
            web3: null,
            totalAllocation:null,
            tempValue:0
        }
    },
    watch: {
        '$route': {
            handler(newValue, oldValue) {

            }
        }
    },
    async created() { },
    methods: {
        getStar(){
            location.href = "https://quickswap.exchange/#/swap?outputCurrency=0x8440178087C4fd348D43d0205F4574e0348a06F0";
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
    }
}
</script>

// process.env.API_key,
// process.env.API_key,
