//import masterChefContractInstance from "./masterchef.js"

var masterChef = require("./masterchef.js");

var totalAllocation = null;
var dailyEmission =  182.9059829;
var starPrice = 11;


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