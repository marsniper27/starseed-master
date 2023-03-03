<template>
    <div class="fw">
        <div class="topBar">
            <!-- <i class="fas fa-layer-minus toggle" @click="toggleMenu"></i> -->
            <img src="../assets/Starseed-Dimension3.jpg" class="logo" @click="toggleMenu">
            <div v-if="!showButton" class="buttonBar" v-bind:class = "{'showButton':showButton}" style = "overflow:auto;">
                <button v-if="pool" @click="Functions.AddStar()" class="addStar">Add STAR to <img width="30px" src="../assets/metamask-fox.svg"></button>
                <button v-if="pool" @click="Functions.AddDao()" class="addStar">Add DAO to <img width="30px" src="../assets/metamask-fox.svg"></button>
                <button v-if="stard" @click="Functions.AddStard()" class="addStar">Add STARD to <img width="30px" src="../assets/metamask-fox.svg"></button>
                <button v-if="stard" @click="Functions.AddMai()" class="addStar">Add MAI to <img width="30px" src="../assets/metamask-fox.svg"></button>
                
                <!-- <h3 class="account">
                Connected Account: <span id="account" class="purple">{{accountSet}}</span>
                <button v-if="pool" @click="Functions.AddStar()" class="addStar">Add STAR to <img width="30px" src="../assets/metamask-fox.svg"></button>
                <button v-if="pool" @click="Functions.AddDao()" class="addStar">Add DAO to <img width="30px" src="../assets/metamask-fox.svg"></button>
                <button v-if="stard" @click="Functions.AddStard()" class="addStar">Add STARD to <img width="30px" src="../assets/metamask-fox.svg"></button>
                <button v-if="stard" @click="Functions.AddMai()" class="addStar">Add MAI to <img width="30px" src="../assets/metamask-fox.svg"></button>
                    
                <button>STAR Balance: {{balance}}</button>
                </h3> -->
                <button style="background-color:purple;
                    background-image: linear-gradient(to right, #d35ff6 , #a700ee);
                    color: #fff;
                    border: none;
                    box-shadow: 0px 0px 7px -1px #000;
                    padding: 6px 11px;
                    border-radius: 20px;
                    font-size: 15px;
                    text-transform: uppercase;
                    font-weight: bold;
                    width: fit-content;
                    margin-left: 10px;
                    position: fixed;
                    right: 12em;">
                    STAR Balance: {{balance}}
                </button>
                <div v-if="!connected" class="connect">
                    <button @click="MetaMask()" class="connectWallet"><i width="30px" class="fas fa-network-wired"></i>Connect</button>
                </div>
                <div v-if="connected" class="disconnect">
                    <button @click="disconnect()" class="connectWallet"><i class="fas fa-network-wired" width="30px"></i>Disconnect</button>
                </div>
                
            </div> 
            <i class="fas fa-layer-minus toggle" @click="toggleButton" style="position: fixed;right: 20px;top: 25px; z-index: 1;"></i>
        </div>
        <div v-if="showButton" class = "sideBarRight" v-bind:class = "{'showButton':showButton}" style = "overflow:auto; width:240px">
            <ul style = "width:220px;">
                <li v-if="pool" @click="Functions.AddStar(); toggleButton()" style="background: #48c2f8;
                        background-color: #48c2f8; /* For browsers that do not support gradients */
                        background-image: linear-gradient(to right, #48c2f8 , #009bf2);
                        font-size: 15px;
                        text-transform: uppercase;
                        font-weight: bold;">
                    <span>Add STAR to</span>
                    <img height=24 src="../assets/metamask-fox.svg">
                    <!-- <button v-if="pool" @click="Functions.AddStar()" >Add STAR to <img width="30px" src="../assets/metamask-fox.svg"></button> -->
                </li>
                <li v-if="pool"  @click="Functions.AddDao(); toggleButton()" style="background: #48c2f8;
                        background-color: #48c2f8; /* For browsers that do not support gradients */
                        background-image: linear-gradient(to right, #48c2f8 , #009bf2);
                        font-size: 15px;
                        text-transform: uppercase;
                        font-weight: bold;">
                    <span>Add DAO to</span>
                    <img height=24 src="../assets/metamask-fox.svg">
                    <!-- <button v-if="pool" @click="Functions.AddDao()" class="addStar">Add DAO to <img width="30px" src="../assets/metamask-fox.svg"></button> -->
                </li>
                <li v-if="stard" @click="Functions.AddStard(); toggleButton()" style="background: #48c2f8;
                        background-color: #48c2f8; /* For browsers that do not support gradients */
                        background-image: linear-gradient(to right, #48c2f8 , #009bf2);
                        font-size: 15px;
                        text-transform: uppercase;
                        font-weight: bold;">
                    <span>Add STARD to </span>
                    <img height=24 src="../assets/metamask-fox.svg">
                    <!-- <button v-if="stard" @click="Functions.AddStard()" class="addStar">Add STARD to <img width="30px" src="../assets/metamask-fox.svg"></button> -->
                </li>
                <li v-if="stard" @click="Functions.AddMai(); toggleButton()" style="background: #48c2f8;
                        background-color: #48c2f8; /* For browsers that do not support gradients */
                        background-image: linear-gradient(to right, #48c2f8 , #009bf2);
                        font-size: 15px;
                        text-transform: uppercase;
                        font-weight: bold;">
                    <span>Add MAI to </span>
                    <img height=24 src="../assets/metamask-fox.svg">
                    <!-- <button v-if="stard" @click="Functions.AddMai()" class="addStar">Add MAI to <img width="30px" src="../assets/metamask-fox.svg"></button> -->
                </li>
                
                <!-- <h3 class="account">
                Connected Account: <span id="account" class="purple">{{accountSet}}</span>
                <button v-if="pool" @click="Functions.AddStar()" class="addStar">Add STAR to <img width="30px" src="../assets/metamask-fox.svg"></button>
                <button v-if="pool" @click="Functions.AddDao()" class="addStar">Add DAO to <img width="30px" src="../assets/metamask-fox.svg"></button>
                <button v-if="stard" @click="Functions.AddStard()" class="addStar">Add STARD to <img width="30px" src="../assets/metamask-fox.svg"></button>
                <button v-if="stard" @click="Functions.AddMai()" class="addStar">Add MAI to <img width="30px" src="../assets/metamask-fox.svg"></button>
                    
                <button>STAR Balance: {{balance}}</button>
                </h3> -->
                <li style="background-color:purple;
                        background-image: linear-gradient(to right, #d35ff6 , #a700ee);
                        color: #fff;
                        box-shadow: 0px 0px 7px -1px #000;
                        font-size: 15px;
                        text-transform: uppercase;
                        font-weight: bold;">
                    <span>STAR Balance: {{balance}}</span>
                    <!-- <button style="background-color:purple;
                        background-image: linear-gradient(to right, #d35ff6 , #a700ee);
                        color: #fff;
                        border: none;
                        box-shadow: 0px 0px 7px -1px #000;
                        padding: 6px 11px;
                        border-radius: 20px;
                        font-size: 15px;
                        text-transform: uppercase;
                        font-weight: bold;
                        width: fit-content;
                        margin-left: 10px;
                        position: fixed;
                        right: 12em;">
                        STAR Balance: {{balance}}
                    </button> -->
                </li>
                <li v-if="!connected" @click="MetaMask(), toggleButton()" style="background-color:purple;
                        background-image: linear-gradient(to right, #d35ff6 , #a700ee);
                        color: #fff;
                        box-shadow: 0px 0px 7px -1px #000;
                        font-size: 15px;
                        text-transform: uppercase;
                        font-weight: bold;">
                    <span>Connect</span>
                    <!-- <div v-if="!connected" class="connect">
                        <button @click="MetaMask()" class="connectWallet"><i width="30px" class="fas fa-network-wired"></i>Connect</button>
                    </div> -->
                </li>
                <li v-if="connected" @click="MetaMask(), toggleButton()" style="background-color:purple;
                        background-image: linear-gradient(to right, #d35ff6 , #a700ee);
                        color: #fff;
                        box-shadow: 0px 0px 7px -1px #000;
                        font-size: 15px;
                        text-transform: uppercase;
                        font-weight: bold;">
                    <span>Disconnect</span>
                    <!-- <div v-if="connected" class="disconnect">
                        <button @click="disconnect()" class="connectWallet"><i class="fas fa-network-wired" width="30px"></i>Disconnect</button>
                    </div> -->
                </li>
            </ul>
        </div>
        <div class="sideBar" v-bind:class = "{'showMenu':showMenu}" style = "overflow:auto; width:240px;">
            <!-- <div style = "width:220px;"> -->
                <ul style = "width:220px;">
                    <li @click="toggleMenu" v-bind:class="{'active':$route.path == '/'}">
                        <router-link :to="{path:'/'}">
                            <!-- <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG" ><path d="../assets/StarQi-Icons/EPS/01-home.eps"></path></svg><path d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z"></path></svg> -->
                            <img height=24 src="../assets/StarQi-Icons/PNG/01-home-01.png">
                            <span>Home</span>
                        </router-link>
                    </li>
                    <li @click="stations" v-bind:class="{'active':showStations||$route.path == '/starStations'||$route.path == '/starStationsWallet'}">
                        <router-link :to="$route.path">
                            <img height=24 src="../assets/StarQi-Icons/PNG/04-Starseed-Command-01.png">
                            <span>Star Stations</span>
                        </router-link>
                    </li>
                    <div v-if="showStations" class="subMenu" v-bind:class = "{'showStations':showStations}">
                        <li  @click="toggleMenu" v-bind:class="{'active':$route.path == '/starStations'}">
                            <router-link :to="{path:'/starStations'}">
                                <img height=24 src="../assets/StarQi-Icons/PNG/04-Starseed-Command-01.png">
                                <span>Mint Stations</span>
                            </router-link>
                        </li>
                        <li  @click="toggleMenu" v-bind:class="{'active':$route.path == '/starStationsWallet'}">
                            <router-link :to="{path:'/starStationsWallet'}">
                                <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z"></path></svg>
                                <span>Stations Wallet</span>
                            </router-link>
                        </li>
                         <li  @click="toggleMenu" v-bind:class="{'active':$route.path == '/stard'}">
                            <a href="https://opensea.io/collection/nexus-star-station-v3" target="_new">
                                <!-- <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"></path></svg> -->
                                <img height=24 src="../assets/StarQi-Icons/PNG/05-Trade-Star-01.png">
                                <span>NFT Marketplace</span>
                            </a>
                        </li>  
                        <li  @click="toggleMenu" v-bind:class="{'active':$route.path == '/worldOfUnity'}">
                            <router-link :to="{path:'/worldOfUnity'}">
                                <img height=24 src="../assets/StarQi-Icons/PNG/04-Starseed-Command-01.png">
                                <span>World of Unity</span>
                            </router-link>
                        </li> 
                    </div>
                    <li @click="command" v-bind:class="{'active':showCommand||$route.path == '/starCommand'||$route.path == '/starCommandWallet'}">
                        <router-link :to="$route.path">
                            <img height=24 src="../assets/StarQi-Icons/PNG/04-Starseed-Command-01.png">
                            <span>StarSeeds Dao</span>
                        </router-link>
                    </li>
                    <div  @click="toggleMenu" v-if="showCommand" class="subMenu" v-bind:class = "{'showCommand':showCommand}">
                        <li  v-bind:class="{'active':$route.path == '/starCommand'}">
                            <router-link :to="{path:'/starCommand'}">
                                <img height=24 src="../assets/StarQi-Icons/PNG/04-Starseed-Command-01.png">
                                <span>Mint Command Bridge</span>
                            </router-link>
                        </li>
                        <li  @click="toggleMenu" v-bind:class="{'active':$route.path == '/starCommandWallet'}">
                            <router-link :to="{path:'/starCommandWallet'}">
                                <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z"></path></svg>
                                <span>Command Bridge Wallet</span>
                            </router-link>
                        </li>
                         <li  @click="toggleMenu" v-bind:class="{'active':$route.path == '/stard'}"> 
                            <a href="https://opensea.io/collection/nexus-star-station-v3" target="_new">
                                <!-- <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"></path></svg> -->
                                <img height=24 src="../assets/StarQi-Icons/PNG/05-Trade-Star-01.png">
                                <span>NFT Marketplace</span>
                            </a>
                        </li> 
                         <li  @click="toggleMenu" v-bind:class="{'active':$route.path == '/stard'}"> 
                            <a href="https://snapshot.org/#/starseeds-dao.eth" target="_new">
                                <!-- <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"></path></svg> -->
                                <img height=24 src="../assets/icon-flag.png">
                                <span>Snapshot</span>
                            </a>
                        </li> 
                    </div>
                    <li @click="toggleMenu" v-bind:class="{'active':$route.path == '/pool'}">
                        <router-link :to="{path:'/pool'}">
                            <!-- <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z"></path></svg> -->
                            <img height=24 src="../assets/StarQi-Icons/PNG/02-Farms-and-Pools-01.png">
                            <span>Farms and Pools</span>
                        </router-link>
                    </li>
                    <!-- <li @click="servant" v-bind:class="{'active':showServant||$route.path == '/starqi'||$route.path == '/regen'||$route.path == '/stard'}">
                        <router-link :to="$route.path">
                            <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"></path></svg>
                            <span>Star Protocols</span>
                        </router-link>
                    </li>
                    <div v-if="showServant" class="subMenu" v-bind:class = "{'showServant':showServant}">
                        <li  @click="toggleMenu" v-bind:class="{'active':$route.path == '/starqi'}">
                            <router-link :to="{path:'/starqi'}">
                                <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z"></path></svg>
                                <span>StarQi</span>
                            </router-link>
                        </li>
                        <li  @click="toggleMenu" v-bind:class="{'active':$route.path == '/regen'}">
                            <a href="http://regenprotocol.finance/" target="_new">
                                <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z"></path></svg>
                                <span>Regen Protocol</span>
                            </a>
                        </li>
                        <li  @click="toggleMenu" v-bind:class="{'active':$route.path == '/stard'}">
                            <router-link :to="{path:'/stard'}">
                               <img height=24 src="../assets/StarQi-Icons/PNG/03-Star-Dollars-01.png">
                                <span>Star Dollars</span>
                            </router-link>
                        </li>
                    </div> -->
                    <!-- <li @click="toggleMenu" v-bind:class="{'active':$route.path == '/fleet'}">
                        <a href="https://starseed-command.web.app/" target="_new">
                            <img height=24 src="../assets/StarQi-Icons/PNG/04-Starseed-Command-01.png">
                            <span>StarSeed Command MMO</span>
                        </a>
                    </li>             -->
                    <li  @click="toggleMenu">
                        <a href="https://quickswap.exchange/#/swap?outputCurrency=0x8440178087C4fd348D43d0205F4574e0348a06F0&swapIndex=0&currency0=0x17840DF7CAa07e298b16E8612157B90ED231C973" target="_new">
                            <!-- <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"></path></svg> -->
                            <img height=24 src="../assets/StarQi-Icons/PNG/05-Trade-Star-01.png">
                            <span>Trade Star</span>
                        </a>
                    </li>
                    <!-- <li  @click="toggleMenu">
                        <a href=" https://solidity.finance/audits/StarToken/" target="_new">
                            <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"></path></svg>
                            <span>Audit</span>
                        </a>
                    </li> -->
                    <li  @click="toggleMenu">
                        <a href="http://docs.starseeds.exchange" target="_new">
                            <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"></path></svg>
                            <span>Docs</span>
                        </a>
                    </li>
                    <li @click="toggleMenu" v-bind:class="{'active':$route.path == '/info'}">
                        <router-link :to="{path:'/info'}">
                            <!-- <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"></path></svg> -->
                            <img height=24 src="../assets/StarQi-Icons/PNG/06-More-Info-01.png">
                            <span>More Info</span>
                        </router-link>
                    </li>
                    <li v-if="this.account ==  0x1f42Ad4C83ff23fD1a7bf5527FD74B731083cFaB || this.account == 0xf60de76791c2f09995df52aa1c6e2e7dcf1e75d7" @click="toggleMenu" v-bind:class="{'active':$route.path == '/operator'}">
                        <router-link :to="{path:'/operator'}">
                            <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"></path></svg>
                            <span>Operator</span>
                        </router-link>
                    </li>
                    <li v-if="this.account ==  0x1f42Ad4C83ff23fD1a7bf5527FD74B731083cFaB || this.account == 0xf60de76791c2f09995df52aa1c6e2e7dcf1e75d7" @click="toggleMenu" v-bind:class="{'active':$route.path == '/bridge'}">
                        <router-link :to="{path:'/bridge'}">
                            <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"></path></svg>
                            <span>Star Bridge</span>
                        </router-link>
                    </li>
                </ul>
            <!-- </div> -->
            <div class="earning">
                <div @click = "chart()">$ {{currentStarPrice}}</div>
                    <svg @click ="telegram()" viewBox="0 0 24 24" width="24px" color="textSubtle" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ kIZZaz" style="cursor: pointer;"><path d="M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z"></path></svg>
                
            </div>
        </div>  
        <!-- <div v-if="showModal" class="modal">
            <UserAgreementModal>
            <h4>User Agreement</h4>
            <form @submit.prevent="onSubmit">
                <label>
                    <input type="checkbox" v-model="accepted"> I accept the terms and conditions
                </label>
                <button type="submit">Submit</button>
            </form>
            </UserAgreementModal>
            <form @submit.prevent="onSubmit">
                <label>
                    <input type="checkbox" v-model="accepted"> I accept the terms and conditions
                </label>
                <button type="submit">Submit</button>
            </form>
        </div> -->
    </div>
</template>

<script>
import * as THREE from 'three';
import getWeb3 from '../views/web3.js';
var starStats = require("./starStats.js");
import * as Functions from "./functions.js";
// import UserAgreementModal from './UserAgreementModal.vue';

export default {
    components: {
        // UserAgreementModal
    },
    data() {
        return {
            camera: false,
            pool:false,
            stard:false,
            Functions:Functions,
            // UserAgreementModal:UserAgreementModal,
            scene: false,
            renderer: false,
            stars: [],
            account: "",
            balance:0,
            showMenu:false,
            showButton:false,
            showServant:false,
            showStations:false,
            showCommand:false,
            connected:false,
            web3:null,
            masterChefContractAbi : [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"BonusMupltiplier","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"EmissionRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBalance","type":"uint256"}],"name":"Funded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountLockedUp","type":"uint256"}],"name":"RewardLockedUp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_DEPOSIT_FEE_RATE","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_HARVEST_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_STAR_PER_BLOCK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"_harvestInterval","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"canHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"collectFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"fundMasterChef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"getDepositFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"harvestStar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingStar","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accStarPerShare","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"harvestInterval","type":"uint256"},{"internalType":"uint256","name":"totalLp","type":"uint256"},{"internalType":"uint256","name":"depositFees","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"remainingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"_harvestInterval","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devAddress","type":"address"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"setStarId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setstarContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"star","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"starPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startFarming","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLockedUpRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStarInPools","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"updateAllocPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bonus","type":"uint256"}],"name":"updateBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_starPerBlock","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"rewardLockedUp","type":"uint256"},{"internalType":"uint256","name":"nextHarvestUntil","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],
            masterChefContractAddress : "0x16E76500f1E6C943FEd150bF56403d91A91dCD55",
            starContractAbi :[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "bool", "name": "enabled", "type": "bool" } ], "name": "BuyBackEnabledUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "tokenAmount", "type": "uint256" } ], "name": "RewardLiquidityProviders", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "tokensSwapped", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "ethReceived", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokensIntoLiqudity", "type": "uint256" } ], "name": "SwapAndLiquify", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "bool", "name": "enabled", "type": "bool" } ], "name": "SwapAndLiquifyEnabledUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "indexed": false, "internalType": "address[]", "name": "path", "type": "address[]" } ], "name": "SwapETHForTokens", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "indexed": false, "internalType": "address[]", "name": "path", "type": "address[]" } ], "name": "SwapTokensForETH", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "newRate", "type": "uint256" } ], "name": "UpdateDevFee", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "newRate", "type": "uint256" } ], "name": "UpdateFundOrBurnFee", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "newRate", "type": "uint256" } ], "name": "UpdateLiquidityFee", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "newAmount", "type": "uint256" } ], "name": "UpdateMaxTxAmount", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "newRate", "type": "uint256" } ], "name": "UpdateTaxFee", "type": "event" }, { "inputs": [], "name": "MAX_DEV_FEE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_FUND_OR_BURN_FEE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_LIQUIDITY_FEE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_TAX_FEE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MIN_TX_AMOUNT_HARD_CAP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_devFee", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_fundOrBurnFee", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_liquidityFee", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_maxTxAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_taxFee", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_amount", "type": "uint256" } ], "name": "buyBackAndBurn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "buyBackEnabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "buyBackUpperLimitAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "deadAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "excludeFromFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "excludeFromReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "includeInFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "includeInReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_account", "type": "address" } ], "name": "isExcludedFromAntiWhale", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "isExcludedFromFee", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "isExcludedFromReward", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_address", "type": "address" } ], "name": "isIncludedInStarLpList", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minimumBalanceRequired", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minimumSellOrderAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minimumTokensBeforeSwapAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tAmount", "type": "uint256" }, { "internalType": "bool", "name": "deductTransferFee", "type": "bool" } ], "name": "reflectionFromToken", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "_enabled", "type": "bool" } ], "name": "setBuyBackEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "buyBackLimit", "type": "uint256" } ], "name": "setBuybackUpperLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "devFee", "type": "uint256" } ], "name": "setDevFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_account", "type": "address" }, { "internalType": "bool", "name": "_isExcludedOrNot", "type": "bool" } ], "name": "setExcludedFromAntiWhale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "fundorBurnFee", "type": "uint256" } ], "name": "setFundOrBurnFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_address", "type": "address" }, { "internalType": "bool", "name": "_isIncludedOrNot", "type": "bool" } ], "name": "setIncludeInStarLpList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "liquidityFee", "type": "uint256" } ], "name": "setLiquidityFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "maxTxAmount", "type": "uint256" } ], "name": "setMaxTxAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_newAmount", "type": "uint256" } ], "name": "setMinimumBalanceRequired", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_newAmount", "type": "uint256" } ], "name": "setMinimumSellOrderAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_minimumTokensBeforeSwap", "type": "uint256" } ], "name": "setNumTokensSellToAddToLiquidity", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "_enabled", "type": "bool" } ], "name": "setSwapAndLiquifyEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "taxFee", "type": "uint256" } ], "name": "setTaxFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "swapAndLiquifyEnabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "rAmount", "type": "uint256" } ], "name": "tokenFromReflection", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalFees", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "uniswapV2Pair", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "uniswapV2Router", "outputs": [ { "internalType": "contract IUniswapV2Router02", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ],
            starContractAddress : "0x8440178087C4fd348D43d0205F4574e0348a06F0",
            currentStarPrice: 10.65,
            userAgreementAccepted: false,
            // showModal: false,
            // accepted: false
        }
    },
    computed: {
        accountSet() {
            // console.log("set acount: " + this.account)
            return this.account
        }
    },
    watch: {
        "$route.params": {
            handler(newValue, oldValue) {
                // console.log(this.$route.path)
                if(this.$route.name == 'Pool'||this.$route.path == '/'){
                    this.pool = true;
                    this.stard = false;
                }
                else if (this.$route.name == 'Star Dollars'){
                    this.stard = true;
                    this.pool = false;
                }
            },
            immediate: true
        }
    },
    async created() {
        // Check if user has accepted the agreement before
        // const userAgreementAccepted = localStorage.getItem('userAgreementAccepted');
        // if (userAgreementAccepted !== 'true') {
        //     // Show the modal
        //     this.userAgreementAccepted = false;
        //     this.showModal = true;
        // } else {
        //     this.userAgreementAccepted = true;  
        // }
        this.webGL()
        // console.log(this.$route.name)
        // console.log(this.pool)
        // console.log(this.stard)
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.on('accountsChanged', () => {
                window.location.reload();
            })
            // console.log('MetaMask is installed!');
            if(this.$route.params.web3 == null || this.$route.params.account == null){
                console.log("account not set");
                this.MetaMask();
            }
            else{
                // console.log("account already set");
                this.account = this.$route.params.account;
                this.web3 = this.$route.params.web3;
                this.connected = true;
                await this.getPrice();
                await this.getBalance();
            }
        }
        this.getPrice();
    },
    methods: {
        toggleMenu(){
            if(this.showMenu){
                if(this.showServant){this.showServant=false}
                if(this.showStations){this.showStations=false}
                if(this.showCommand){this.showCommand=false}
                if(this.showButton){this.showButton=false}
                this.showMenu = false
            }
            else{
                if(this.showServant){this.showServant=false}
                if(this.showStations){this.showStations=false}
                if(this.showCommand){this.showCommand=false}
                if(this.showButton){this.showButton=false}
                this.showMenu = true
            }
        },
        toggleButton(){
            if(this.showButton){
                if(this.showServant){this.showServant=false}
                if(this.showStations){this.showStations=false}
                if(this.showCommand){this.showCommand=false}
                if(this.showMenu){this.showMenu=false}
                this.showButton = false
            }
            else{
                if(this.showServant){this.showServant=false}
                if(this.showStations){this.showStations=false}
                if(this.showCommand){this.showCommand=false}
                if(this.showMenu){this.showMenu=false}
                this.showButton = true
            }
        },
        servant(){
            if(this.showServant){
                if(this.showStations){this.showStations=false}
                if(this.showCommand){this.showCommand=false}
                this.showServant = false
            }
            else{
                if(this.showStations){this.showStations=false}
                if(this.showCommand){this.showCommand=false}
                this.showServant = true
            }
        },
        stations(){
            if(this.showStations){
                if(this.showServant){this.showServant=false}
                if(this.showCommand){this.showCommand=false}
                this.showStations = false
            }
            else{
                if(this.showServant){this.showServant=false}
                if(this.showCommand){this.showCommand=false}
                this.showStations = true
            }
        },
        command(){
            if(this.showCommand){
                if(this.showServant){this.showServant=false}
                if(this.showStations){this.showStations=false}
                this.showCommand = false
            }
            else{
                if(this.showServant){this.showServant=false}
                if(this.showStations){this.showStations=false}
                this.showCommand = true
            }
        },
        webGL() {
           
            var init = () => {

                //camera
                this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
                this.camera.position.z = 5;

                //scene
                this.scene = new THREE.Scene();

                //renderer
                this.renderer = new THREE.WebGLRenderer({
                    alpha: true
                });
                this.renderer.setSize(window.innerWidth, window.innerHeight);
                document.body.prepend(this.renderer.domElement);
            }

            var addSphere = () => {
                for (var z = -1000; z < 1000; z += 20) {
                    var geometry = new THREE.SphereGeometry(0.5, 32, 32)
                    var material = new THREE.MeshBasicMaterial({
                        color: 0xffffff
                    });
                    var sphere = new THREE.Mesh(geometry, material)
                    sphere.position.x = Math.random() * 1000 - 500;
                    sphere.position.y = Math.random() * 1000 - 500;
                    sphere.position.z = z;
                    sphere.scale.x = sphere.scale.y = 2;
                    this.scene.add(sphere);
                    this.stars.push(sphere);
                }
            }

            var animateStars = () => {
                for (var i = 0; i < this.stars.length; i++) {
                    var star = this.stars[i];
                    star.position.z += i / 10;
                    if (star.position.z > 1000) star.position.z -= 2000;
                }
            }

            var render = () => {
                requestAnimationFrame(render);
                this.renderer.render(this.scene, this.camera);
                animateStars();
                
            }

            init();
            addSphere();
            render();
        },
        telegram(){
            window.open(
                'https://t.me/+FMsZhHS4oS02ODQx',
                '_blank' // <- This is what makes it open in a new window.
            );
            return;                       
            //location.href = "https://polygonscan.com/token/" + itm.address;
        },
        async MetaMask() {
           getWeb3()
                .then((result) => {
                    const web3 = result;// we instantiate our contract next
                    this.$route.params.web3 = web3;
                    this.web3 = web3;
                    web3.eth.getAccounts()
                    .then((accounts) => {
                        if(accounts.length > 0){
                            this.account = accounts[0];
                            this.$route.params.account = accounts[0];
                            this.connected = true;
                            this.masterChefContractInstance = new web3.eth.Contract(this.masterChefContractAbi, this.masterChefContractAddress);
                            this.getBalance();
                            // console.log(this.account);
                            this.messages = false;
                            // for( const itm of this.starSeed){
                            //     this.getUserPoolStats(itm);
                            // }
                        }else{
                            this.messages = "No account Connected"
                            console.log("no account connected")
                            setTimeout(d=>{
                                this.messages = false
                            },5000)
                        }                
                    })
                })
        },
        chart(){
            window.open(
                'https://www.dextools.io/app/polygon/pair-explorer/0xee334207453191f4594836dc6c4546dfc2bd08c5',
                '_blank' // <- This is what makes it open in a new window.
            );
        },
        async getPrice(){
            try{
                var price = await Functions.getPrice("0x8440178087C4fd348D43d0205F4574e0348a06F0",0);
                if(typeof price === "undefined"){
                    return;
                }
                else{
                    if(price =="no liquidity"){
                        this.currentStarPrice = (starStats.stats.starPrice).toFixed(4)
                    }
                    else{
                        this.currentStarPrice = price.toFixed(4);
                    }
                }
                //console.log("current star price:"+this.currentStarPrice);
            }catch(error){
                //console.log(error)
                this.currentStarPrice = (starStats.stats.starPrice).toFixed(4)
                console.log(error)
            }
        },
        async getBalance(){
            var starContractInstance = new this.web3.eth.Contract(this.starContractAbi, this.starContractAddress);
            try{
                starContractInstance.methods.balanceOf(this.account).call()
                .then (
                    (receipt) => {
                        this.balance = (receipt/10**18).toFixed(4);
                })
            }catch (error) {
                console.log(error);
                this.messages = "Get balance: " +error
                setTimeout(d=>{
                    this.messages = false
                },5000)
            }
        },
        async disconnect(){
            this.account = "Not Connected";
            this.$route.params.account = null;
            this.$route.params.web3 = null;
            this.web3 = null;
            this.connected = false;
            this.availStar="Connect Wallet";
            this.starHarvest="Connect Wallet";
            this.lpContractInstance = false;
            this.masterChefContractInstance = false;
        },
        
        onSubmit() {
            if (this.accepted) {
            // User has accepted the agreement
            // Set the userAgreementAccepted key in localStorage to true
            localStorage.setItem('userAgreementAccepted', 'true');
            // Close the modal
            this.showModal = false;
            }
        }
    }
}


// Function to show the user agreement dialog
function showUserAgreementDialog() {
  // Create the dialog element and add it to the page
  const dialog = document.createElement('div');
  dialog.innerHTML = `
    <div>
      <h2>User Agreement</h2>
      <p>Please review and accept our user agreement:</p>
      <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
      <button id="accept-button">Accept</button>
      <button id="cancel-button">Cancel</button>
    </div>
  `;
  document.body.appendChild(dialog);

  // Add event listeners to the accept and cancel buttons
  const acceptButton = document.getElementById('accept-button');
  const cancelButton = document.getElementById('cancel-button');
  acceptButton.addEventListener('click', function() {
    // Set the 'agreementAccepted' value in local storage to true
    localStorage.setItem('agreementAccepted', true);
    // Remove the dialog from the page
    document.body.removeChild(dialog);
  });
  cancelButton.addEventListener('click', function() {
    // Remove the dialog from the page
    document.body.removeChild(dialog);
  });
}
</script>