import {ethers} from "ethers";
import * as moralis from "./Moralis.js"
//import {masterChefContractInstance,initMasterchef} from "./masterchef.js";
import {getDailyEmmission,getTotalAllocation} from "./starStats.js";

var pools = require( "../views/pools.js");
var masterChef = require("./masterchef.js");
var starStats = require("./starStats.js");
const masterChefContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"BonusMupltiplier","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"EmissionRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBalance","type":"uint256"}],"name":"Funded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountLockedUp","type":"uint256"}],"name":"RewardLockedUp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_DEPOSIT_FEE_RATE","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_HARVEST_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_STAR_PER_BLOCK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"_harvestInterval","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"canHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"collectFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"fundMasterChef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"getDepositFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"harvestStar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingStar","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accStarPerShare","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"harvestInterval","type":"uint256"},{"internalType":"uint256","name":"totalLp","type":"uint256"},{"internalType":"uint256","name":"depositFees","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"remainingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"_harvestInterval","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devAddress","type":"address"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"setStarId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setstarContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"star","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"starPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startFarming","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLockedUpRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStarInPools","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"updateAllocPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bonus","type":"uint256"}],"name":"updateBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_starPerBlock","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"rewardLockedUp","type":"uint256"},{"internalType":"uint256","name":"nextHarvestUntil","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const masterChefContractAddress = "0x16E76500f1E6C943FEd150bF56403d91A91dCD55";

export async function getRates(){
    console.log("getting rates");
    var rates =  await fetch('https://gasstation-mainnet.matic.network/v2').then(response => response.json());
  return (rates);
}

export async function setChain(){
    try {
            var chainSet = await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x89' }],
        });
        if(chainSet){
            this.$router.go();
            chainSet = fasle;
        }
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
                CustomToken();
                this.$router.go();
            } catch (addError) {
                console.log("add chian error: "+addError);
            }
        }
        else{
            console.log("switch error: "+switchError)
        }
    }
}

export async function CustomToken() {
    const tokenAddress = '0x8440178087C4fd348D43d0205F4574e0348a06F0';
    const tokenSymbol = 'STAR';
    const tokenDecimals = 18;
    const tokenImage = 'https://storageapi.fleek.co/aeb85deb-410a-4c50-8834-96486196b392-bucket/logo-1.png';

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
}


export async function getPendingStar(pid,web3,account){
    try{
        var receipt = await masterChef.masterChefContractInstance.methods.pendingStar(pid,account).call()
        //console.log("pending star: " + receipt);
        return (receipt);
    }catch(error){
        console.log("PID: " + pid + " Pending Star error: " + error);
    }
}

export async function getStakedLp(itm,web3,account){
    const masterChefContractInstance = new web3.eth.Contract(masterChefContractAbi, masterChefContractAddress);
    //console.log("getting staked lp for:" +itm.name)
    try{
        var receipt = await masterChefContractInstance.methods.userInfo(itm.pid,account).call()
        //console.log("staked lp: " + receipt.amount);
        return ethers.utils.formatUnits(receipt.amount,itm.decimals);
    }catch(error){
        console.log("staked lp error: " + error);
    }
}

export async function compoundReward(itm,web3,account){
    const masterChefContractInstance = new web3.eth.Contract(masterChefContractAbi, masterChefContractAddress);
    var rates = await getRates();
    console.log(rates.fast.maxFee)
    try{
        var harvest = await masterChefContractInstance.methods.canHarvest(itm.pid,account).call()
        console.log("can harvest: " + harvest);
        if(!harvest){
            var userinfo = await masterChefContractInstance.methods.userInfo(itm.pid,account).call()
            var date = new Date(userinfo.nextHarvestUntil * 1000);
            console.log("compound next harvest time: " + date)
            var code = 0;
            return{code,date};
        }
        console.log("harvest is possible");
        if(harvest){
            console.log("compounding");
            try{
                var receipt =masterChefContractInstance.methods.compound(itm.pid)
                .send({
                    maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                    maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                    from:account
                })    
                console.log(rates.fast.maxFee)
                console.log("maxFeePerGas: " + maxFeePerGas)
                console.log("compound rewards: " + receipt)
                var code = 1;
                return (code,receipt);
                
            }catch(error){
                console.log("function compound reward error: " + error.message);
                if(error.code == -32602){
                    var code = 2;
                    return(code,error.message);
                }
            }
            var code = 1;
            return (code,receipt);
        }
    }catch(error){
        console.log("function compound can harvest error: " + error.message);
        if(error.value.code == -32602){
            var code = 2;
            return(code,error.message);
        }
        var code = 3;
        return(code,error.message);
    }
}

export async function withdraw(itm,web3,account){
    const masterChefContractInstance = new web3.eth.Contract(masterChefContractAbi, masterChefContractAddress);
   var rates = await getRates();
    if(itm.stakedBalance > 0){
        try{
            var receipt = await masterChefContractInstance.methods.withdraw(itm.pid,ethers.utils.parseUnits(itm.withdrawAmount.toString(), itm.decimals))
            .send({
                maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                from:account
            })
            console.log("withdraw tokens: " + receipt);
            return(receipt);
        }catch(error){
            console.log("withdraw error: " + error);
        }
    }
}


export async function emergencyWithdraw(itm,web3,account){
    const masterChefContractInstance = new web3.eth.Contract(masterChefContractAbi, masterChefContractAddress);

   var rates = await getRates();
    try{
        var receipt = await masterChefContractInstance.methods.emergencyWithdraw(itm.pid)
        .send({
            maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
            maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
            from:account
        })
        console.Log("emergency Withdraw: " + receipt);
    }catch(error){
        console.log("emergency withdraw  error: " + error);
    }
}

