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
                        <div class="input">
                            <input v-model="fundAmount" placeholder="Amount to fund" />
                        </div>
                        <button @click="fund()">Fund</button>;
                    </div>
                </div>
                <div class="card"  style="min-width:40%">
                    <div>
                        <div class="icon">
                            <h2>Update Emmision Rate </h2>
                        </div>
                        <div class="input">
                            <input v-model="emmisionAmount" placeholder="New Emmsion Rate" />
                        </div>
                        <button @click="emmission()">Update Emmission</button>;
                    </div>
                </div>
                <div class="card"  style="min-width:40%">
                    <div>
                        <div class="icon">
                            <h2>Update Pool Allocation Points </h2>
                        </div>
                        <div class="input">
                            <select v-model="allocSelected">
                                <option v-for="pool in pools" v-bind:value="pool.pid">
                                    {{ pool.name }}
                                </option>
                            </select>
                        </div>
                        <div class="input">
                            <input v-model="allocationAmount" placeholder="New Allocation amount" />
                        </div>
                        <div class="input">
                            <input class = "checkbox" type="checkbox" id="checkbox" v-model="alloChecked">
                            <label for="checkbox">.   Update Pools</label>
                            <label>(if doing more then one pool just do massupdate after all pools are done to save on gas)</label>
                        </div>
                        <div>
                            <button @click="allocation()">Update Pool</button>;
                        </div>
                    </div>
                </div>
                <div class="card"  style="min-width:40%">
                    <div class="icon">
                        <h2>Transfer Operator </h2>
                    </div>
                    <div class="input">
                        <input v-model="operatorAddress" placeholder="New Operator Address" />
                    </div>
                        <button @click="operator()">Transfer Operator</button>;
                </div>
                <div class="card"  style="min-width:40%">
                    <div class="icon">
                        <h2>Mass update Pools </h2>
                    </div>
                        <button @click="massUpdate()">Mass update Pools</button>;
                </div>
                <div class="card"  style="min-width:40%">
                    <div class="icon">
                        <h2>Update Pool </h2>
                    </div>
                    <div class="input">
                        <select v-model="updateSelected">
                            <option v-for="pool in pools" v-bind:value="pool.pid">
                                {{ pool.name }}
                            </option>
                        </select>
                    </div>
                        <button @click="updatePool()">update pool</button>;
                </div>
            </div>



            <h1 class="sub-heading">Owner Functions</h1>
            <div class="container">           
                <div class="card"  style="min-width:40%">
                    <div>
                        <div class="icon">
                            <h2>Add Pool</h2>
                        </div>
                        <div class="input">
                            <input  v-model="tokenAddress" placeholder="New token Address" />
                            <input  v-model="allocationAmount" placeholder="New Allocation amount" />
                            <input  v-model="depositFeeBP" placeholder="New Deposit fee" />
                            <input  v-model="harvestInterval" placeholder="New harvest interval" />
                        </div>
                        <div class="input"> 
                            <input class = "checkbox" type="checkbox" id="checkbox" v-model="checked">
                            <label for="checkbox">.  Update Pools</label>
                            <label>(if doing more then one pool just do massupdate after all pools are done to save on gas)</label>
                        </div>
                        <div>
                            <button @click="addPool()">Add Pool</button>;
                        </div>
                    </div>
                </div>          
                <div class="card"  style="min-width:40%">
                    <div>
                        <div class="icon">
                            <h2>Set Pool Values</h2>
                        </div>
                        <div class="input">
                            <select v-model="setSelected">
                                <option v-for="pool in pools" v-bind:value="pool.pid">
                                    {{ pool.name }}
                                </option>
                            </select>
                            <input v-model="allocationAmount" placeholder="New Allocation amount" />
                            <input v-model="depositFeeBP" placeholder="New Deposit fee" />
                            <input v-model="harvestInterval" placeholder="New harvest interval" />
                        </div>
                        <div class="input"> 
                                <input class = "checkbox" type="checkbox" id="checkbox" v-model="setChecked">
                                <label for="checkbox">.  Update Pools</label>
                                <label>(if doing more then one pool just do massupdate after all pools are done to save on gas)</label>
                        </div>
                        <div>
                            <button @click="setPool()">Update Pool</button>;
                        </div>
                    </div>
                </div>          
                <div class="card"  style="min-width:40%">
                    <div>
                        <div class="icon">
                            <h2>Set Bonus Multiplier</h2>
                        </div>
                    <div class="input">
                        <input v-model="multiplier" placeholder="New Bonus Multiplier" />
                    </div>
                        <button @click="setMultiplier()">Set Multiplier</button>;
                    </div>
                </div>          
                <div class="card"  style="min-width:40%">
                    <div>
                        <div class="icon">
                            <h2>Collect Fees</h2>
                        </div>
                        <select v-model="collectPID">
                            <option v-for="pool in pools" v-bind:value="pool.pid">
                                {{ pool.name }}
                            </option>
                        </select>
                        <button @click="collectFees()">Collect Fees</button>;
                    </div>
                </div>
            </div>        
        </div>
        <div v-if="messages" class="messages">
            <h4>{{messages}}</h4>
        </div>
    </div>
