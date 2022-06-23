<template>
<main id="main">
    <div class="content">
        <h4 class="heading center">STARQI PROTOCOL</h4>
        <div class="cards">            
            <div class="container" style="min-width:100%; " >      
                <div class="grid" style="min-width:40%; padding-right:2%">  
                    <div class="card" style="min-width:100%; padding: 10px">
                        <h4 class="heading center">What is STAR QI?</h4>
                        <div class = 'p'>STARQI is a liquid wrapper for Qi that provides higher returns than a 4 year stake on QiDAO, without having to lock your money for any amount of time.</div>
                        <div class="p">We accomplish this by locking the majority of qi held by QTARQI inside of a renewing 4 year lock, we then vote every 2 weeks on whatever vault is paying the highest bribers. The bribes we collect increase staking returns by 10-50%.</div>
                    </div>  
                    <div class="card" style="min-width:100%; padding: 10px;">
                        <div class = 'p'>Every week the QI interest generated is used to buy STARQI. this means STARQI becomes worth more and more QI over time. the longer you hold STARQI the more QI you have. you collect your returns by converting your STARQI into QI.</div>
                        <div class='grid' style="width:100%;justify-content: center;display:inline">
                            <button @click="viewExplorer('https://quickswap.exchange/#/swap?inputCurrency=0x580A84C73811E1839F75d86d75d88cCa0c241fF4&outputCurrency=0x825A381355A51f50a39a18b7c69627380CA38B80')" style="width:40%; margin:0;">Buy STARQI</button>
                            <button @click="viewExplorer('https://polygonscan.com/token/0x825A381355A51f50a39a18b7c69627380CA38B80')" style ="margin: 0 10px; width:40%;">STARQI Contract Address</button>
                        </div>
                    </div>
                </div>
                <div class="grid" style="min-width:40%">
                    <div class = 'container' style="min-width:100%;">
                        <div class="card">
                            <div class='grid'>
                                <img src="../assets/tap.png"/>
                                <div>
                                    <div class="p">{{APY}}</div>
                                    <div class="p">APY</div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class='grid'>
                                <img src="../assets/tap.png"/>
                                <div>
                                    <div class="p">${{price}}</div>
                                    <div class="p">Current Price</div>
                                </div>
                            </div>
                        </div>
                        <div class="card" style="width:100%">
                            <h4 class="heading center">Chart</h4>
                                <!-- <div class ="priceChart" id="priceChart" ref="priceChart"></div> -->
                                <button @click="dextools()">View chart on Dextools</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="pops" v-if="showPops">
        <div class="head">
            <h6>Connect to a wallet</h6>
            <i class="fa fa-close"></i>
        </div>
        <ul class="cont">
            <li @click="metaMaskWallet()">
                <h4>MetaMask</h4>
                <svg viewBox="0 0 96 96" width="32px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ exWFUV"><circle cx="48" cy="48" r="48" fill="white"></circle><path d="M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z" fill="#E17726"></path><path d="M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z" fill="#E27625"></path><path d="M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z" fill="#E27625"></path><path d="M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z" fill="#E27625"></path><path d="M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z" fill="#E27625"></path><path d="M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z" fill="#E27625"></path><path d="M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z" fill="#E27625"></path><path d="M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z" fill="#E27625"></path><path d="M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z" fill="#D5BFB2"></path><path d="M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z" fill="#D5BFB2"></path><path d="M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z" fill="#233447"></path><path d="M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z" fill="#233447"></path><path d="M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z" fill="#CC6228"></path><path d="M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z" fill="#CC6228"></path><path d="M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z" fill="#CC6228"></path><path d="M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z" fill="#CC6228"></path><path d="M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z" fill="#E27525"></path><path d="M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z" fill="#E27525"></path><path d="M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z" fill="#E27525"></path><path d="M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z" fill="#E27525"></path><path d="M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z" fill="#F5841F"></path><path d="M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z" fill="#F5841F"></path><path d="M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z" fill="#C0AC9D"></path><path d="M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z" fill="#161616"></path><path d="M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z" fill="#763E1A"></path><path d="M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z" fill="#763E1A"></path><path d="M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z" fill="#F5841F"></path><path d="M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z" fill="#F5841F"></path><path d="M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z" fill="#F5841F"></path></svg>
            </li>
            <li @click="trustWallet()">
                <h4>TrustWallet</h4>
                <svg viewBox="0 0 96 96" width="32px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ exWFUV"><g clip-path="url(#clip0)"><path d="M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z" fill="#3375BB"></path><path d="M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z" fill="white"></path></g><defs><clipPath id="clip0"><rect width="96" height="96" fill="white"></rect></clipPath></defs></svg>
            </li>
        </ul>
    </div>
    <div v-if="messages" class="messages">
            <h4>{{messages}}</h4>
    </div>
</main>
</template>

<script>
import getWeb3 from './web3.js';
import {ethers} from "ethers";
import logoMain from '../assets/logo.png';
import { createChart } from 'lightweight-charts';
import * as Functions from "../components/functions.js";

