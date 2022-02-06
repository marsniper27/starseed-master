//import masterChefContractInstance from "./masterchef.js"

import * as Functions from "../components/functions.js";
var masterChef = require("./masterchef.js");

var totalAllocation = null;
var dailyEmission =  182.9059829;
var starPrice = 11;


export async function getDailyEmmission(){
    try{
        var receipt = await masterChef.masterChefContractInstance.methods.starPerBlock().call();
        dailyEmission = (receipt*38400)/10**18;
    }catch(error){
        console.log("get daily emmission  error: " + error);
    }
}

export async function getTotalAllocation(){
    //const masterChefContractInstance = new web3.eth.Contract(masterChefContractAbi, masterChefContractAddress);
    try{
        var receipt = await masterChef.masterChefContractInstance.methods.totalAllocation().call();
        //console.log("master total allocation: " + receipt);
        totalAllocation = receipt;
    }catch(error){
        console.log("get master total allocation  error: " + error);
    }
}

export {
    totalAllocation,
    dailyEmission,
    starPrice
}