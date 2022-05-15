var masterChef = require("./masterchef.js");
var stats=[{
    totalAllocation : 0,
    dailyEmission : 10,
    stardPrice : 1,
    totalBurned:103.1313
}]
export async function getDailyEmmission(){
    try{
        var receipt = await masterChef.masterChefContractInstance.methods.stardPerBlock().call();
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