</main>
</template>

<script>

import logoMain from '../assets/logo-3.png';
import Announcement from '../assets/loudspeaker.png';

import Web3 from "web3"
import Matic from "maticjs"
import getWeb3 from './web3.js';
import {ethers} from "ethers";
import Moralis from "moralis";
var Pools = require( "./pools.js");
import * as Functions from "../components/functions.js";
// import { ChainId, Token, WETH, Fetcher, Route } from "quickswap-sdk";

export default {
    components: {},
    data() {
        return {
            updateSelected:null,
            alloChecked:null,
            tokenAddress:null,
            checked:null,
            setSelected:null,
            setChecked:null,
            allocSelected:null,
            pools: Pools.lpPools.concat(Pools.tokenPools),// + Pools.tokenPools,
            Announcement:Announcement,
            logoMain:logoMain,
            web3:false,
            account: "Not Connected",
            messages:false,
            availStar:"Connect Wallet",
            starHarvest:"Connect Wallet",
            connected:false,
            totalMinted:"111,111",
            fundAmount:null,
            masterChefContractAbi : [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"BonusMupltiplier","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"EmissionRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBalance","type":"uint256"}],"name":"Funded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountLockedUp","type":"uint256"}],"name":"RewardLockedUp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_DEPOSIT_FEE_RATE","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_HARVEST_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_STAR_PER_BLOCK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"_harvestInterval","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"canHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"collectFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"fundMasterChef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"getDepositFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"harvestStar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingStar","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accStarPerShare","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"harvestInterval","type":"uint256"},{"internalType":"uint256","name":"totalLp","type":"uint256"},{"internalType":"uint256","name":"depositFees","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"remainingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"_harvestInterval","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devAddress","type":"address"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"setStarId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setstarContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"star","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"starPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startFarming","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLockedUpRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStarInPools","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"updateAllocPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bonus","type":"uint256"}],"name":"updateBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_starPerBlock","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"rewardLockedUp","type":"uint256"},{"internalType":"uint256","name":"nextHarvestUntil","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],
            masterChefContractAddress : "0x16E76500f1E6C943FEd150bF56403d91A91dCD55",
            starAddress:"0x8440178087C4fd348D43d0205F4574e0348a06F0",
            starABI:[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"BuyBackEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"RewardLiquidityProviders","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"path","type":"address[]"}],"name":"SwapETHForTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"path","type":"address[]"}],"name":"SwapTokensForETH","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"UpdateDevFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"UpdateFundOrBurnFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"UpdateLiquidityFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"UpdateMaxTxAmount","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"UpdateTaxFee","type":"event"},{"inputs":[],"name":"MAX_DEV_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_FUND_OR_BURN_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_LIQUIDITY_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TAX_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_TX_AMOUNT_HARD_CAP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_devFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_fundOrBurnFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"buyBackAndBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buyBackEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackUpperLimitAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"isExcludedFromAntiWhale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isIncludedInStarLpList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumBalanceRequired","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumSellOrderAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumTokensBeforeSwapAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setBuyBackEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"buyBackLimit","type":"uint256"}],"name":"setBuybackUpperLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"devFee","type":"uint256"}],"name":"setDevFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bool","name":"_isExcludedOrNot","type":"bool"}],"name":"setExcludedFromAntiWhale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fundorBurnFee","type":"uint256"}],"name":"setFundOrBurnFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"_isIncludedOrNot","type":"bool"}],"name":"setIncludeInStarLpList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFee","type":"uint256"}],"name":"setLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxAmount","type":"uint256"}],"name":"setMaxTxAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"setMinimumBalanceRequired","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"setMinimumSellOrderAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minimumTokensBeforeSwap","type":"uint256"}],"name":"setNumTokensSellToAddToLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"}],"name":"setTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}],
            masterChefContractInstance : false,
            emmisionAmount: null,
            allocationAmount: null,
            poolPid:null,
            transferOutAmount:null,
            allocationPid:null,
            multiplier: null,
            WBTCBalance:"--",
            WBTCSTARBalance:"--",
            collectPID:null,
            updatePID:null,
            operatorAddress:null,
            harvestInterval:null,
            depositFeeBP:null,
            Frock: null
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
                if(this.account !=  "0x1f42Ad4C83ff23fD1a7bf5527FD74B731083cFaB" && this.account != "0xF60De76791c2F09995df52Aa1c6e2E7DcF1E75d7"){
                    console.log("your account is not owner or operator: " +this.acount)
                    this.$router.push({ name: 'Home' });
                }
                this.masterChefContractInstance = new this.web3.eth.Contract(this.masterChefContractAbi, this.masterChefContractAddress);
            }
            /* TODO: Add Moralis Authentication code */
        }
        // this.frock();
    },
    methods: {
        async matics(){
            getWeb3().then((result) => {
                const web3 = result;// we instantiate our contract next
                this.web3 = web3;
                this.$route.params.web3 = web3;
                this.messages = " Pending..."
                web3.eth.getAccounts()
                    .then((accounts) => {
                        if(accounts.length > 0){
                            this.$route.params.account = accounts[0];
                            this.connected = true;
                            this.account = accounts[0];
                            console.log("this.account: "+this.account +" account type: " +typeof this.account);
                            if(this.account !=  "0x1f42Ad4C83ff23fD1a7bf5527FD74B731083cFaB" && this.account != "0xf60de76791c2f09995df52aa1c6e2e7dcf1e75d7"){
                                console.log("not set your account is not owner or operator: " + this.acount)
                                this.$router.push({ name: 'Home' });
                            }
                            this.messages = " Account: " +this.account;
                            this.masterChefContractInstance = new web3.eth.Contract(this.masterChefContractAbi, this.masterChefContractAddress);
                            setTimeout(d=>{
                                this.messages = false
                            },2000);
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
        },
        async fund(){
            var rates = await Functions.getRates();
            this.messages = "Initiating MasterChef Funding...";
            const starContractInstance = new this.web3.eth.Contract(this.starABI,this.starAddress);
            var allowance = await starContractInstance.methods.allowance(this.account,this.masterChefContractAddress).call()
            console.log("allowance is: " + allowance);
            if(allowance < 10*10**18 || allowance < this.fundAmount*10**18){     
                this.messages = "Increasing Allowance...";
                try{
                    console.log("setting fund approval");
                    var receipt = await starContractInstance.methods.approve(this.masterChefContractAddress,ethers.utils.parseEther("100000"))
                        .send({
                            maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
                            maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
                            from:this.account
                        })
                        console.log("stake approval: " +receipt);
                        if(receipt){
                            this.messages = "Funding Masterchef...";
                            try{
                                receipt = await  this.masterChefContractInstance.methods.fundMasterChef(ethers.utils.parseEther(this.fundAmount.toString()))
                                    .send({
                                        maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
                                        maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
                                        from:this.account
                                    })
                                console.log("fund: "+receipt);
                                setTimeout(d=>{
                                    this.messages = false
                                },5000)
                            }catch(error){
                                console.log("fund error after approve: " +error);
                                this.meassages = "Funding error: " +error;
                                setTimeout(d=>{
                                    this.messages = false
                                },5000)
                            }
                        }
                }catch(error){
                    console.log(" fund approval error: " +error);
                    this.meassages = "Approval error: " +error;
                    setTimeout(d=>{
                        this.messages = false
                    },5000)
                }
            }
            else{
                this.messages = "Funding Masterchef...";
                try{
                    receipt = await  this.masterChefContractInstance.methods.fundMasterChef(ethers.utils.parseEther(this.fundAmount.toString()))
                        .send({
                            maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
                            maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
                            from:this.account
                        })
                    console.log("funding: "+receipt);
                    console.log("fund: "+receipt);
                    setTimeout(d=>{
                        this.messages = false
                    },5000)
                }catch(error){
                    console.log("funding error: " +error);
                    this.meassages = "Funding error: " +error;
                    setTimeout(d=>{
                        this.messages = false
                    },5000)
                }
            }
        },
        async emmission(){
            var rates = await Functions.getRates();
            this.messages = "Updating Emission rate...";
            try{
                var result = await this.masterChefContractInstance.methods.updateEmissionRate(this.emmisionAmount)
                    .send({
                        maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
                        maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
                        from:this.account
                    })
                if(result.status){
                    var outcome = "successful"
                }
                else{
                    var outcome = "unsuccessful"
                }
                this.messages = "Updating Emission was " +outcome;
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }catch(error){
                console.log("Updating Emission rate error: " + error);
                this.meassages = "Updating Emission error: " + error;
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }
        },
        async allocation(){
            var rates = await Functions.getRates();
            this.messages = "Updating " +this.allocSelected+" Allocation...";
            setTimeout(d=>{
                this.messages = false
            },5000)
            try{
                if(this.alloChecked){ 
                    var result = await this.masterChefContractInstance.methods.updateAllocPoint(this.allocSelected,this.allocationAmount,true)
                        .send({
                            maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
                            maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
                            from:this.account
                        })
                }
                else{
                    var result = await this.masterChefContractInstance.methods.updateAllocPoint(this.allocSelected,this.allocationAmount,false)
                        .send({
                            maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
                            maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
                            from:this.account
                        })
                }
                if(result.status){
                    var outcome = "successful"
                }
                else{
                    var outcome = "unsuccessful"
                }
                this.messages = "Allocation update was " +outcome;
                console.log(result);
                setTimeout(d=>{
                    this.messages = false
                },5000)
                console.log(result);
            }catch(error){
                console.log("allocation error: " + error);
                this.meassages = "Allocation error: " + error;
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }
        },
        async operator(){
            var rates = await Functions.getRates();
            this.messages = "Updating Operator rate...";
            try{
                var result = await this.masterChefContractInstance.methods.transferOperator(this.operatorAddress)
                    .send({
                        maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
                        maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
                        from:this.account
                    })
                if(result.status){
                    var outcome = "successful"
                }
                else{
                    var outcome = "unsuccessful"
                }
                this.messages = "Updating Operator was " +outcome;
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }catch(error){
                console.log("Updating Operator error: " + error);
                this.meassages = "Updating Operator error: " + error;
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }
        },
        async setMultiplier(){
            var rates = await Functions.getRates();
            this.messages = "Updating Bonus Multiplier...";
            try{
                var result = await this.masterChefContractInstance.methods.updateBonus(this.multiplier)
                    .send({
                        maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
                        maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
                        from:this.account
                    })
                if(result.status){
                    var outcome = "successful"
                }
                else{
                    var outcome = "unsuccessful"
                }
                this.messages = "update was " +outcome;
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }catch(error){
                console.log("Multiplier error: " + error);
                this.meassages = "Multiplier error: " + error;
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }
        },
        async collectFees(){
            var rates = await Functions.getRates();
            this.messages = "collecting fees...";
            try{
                var result = await this.masterChefContractInstance.methods.collectFees(this.collectPID)
                    .send({
                        maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
                        maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
                        from:this.account
                    })
                if(result.status){
                    var outcome = "successful"
                }
                else{
                    var outcome = "unsuccessful"
                }
                this.messages = "Fee colection was " +outcome;
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }catch(error){
                console.log("collecting fees error: " + error);
                this.messages = "Collecting fees error: " + error;
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }
        },
        async massUpdate(){
            var rates = await Functions.getRates();
            this.messages = "collecting fees...";
            try{
                var result = await this.masterChefContractInstance.methods.massUpdatePools()
                    .send({
                        maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
                        maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
                        from:this.account
                    })
                if(result.status){
                    var outcome = "successful"
                }
                else{
                    var outcome = "unsuccessful"
                }
                this.messages = "mass update pools was " +outcome;
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }catch(error){
                console.log("mass update pools error: " + error);
                this.messages = "mass update pools error: " + error;
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }
        },
        async updatePool(){
            var rates = await Functions.getRates();
            this.messages = "collecting fees...";
            try{
                var result = await this.masterChefContractInstance.methods.updatePool(this.updateSelected)
                    .send({
                        maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
                        maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
                        from:this.account
                    })
                if(result.status){
                    var outcome = "successful"
                }
                else{
                    var outcome = "unsuccessful"
                }
                this.messages = "updatePool was " +outcome;
                console.log(result);
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }catch(error){
                console.log("updatePool error: " + error);
                this.messages = "updatePool error: " + error;
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }
        },
        async changeMxTxAmount(){
            var rates = await Functions.getRates(); 
            const starContractInstance = new this.web3.eth.Contract(this.starABI,this.starAddress);
            try{
                var receipt = await starContractInstance.methods.setMaxTxAmount(ethers.utils.parseUnits("10000"))
                    .send({
                        maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
                        maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
                        from:this.masterChefContractInstance.address
                        })
                console.log("change mx tx amount: " + receipt);
            }catch(error){
                console.log("change mx tx amount error: " + error);
            }
        },
        async setPool(){
            var rates = await Functions.getRates();
            this.messages = "collecting fees...";
            try{
                if(this.setChecked){ 
                    var result = await this.masterChefContractInstance.methods.set(this.setSelected, this.allocationAmount,this.depositFeeBP, this.harvestInterval,true)
                    .send({
                        maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
                        maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
                        from:this.account
                    })
                }
                else{
                    var result = await this.masterChefContractInstance.methods.set(this.setSelected, this.allocationAmount,this.depositFeeBP, this.harvestInterval,false)
                    .send({
                        maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
                        maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
                        from:this.account
                    })
                }
                if(result.status){
                    var outcome = "successful"
                }
                else{
                    var outcome = "unsuccessful"
                }
                this.messages = "set Pool was " +outcome;
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }catch(error){
                console.log("set Pool error: " + error);
                this.messages = "set Pool error: " + error;
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }
        },
        async addPool(){
            var rates = await Functions.getRates();
            this.messages = "collecting fees...";
            console.log(this.allocationAmount,this.tokenAddress,this.depositFeeBP, this.harvestInterval,)
            try{
                if(this.setChecked){ 
                    var result = await this.masterChefContractInstance.methods.add(this.allocationAmount,this.tokenAddress,this.depositFeeBP, this.harvestInterval,true)
                    .send({
                        maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
                        maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
                        from:this.account
                    })
                }
                else{
                    var result = await this.masterChefContractInstance.methods.add(this.allocationAmount,this.tokenAddress,this.depositFeeBP, this.harvestInterval,false)
                    .send({
                        maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
                        maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
                        from:this.account
                    })
                }
                if(result.status){
                    var outcome = "successful"
                }
                else{
                    var outcome = "unsuccessful"
                }
                this.messages = "add Pool was " +outcome;
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }catch(error){
                console.log("add Pool error: " + error);
                this.messages = "add Pool error: " + error;
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }
        },
        // async frock(){
        //     const ftm = new Web3('https://speedy-nodes-nyc.moralis.io/3e80fd791515a22ed9b5992f/fantom/mainnet')
        //     const frockContractInstance = new ftm.eth.Contract(this.starABI,'0xe679ae2b7e97D759eC758fafe50cB011eBfb7D77');
        //     try{
        //         var receipt = await frockContractInstance.methods.balanceOf('0x8Eaedb026f0c6A0174Ca5Eb9C4eCFeD28237a176').call()
        //         this.Frock = receipt;
        //         console.log("change mx tx amount: " + receipt);
        //     }catch(error){
        //         console.log("change mx tx amount error: " + error);
        //     }
        // }
        // async testnetApprove(){
        //     var ABI=[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"reserve0","type":"uint112"},{"internalType":"uint112","name":"reserve1","type":"uint112"},{"internalType":"uint32","name":"blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
        //     const starContractInstance = new this.web3.eth.Contract(ABI, "0x7Ba798157147e37Dc4c54bDFa2aF013BAf3C02c2");
        //     var gameAddress = "0x6d0FA41548Fc4Ad69B71881E36bd022a1f008dA0";
        //     var rates = await Functions.getRates();
        //     this.messages = "testnet approve...";
        //     try{
        //             var result = await starContractInstance.methods.approve(gameAddress,ethers.utils.parseUnits("100000",18))
        //             .send({
        //                 maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
        //                 maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
        //                 from:this.account
        //             })
        //         console.log(result)
        //         setTimeout(d=>{
        //             this.messages = false
        //         },5000)
        //     }catch(error){
        //     console.log("testnet error: " + error);
        //     this.messages = "stestnet error: " + error;
        //     setTimeout(d=>{
        //         this.messages = false
        //     },5000)
        //     }
        // },
        // async testnetDeposit(){
        //     var ABI = [{constant: true,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositStar","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]
        //     let gameAddress = '0x200f3Db3Fb489C57d7A0720B3560b366BD71073F'; // testnet
        //     const gameContractInstance = new this.web3.eth.Contract(ABI, gameAddress)
        //     var rates = await Functions.getRates();
        //     var depositAmount = 1;
        //     this.messages = "testnet approve...";
        //     try{
        //             var result = await gameContractInstance.methods.depositStar(depositAmount)
        //             .send({
        //                 maxFeePerGas:rates.fast.maxFee.toFixed(9)*10**9,
        //                 maxPriorityFeePerGas:rates.fast.maxPriorityFee.toFixed(9)*10**9,
        //                 from:this.account
        //             })
        //         console.log(result)
        //         setTimeout(d=>{
        //             this.messages = false
        //         },5000)
        //     }catch(error){
        //         console.log("testnet error: " + error);
        //         this.messages = "stestnet error: " + error;
        //         setTimeout(d=>{
        //             this.messages = false
        //         },5000)
        //     }
        // }
    }
}
</script>