//import masterChefContractInstance from "./masterchef.js"

import * as Functions from "../components/functions.js";
var masterChef = require("./masterchef.js");
var stats=[{
    totalAllocation : 0,
    dailyEmission : 140.6397788,
    starPrice : 10.59,
    totalBurned:11442.9280
}]



export async function getDailyEmmission(){
    try{
        var receipt = await masterChef.masterChefContractInstance.methods.starPerBlock().call();
        stats.dailyEmission = (receipt*38400)/10**18;
    }catch(error){
        console.log("get daily emmission  error: " + error);
    }
}

export async function getTotalAllocation(){
    try{
        var receipt = await masterChef.masterChefContractInstance.methods.totalAllocation().call();
        stats.totalAllocation = receipt;
    }catch(error){
        console.log("get master total allocation  error: " + error);
    }
}

export {
    stats
}