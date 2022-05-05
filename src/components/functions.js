import {ethers} from "ethers";
import * as moralis from "./Moralis.js"
//import {masterChefContractInstance,initMasterchef} from "./masterchef.js";
import * as star from "./starStats.js";
import * as stard  from "./stardStats.js";
import mai from "../assets/mai.png"

var pools = require( "../views/pools.js");
var fantomPools = require( "./fantomPools.js");
var masterChef = require("./masterchef.js");
var starStats = require("./starStats.js");
var stardStats = require("./stardStats.js");
const masterChefContractAbi = masterChef.masterChefContractAbi;
const masterChefContractAddress = "0x16E76500f1E6C943FEd150bF56403d91A91dCD55";

export async function getRates(){
    console.log("getting rates");
    var rates =  await fetch('https://gasstation-mainnet.matic.network/v2').then(response => response.json());
  return (rates);
}

export async function setChain(chainID){
    try {
        var chainSet = await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainID }],
        });
        console.log(chainSet);
        if(chainSet){
            this.$router.go();
            chainSet = fasle;
        }
    } catch (switchError) {
        console.log('switch error: ' + switchError)
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
            console.log("add chain")
            console.log("chainID: " + chainID);
            try {
                if(chainID == '0x89'){
                    console.log("add polygon")
                    await ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: '0x89',
                            chainName: 'Polygon Mainnet',
                            nativeCurrency: {
                                name: 'Matic',
                                symbol: 'MATIC',
                                decimals: 18
                            },
                            rpcUrls: ['https://polygon-rpc.com/'],
                            blockExplorerUrls: ['https://polygonscan.com/']
                        }],
                    });
                }
                else if(chainID == '0xfa'){
                    console.log('add fantom')
                    await ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: '0xfa',
                            chainName: 'Fantom Opera',
                            nativeCurrency: {
                                name: 'Fantom',
                                symbol: 'FTM',
                                decimals: 18
                            },
                            rpcUrls: ['https://rpc.ftm.tools/'],
                            blockExplorerUrls: ['https://ftmscan.com/']
                        }],
                    });
                }
            } catch (addError) {
                console.log("add chain error: "+addError);
            }
        }
        else{
            console.log("switch error: "+switchError)
        }
    }
}