export default {
    components: {},
    data() {
        return {
            stardLogo:logoMain,
            connected:false,
            web3:false,
            price:"x.xx",
            APY:"Live update coming soon",
            starqiChart:"not set",
            account: "Not Connected",
            selectedABI:false,
            selectedContractAddress:false,
            selectedPid:false,
            showPops:false,
            messages:false,
            starEarned:"connect wallet",
            lpContractInstance : false,            
            masterChefContractAbi : [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"BonusMupltiplier","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"EmissionRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBalance","type":"uint256"}],"name":"Funded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountLockedUp","type":"uint256"}],"name":"RewardLockedUp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_DEPOSIT_FEE_RATE","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_HARVEST_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_STARD_PER_BLOCK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"_harvestInterval","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"canHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"collectFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"fundMasterChef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"getDepositFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"harvestStard","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingStard","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accStardPerShare","type":"uint256"},{"internalType":"uint256","name":"depositFeeBP","type":"uint256"},{"internalType":"uint256","name":"harvestInterval","type":"uint256"},{"internalType":"uint256","name":"totalLp","type":"uint256"},{"internalType":"uint256","name":"depositFees","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"remainingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"_harvestInterval","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stard","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startFarming","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLockedUpRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStardInPools","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"updateAllocPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bonus","type":"uint256"}],"name":"updateBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stardPerBlock","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"rewardLockedUp","type":"uint256"},{"internalType":"uint256","name":"nextHarvestUntil","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],
            masterChefContractAddress : "0x5F09606F9A2e21c36a9e1EFf50720cC841f13852",//"0x5F09606F9A2e21c36a9e1EFf50720cC841f13852",0x82cECaf2Dd71D65f24CEFEA130bf0f86F720954f,0xDb963911Ce3459B3e73598FBAad6927E8Ee2ee20
            masterChefContractInstance : false,
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
        //      window.ethereum.on('accountsChanged', function(account) {
        //         this.account = account;
        //         this.$route.params.account = account;

        //      });
            // window.addEventListener("load", function() {
            //     window.ethereum.on('chainChanged', function(networkId){
            //         console.log('chainChanged: '+ networkId);
            //         this.refresh();
            //     });
            //      //window.ethereum.on('accountsChanged', this.accountChange(account) );//{
            //     //     console.log('accountsChanges: '+ accounts);
            //     //     this.account = accounts;
            //     //     this.$route.params.account = accounts;
            //     //     // $router.go();
            //     //     //this.refresh();
            //     // });
            // }) 
            console.log('MetaMask is installed!');
            if(this.$route.params.web3 == null || this.$route.params.account == null){
                console.log("account not set starqi");
                await this.metaMaskWallet();
            }
            else{
                this.messages = "Loading user Details";
                console.log("account already set starqi");
                this.account = this.$route.params.account;
                this.web3 = this.$route.params.web3;
                this.connected = true;
                this.price = await Functions.getPrice("0x825A381355A51f50a39a18b7c69627380CA38B80",1);
            }
        }
        else{
            //this.matics();
            if(confirm("Would you like to get MetaMask?")){
                Functions.getMetamask();
            }
        }
    },
    mounted(){
        // const chartOptions = { layout: { textColor: 'black', background: { type: 'solid', color: 'white' } } };
        // const chart = createChart(document.getElementById('priceChart'), chartOptions);
        // const areaSeries = chart.addAreaSeries({ lineColor: '#2962FF', topColor: '#2962FF', bottomColor: 'rgba(41, 98, 255, 0.28)' });

        // const data = [{ value: 0, time: 1642425322 }, { value: 8, time: 1642511722 }, { value: 10, time: 1642598122 }, { value: 20, time: 1642684522 }, { value: 3, time: 1642770922 }, { value: 43, time: 1642857322 }, { value: 41, time: 1642943722 }, { value: 43, time: 1643030122 }, { value: 56, time: 1643116522 }, { value: 46, time: 1643202922 }];

        // areaSeries.setData(data);

        // chart.timeScale().fitContent();
    },
    methods: {
         async pops(itm){
            if(itm.address){
                this.selectedABI = itm.ABI;
                this.selectedContractAddress = itm.address;
                this.showPops = true
            }
           
        },
        async metaMaskWallet(){
            this.showPops = false
            getWeb3().then((result) => {
                this.messages = " Pending..."
                const web3 = result;// we instantiate our contract next
                this.web3 = web3;
                var chainId = new web3.eth.getChainId();
                //console.log("web3 set")
                this.masterChefContractInstance = new this.web3.eth.Contract(this.masterChefContractAbi, this.masterChefContractAddress);
                this.$route.params.web3 = web3;
                web3.eth.getAccounts()
                .then(async(accounts) => {
                    if(accounts.length > 0){
                        this.account = accounts[0];
                        this.$route.params.account = accounts[0];
                        this.connected = true;
                        this.messages = false;
                        this.messages = "Loading user Details";
                        this.price = await Functions.getPrice("0x825A381355A51f50a39a18b7c69627380CA38B80",1);
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
        viewExplorer(itm){ 
            console.log("item: "+itm)
            window.open(
                'https://polygonscan.com/token/' + itm.address,
                '_blank' // <- This is what makes it open in a new window.
            );           
        },
        sleep(ms) {
            return new Promise((resolve) => {
                setTimeout(resolve, ms);
            });
         },
        refresh(cause){
            console.log("Refreshed due to: " + cause)
            this.$router.go();
        },
        accountChange(account){
            if(account != this.account && this.account != "Not Connected"){
                this.account = account;
                this.$router.go();
            }
        },
        dextools(){
            console.log(itm)
            window.open(
                'https://www.dextools.io/app/polygon/pair-explorer/0x5175a069642dd288af118bd3365b22456ab7bab2',
                '_blank' // <- This is what makes it open in a new window.
            );
        },
        viewExplorer(site){ 
            console.log("item: "+itm)
            window.open(
                site,
                '_blank' // <- This is what makes it open in a new window.
            );           
        },
    }
}
</script>