export async function harvest(itm,web3,account){
    const masterChefContractInstance = new web3.eth.Contract(masterChefContractAbi, masterChefContractAddress);
    var rates = await getRates();
    try{
        var receipt = await masterChefContractInstance.methods.harvestStar(itm.pid)
        .send({
            maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
            maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
            from:account
        })
            return(receipt);
    }catch(error){
        console.log("harvest Star error: " + error);
    }
}

export async function StakeLP(itm,web3,account){
    const masterChefContractInstance = new web3.eth.Contract(masterChefContractAbi, masterChefContractAddress);
    const lpContractInstance = new web3.eth.Contract(itm.ABI, itm.address);
    var rates = await getRates();
    var allowance = await lpContractInstance.methods.allowance(account,masterChefContractAddress).call()
    if(allowance < 10*10**itm.decimals || allowance < itm.amount*10**itm.decimals){
        try{
            var receipt = await lpContractInstance.methods.approve(masterChefContractAddress,ethers.utils.parseUnits("100000",itm.decimals))
                .send({
                    maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                    maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                    from:account
                })
                if(receipt){
                    await sleep(5000);
                    try{
                        receipt = await  masterChefContractInstance.methods.deposit(itm.pid,ethers.utils.parseUnits(itm.amount.toString(),itm.decimals))
                            .send({
                                maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                                maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                                from:account
                            })
                        return
                    }catch(error){
                        console.log("staking after approval error: " +error);
                    }
                }
        }catch(error){
            console.log(" stake approval error: " +error);
        }
    }
    else{
        try{
            receipt = await  masterChefContractInstance.methods.deposit(itm.pid,ethers.utils.parseUnits(itm.amount.toString(),itm.decimals))
                .send({
                    maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                    maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                    from:account
                })
            return
        }catch(error){
            console.log("staking error: " +error);
        }
    }
}


function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
 }

 export function getMetamask(){ 
     window.open(
         "https://metamask.io/",
         '_blank' // <- This is what makes it open in a new window.
     );           
 }

 
 export async function getBalance(itm,web3,account){
    const lpContractInstance = new web3.eth.Contract(itm.ABI, itm.address);
    try{
        var receipt = await lpContractInstance.methods.totalSupply().call();
            //console.log("get totalsupply: " + receipt);
            if(receipt == undefined){receipt = 0;}
            itm.supply = receipt;
    }catch(error){
        console.log("get totalsupply error: " + error);
    }            
    try{
        var receipt = await lpContractInstance.methods.balanceOf(account).call();
            //console.log(itm.name +" get balance: " + receipt);
            if(receipt == undefined){receipt = 0;}
            return ethers.utils.formatUnits(receipt,itm.decimals);
    }catch(error){
        console.log("get balance error: " + error);
    }
    this.lpContractInstance =null;
}

export async function getUserPoolStats(pools,web3,account){
    await getDailyEmmission();
    await getTotalAllocation();
    //console.log("starStats emmission: " + starStats.dailyEmission);
    //console.log("starStats total allocation: " + starStats.totalAllocation);
    for( const itm of pools){
        getPoolInfo(itm,web3,account);
        //console.log("getting stats for:" + itm.name);
        var pending = await getPendingStar(itm.pid,web3,account);
        itm.starEarned =  ethers.utils.formatEther(pending);
        itm.starEarned = (+itm.starEarned);
        //console.log("star earned :"+ itm.starEarned);
        //console.log("getting staked LP");
        itm.stakedBalance =  await getStakedLp(itm,web3,account);
        //console.log("staked LP :"+ itm.stakedBalance);
        //console.log("getting token balance");
        itm.balance = await getBalance(itm,web3,account);
        //console.log("token balance: " + itm.balance);
    }
}

async function getPoolInfo(itm,web3){
    const masterChefContractInstance = new web3.eth.Contract(masterChefContractAbi, masterChefContractAddress);
    try{
        var receipt = await masterChefContractInstance.methods.poolInfo(itm.pid).call();
        if(receipt.totalLp == undefined){receipt.totalLp = 0;}
        //console.log("total liquidity: " + (receipt.totalLp));
        itm.totalLiquidity = ethers.utils.formatUnits(receipt.totalLp,itm.decimals);
        itm.stakedLP = receipt.totalLp;
        if(itm.pid>4){
            var price = await getPrice(itm.address);
            if(price != "no liquidity"){
                itm.price = price;
            }
        }
        //console.log(itm.price);
        itm.apr = (((((starStats.stats.dailyEmission*(receipt.allocPoint/starStats.stats.totalAllocation))*pools.tokenPools[1].price*365)/((receipt.totalLp/10**itm.decimals)*itm.price))*100).toFixed(4));
        //console.log("pool: " + itm.name + " APR: " + itm.apr);
    }catch(error){
        console.log("get pool total liquidity  error: " + error);
    }
}

export async function getPrice(address){
    //console.log("getting token price: " + address)
    const options = {
        address: address,
        chain: "polygon",
        exchange: "quickswap"
    };
    try{
        const price = await moralis.fetchPrice(options);//Moralis.Moralis.Web3API.token.getTokenPrice(options);
        //console.log(price);
        //console.log(address+" Price: " +price.usdPrice)
        return(price.usdPrice);
    }catch(error){
        console.log("get price error: " + error)
        console.log(error)
        if(error.code == 141){
            return("no liquidity")
        }
    }
}