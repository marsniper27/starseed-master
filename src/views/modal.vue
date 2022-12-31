<template>
    <div class ="modal__wrapper" className="modal__wrapper">
        <div className="modal">
          <div style="width: 300px;
                    height: 200px;
                    border-radius: 10px;
                    background-color: white;
                    padding: 20px 20px;
                    z-index: 1200;
                    top: calc(50em - 400px);
                    left: calc(50%);
                    display: flex;
                    flex-direction:column;
                    align-items: center;">
            <div>Transfer Token #{{station}}</div>
            <div>Recipient Address:</div>
            <input v-model="transferAddress">
            <button style=" background-color:purple;
                background-image: linear-gradient(to right, #d35ff6 , #a700ee);
                color: #fff;
                border: none;
                box-shadow: 0px 0px 7px -1px #000;
                padding: 6px 11px;
                border-radius: 20px;
                font-size: 15px;
                text-transform: uppercase;
                font-weight: bold;
                width:200px;
                z-index: 8;
                margin-bottom:10px;
                margin-top:10px;" 
                @click="transferStation(station)">
                Transfer
            </button>
            <button style=" background-color:purple;
                background-image: linear-gradient(to right, #d35ff6 , #a700ee);
                color: #fff;
                border: none;
                box-shadow: 0px 0px 7px -1px #000;
                padding: 6px 11px;
                border-radius: 20px;
                font-size: 15px;
                text-transform: uppercase;
                font-weight: bold;
                width:200px;
                z-index: 8;" @click="transfer=false">Cancel</button>
        </div>
          <!-- <slot/> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
  .modal{
    width: 300px;
    height: 100px;
    border-radius: 10px;
    background-color: white;
    padding: 20px 20px;
    z-index: 1200;
    &__wrapper{
      background-color: rgba(0,0,0,0.4);
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      position: absolute;
      top: 0;
    }
  }

</style>