export async function AddStar() {
    const tokenAddress = '0x8440178087C4fd348D43d0205F4574e0348a06F0';
    const tokenSymbol = 'STAR';
    const tokenDecimals = 18;
    const tokenImage = 'https://storageapi2.fleek.co/aeb85deb-410a-4c50-8834-96486196b392-bucket/logo-1.png';

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

export async function AddDao() {
    const tokenAddress = '0x17840DF7CAa07e298b16E8612157B90ED231C973';
    const tokenSymbol = 'DAO';
    const tokenDecimals = 18;
    const tokenImage = 'https://storageapi2.fleek.co/aeb85deb-410a-4c50-8834-96486196b392-bucket/DAO.jpg';
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

export async function AddStard() {
    const tokenAddress = '0xD7308FE1E9Aaa8ae59C9b93316b8E23911c1Be1E';
    const tokenSymbol = 'STARD';
    const tokenDecimals = 18;
    const tokenImage = 'https://storageapi2.fleek.co/aeb85deb-410a-4c50-8834-96486196b392-bucket/logo-1.png';

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


export async function AddMai() {
    const tokenAddress = '0xfB98B335551a418cD0737375a2ea0ded62Ea213b';
    const tokenSymbol = 'MAI';
    const tokenDecimals = 18;
    const tokenImage = mai;

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

export async function getPendingStar(pid,account,chain){
    try{
        if(chain==0){
            var receipt = await masterChef.masterChefContractInstance.methods.pendingStar(pid,account).call()
        }
        else if(chain==1){
            var receipt = await masterChef.masterChefContractInstance.methods.pendingStard(pid,account).call()
        }
        console.log("pending star: " + receipt);
        return (receipt);
    }catch(error){
        console.log("PID: " + pid + " Pending Star error: " + error);
    }
}

export async function getStakedLp(itm,account){
    //console.log("getting staked lp for:" +itm.name)
    try{
        var receipt = await masterChef.masterChefContractInstance.methods.userInfo(itm.pid,account).call()
        //console.log("staked lp: " + receipt.amount);
        return ethers.utils.formatUnits(receipt.amount,itm.decimals);
    }catch(error){
        console.log("staked lp error: " + error);
    }
}

export async function compoundReward(itm,account,chain){
    var rates = await getRates();
    console.log(rates.fast.maxFee)
    try{
        var harvest = await masterChef.masterChefContractInstance.methods.canHarvest(itm.pid,account).call()
        console.log("can harvest: " + harvest);
        if(!harvest){
            var userinfo = await masterChef.masterChefContractInstance.methods.userInfo(itm.pid,account).call()
            var date = new Date(userinfo.nextHarvestUntil * 1000);
            console.log("compound next harvest time: " + date)
            var code = 0;
            return{code,date};
        }
        console.log("harvest is possible");
        if(harvest){
            console.log("compounding");
            try{
                var receipt;
                if(chain == 0){
                    var receipt =masterChef.masterChefContractInstance.methods.compound(itm.pid)
                    .send({
                        maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                        maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                        from:account
                    })    
                }
                else if(chain == 1){
                    var receipt =masterChef.masterChefContractInstance.methods.compound(itm.pid).send({from:account,type:'0x0'});
                }
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

export async function withdraw(itm,account,chain){
   var receipt;
    if(itm.stakedBalance > 0){
        try{
            if(chain == 0){
                var rates = await getRates();
                receipt = await masterChef.masterChefContractInstance.methods.withdraw(itm.pid,ethers.utils.parseUnits(itm.withdrawAmount.toString(), itm.decimals))
                .send({
                    maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                    maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                    from:account
                })
            }
            else if(chain == 1){
                //gasPrice = await web3.eth.gasPrice;
                receipt = await masterChef.masterChefContractInstance.methods.withdraw(itm.pid,ethers.utils.parseUnits(itm.withdrawAmount.toString(), itm.decimals)).send({from:account,type:'0x0'})
            }
            console.log("withdraw tokens: " + receipt);
            return(receipt);
        }catch(error){
            console.log("withdraw error: " + error);
        }
    }
}

export async function emergencyWithdraw(itm,account,chain){
   var rates = await getRates();
    try{
        var receipt;
        if(chain ==0){
            receipt = await masterChef.masterChefContractInstance.methods.emergencyWithdraw(itm.pid)
            .send({
                maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                from:account
            })
        }
        else if (chain ==1){
            receipt = await masterChef.masterChefContractInstance.methods.emergencyWithdraw(itm.pid).send({from:account,type:'0x0'})
        }
        console.Log("emergency Withdraw: " + receipt);
    }catch(error){
        console.log("emergency withdraw  error: " + error);
    }
}

export async function harvest(itm,account,chain){
    try{
        var receipt 
        if(chain==0){
            var rates = await getRates();
            receipt = await masterChef.masterChefContractInstance.methods.harvestStar(itm.pid)
            .send({
                maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                from:account
            })
        }
        else if(chain==1){
            receipt = await masterChef.masterChefContractInstance.methods.harvestStard(itm.pid).send({from:account,type:'0x0'})
        }
        return(receipt);
    }catch(error){
        
        console.log("harvest Star error: " + error);
    }
}

export async function StakeLP(itm,web3,account,chain){
    console.log(account)
    var lpContractInstance = new web3.eth.Contract(itm.ABI, itm.address);
    var allowance = await lpContractInstance.methods.allowance(account,masterChef.masterChefContractAddress).call()
    if(allowance < 10*10**itm.decimals || allowance < itm.amount*10**itm.decimals){
        if(chain == 0){
            var rates = await getRates();
            try{
                var receipt = await lpContractInstance.methods.approve(masterChefContractAddress,ethers.utils.parseUnits("100000",itm.decimals))
                    .send({
                        maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                        maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                        from:account
                    });
                    if(receipt){
                        await sleep(5000);
                        try{
                            receipt = await  masterChef.masterChefContractInstance.methods.deposit(itm.pid,ethers.utils.parseUnits(itm.amount.toString(),itm.decimals))
                                .send({
                                    maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                                    maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                                    from:account
                                });
                            return;
                        }catch(error){
                            console.log("staking after approval error: " +error);
                        }
                    }
            }catch(error){
                console.log(" stake approval error: " +error);
            }
        }
        if(chain == 1){
            console.log("fantom")
            try{
                var receipt = await lpContractInstance.methods.approve(masterChef.masterChefContractAddress,ethers.utils.parseUnits("100000",itm.decimals)).send({from:account,type:'0x0'});
                if(receipt){
                    try{
                        receipt = await  masterChef.masterChefContractInstance.methods.deposit(itm.pid,ethers.utils.parseUnits(itm.amount.toString(),itm.decimals)).send({from:account,type:'0x0'})
                        return
                    }catch(error){
                        console.log("staking after approval error: " +error);
                    }
                }
            }catch(error){
                console.log("Fantom stake approval error: " +error);
            }
        }
    }
    else{
        if(chain == 0){
            try{
                var receipt = await  masterChef.masterChefContractInstance.methods.deposit(itm.pid,ethers.utils.parseUnits(itm.amount.toString(),itm.decimals))
                    .send({
                        maxFeePerGas:(rates.fast.maxFee*(10**9)).toFixed(0),
                        maxPriorityFeePerGas:(rates.fast.maxPriorityFee*(10**9)).toFixed(0),
                        from:account
                    });
                return;
            }catch(error){        
                console.log("staking error: " +error);
            }
        }
        else if(chain == 1){
            console.log("fantom deposit");
            try{
                var receipt = await  masterChef.masterChefContractInstance.methods.deposit(itm.pid,ethers.utils.parseUnits(itm.amount.toString(),itm.decimals)).send({from:account,type:'0x0'});
                return;
            }catch(error){                    
                console.log("staking error: " +error);
            }
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

export async function getUserPoolStats(pools,web3,account,chain){
    if(chain == 0){
        await star.getDailyEmmission();
        await star.getTotalAllocation();
    }
    else if(chain == 1){
        await stard.getDailyEmmission();
        await stard.getTotalAllocation();
    }
    //console.log("starStats emmission: " + starStats.dailyEmission);
    //console.log("starStats total allocation: " + starStats.totalAllocation);
    for( const itm of pools){
        getPoolInfo(itm,chain);
        //console.log("getting stats for:" + itm.name);
        var pending = await getPendingStar(itm.pid,account,chain);
        itm.starEarned =  ethers.utils.formatEther(pending);
        itm.starEarned = (+itm.starEarned);
        //console.log("star earned :"+ itm.starEarned);
        //console.log("getting staked LP");
        itm.stakedBalance =  await getStakedLp(itm,account);
        //console.log("staked LP :"+ itm.stakedBalance);
        //console.log("getting token balance");
        itm.balance = await getBalance(itm,web3,account);
        //console.log("token balance: " + itm.balance);
    }
}

async function getPoolInfo(itm,chain){
    try{
        var receipt = await masterChef.masterChefContractInstance.methods.poolInfo(itm.pid).call();
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
        if(chain == 0){
            itm.apr = (((((starStats.stats.dailyEmission*(receipt.allocPoint/starStats.stats.totalAllocation))*pools.tokenPools[1].price*365)/((receipt.totalLp/10**itm.decimals)*itm.price))*100).toFixed(4));
        }
        else if(chain == 1){
            itm.apr = (((((stardStats.stats.dailyEmission*(receipt.allocPoint/stardStats.stats.totalAllocation))*fantomPools.Pools[0].price*365)/((receipt.totalLp/10**itm.decimals)*itm.price))*100).toFixed(4));
        }
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