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



            <!--
Dakota Kaiser, [2022-01-13 10:38 PM]
For the page: Add Title "StarSeed Fleet" 
Subheader: An NFT MMO Space game that awards cryptocurrency for playing" 

Button [Play Now] in the middle of the screen

Then new section: StarShips
Sub Header: Send your fleet into the Interdimensinal Rifts to collect STAR Cryptocurrency
and then on desktop side by side the 4 videos, on mobile it will be a single column. 

Final Section: Planets
Sub Header: Multiply your earnings and upgrade your fleet with your own planet.

Dakota Kaiser, [2022-01-13 10:46 PM]
for the ships, in order of left to right space junker, arcturian battleship, martian destroyer, atlantean mothership. 

We will only have two planets for now, on the left automated planet on the right atroid colony


Dakota Kaiser, [2022-01-13 10:46 PM]
for the ships, in order of left to right space junker, arcturian battleship, martian destroyer, atlantean mothership. 

We will only have two planets for now, on the left automated planet on the right atroid colony
            -->

        <h4 class="heading center">StarSeed Fleet</h4>
        
        <div class="cards">
            <h1 class="sub-heading">An NFT MMO Space game that awards cryptocurrency for playing</h1>
            <div class="container">
                <div class="grid">
                    <div class="card" style="min-width:40%">
                            <a href = "https://starseed-e7eb2.web.app/" target="_new">    
                                    <button @click="viewExplorer()">Play Now</button>;
                            </a>
                    </div>
                    <div class="card2" style="min-width:75%">
                            <div class="icon">
                                <h2>StarShips</h2>
                                <h3> Send your fleet into the Interdimensinal Rifts to collect STAR Cryptocurrency</h3>
                                <video controls width="400" height="400"
                                        autoplay loop muted preload="auto"
                                        poster="poster.png">
                                    <source src="../\assets\videos\square-Space junker.mp4" type="video/mp4">
                                </video>
                                <video controls width="400" height="400"
                                        autoplay loop muted preload="auto"
                                        poster="poster.png">
                                    <source src="../\assets\videos\Arcturian Battleship.mp4" type="video/mp4">
                                </video>
                                <video controls width="400" height="400"
                                        autoplay loop muted preload="auto"
                                        poster="poster.png">
                                    <source src="../\assets\videos\Martian Destroyer NFT compressed(1).mp4" type="video/mp4">
                                </video>
                                <video controls width="400" height="400"
                                        autoplay loop muted preload="auto"
                                        poster="poster.png">
                                    <source src="../\assets\videos\Atlantean Mothership.mp4" type="video/mp4">
                                </video>
                                <!-- <video src="../\assets\videos\Arcturian Battleship.mp4"/> -->
                            </div>
                    </div>
                </div>
            </div>
        </div>
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
        }
    },
    watch: {
        '$route': {
            handler(newValue, oldValue) {

            }
        }
    },
    created() {
    },
    methods: {
    }
    
}
</script>