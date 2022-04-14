(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2892"],{"7eb0":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"main"}},[n("div",{staticClass:"content"},[n("h3",{staticClass:"account"},[t._v(" Connected Account "),n("span",{staticClass:"purple",attrs:{id:"account"}},[t._v(t._s(t.account))]),t.starAdded?t._e():n("button",{staticClass:"addStar",on:{click:function(e){return t.Functions.CustomToken()}}},[t._v("Add Stars to "),n("img",{attrs:{width:"30px",src:"../assets/metamask-fox.svg"}})]),t.connected?t._e():n("div",{staticClass:"connect"},[n("button",{staticClass:"connectWallet",on:{click:function(e){return t.metaMaskWallet()}}},[n("i",{staticClass:"fas fa-network-wired"}),t._v("Connect")])]),t.connected?n("div",{staticClass:"disconnect"},[n("button",{staticClass:"connectWallet",on:{click:function(e){return t.disconnect()}}},[n("i",{staticClass:"fas fa-network-wired"}),t._v("Disconnect")])]):t._e()]),n("h4",{staticClass:"heading center"},[t._v("Yield Farming")]),n("div",{staticClass:"cards"},[n("div",{staticClass:"container"},t._l(t.pools,(function(e){return n("div",{staticClass:"card",class:{larger:e.type}},[e.type?t._e():n("div",[n("div",{staticClass:"icon"},[n("img",{attrs:{src:e.img}}),t._v(" "+t._s(e.name)+" ")]),n("div",{staticClass:"grid"},[n("div",{staticClass:"label"},[t._v(" APR : ")]),n("div",{staticClass:"cont"},[t._v(" "+t._s(e.apr)+"% ")])]),t._m(0,!0),n("div",{staticClass:"grid"},[n("div",{staticClass:"label large-text"},[t._v(" Deposit Fee : ")]),n("div",{staticClass:"cont  large-text"},[t._v(" "+t._s(e.depositFee)+" ")])]),n("div",{staticClass:"grid"},[n("div",{staticClass:"label colored"},[t._v(" STAR EARNED: ")]),n("div",{staticClass:"cont"},[n("div",{staticClass:"label colored"},[t._v(" "+t._s((+e.starEarned).toFixed(4))+" ")]),t.connected&&e.starEarned>0?n("button",{on:{click:function(n){return t.compoundReward(e)}}},[t._v("Compound")]):t._e(),t.connected&&e.starEarned>0?n("button",{on:{click:function(n){return t.harvest(e)}}},[t._v("Harvest")]):t._e()])]),n("div",{staticClass:"grid"},[n("div",{staticClass:"label colored"},[t._v(" TOTAL TOKENS STAKED: ")]),n("div",{staticClass:"cont  large-text"},[t._v(" "+t._s(e.stakedBalance)+" ")])]),t.connected?n("div",{staticClass:"grid"},[n("div",{staticClass:"label large-text"},[t._v(" Token Balance ")]),n("div",{staticClass:"cont  large-text"},[t._v(" "+t._s((+e.balance).toFixed(4))+" ")])]):t._e(),t.connected?t._e():n("button",{on:{click:function(e){return t.metaMaskWallet()}}},[t._v("Unlock Wallet")]),e.balance>0?n("div",[n("div",{staticClass:"grid"},[n("div",{staticClass:"label colored"},[t.connected?n("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"matic.amount"}],attrs:{placeholder:"Amount to stake"},domProps:{value:e.amount},on:{input:function(n){n.target.composing||t.$set(e,"amount",n.target.value)}}}):t._e(),n("div",{staticClass:"cont sm-text"},[t.connected?n("button",{on:{click:function(t){e.amount=(e.balance-4/Math.pow(10,e.decimals-4)).toFixed(e.decimals)}}},[t._v("MAX")]):t._e()])])]),t.connected?n("button",{on:{click:function(n){return t.confirm(e)}}},[t._v("Stake")]):t._e()]):t._e(),e.stakedBalance>0?n("div",[n("div",{staticClass:"grid"},[n("div",{staticClass:"label colored"},[t.connected?n("input",{directives:[{name:"model",rawName:"v-model",value:e.withdrawAmount,expression:"matic.withdrawAmount"}],attrs:{placeholder:"Amount to withdraw"},domProps:{value:e.withdrawAmount},on:{input:function(n){n.target.composing||t.$set(e,"withdrawAmount",n.target.value)}}}):t._e(),n("div",{staticClass:"cont sm-text"},[t.connected?n("button",{on:{click:function(t){e.withdrawAmount=e.stakedBalance}}},[t._v("MAX")]):t._e()])])]),t.connected?n("button",{on:{click:function(n){return t.Functions.withdraw(e,t.web3,t.account)}}},[t._v("Withdraw")]):t._e()]):t._e(),n("hr"),e.show?t._e():n("button",{staticClass:"btn-sm",on:{click:function(t){e.show=!0}}},[t._v("Details")]),e.show?n("button",{staticClass:"btn-sm",on:{click:function(t){e.show=!1}}},[t._v("Hide Details")]):t._e(),e.show?n("div",{staticClass:"info"},[n("div",{staticClass:"grid"}),n("div",{staticClass:"grid"},[n("div",{staticClass:"label colored"},[t._v(" Total Liquidity: "+t._s(e.totalLiquidity)+" ")])]),n("div",{staticClass:"grid"},[n("div",{staticClass:"label colored"},[n("div",{staticClass:"cont sm-text"},[t._v(" Get LP tokens from quickswap. "),n("button",{on:{click:function(n){return t.getLp(e)}}},[t._v("Get LP Tokens")])]),n("div",{staticClass:"cont sm-text"},[n("button",{on:{click:function(n){return t.viewExplorer(e)}}},[t._v("View on Matic Explorer")])])])]),e.stakedBalance>0?n("div",{staticClass:"grid"},[n("div",{staticClass:"label colored"},[n("div",{staticClass:"cont sm-text"},[t._v(" Emergency withdraw unstakes your tokens immediatly and you lose any pending reward. Only use for emergency recovery of tokens. "),t.connected?n("button",{on:{click:function(n){return t.Functions.emergencyWithdraw(e,t.web3,t.account)}}},[t._v("Emergency withdraw")]):t._e()])])]):t._e()]):t._e()]),e.type?n("div",{staticStyle:{width:"100%",height:"100%"},domProps:{innerHTML:t._s(e.url)}}):t._e()])})),0)])]),t.showPops?n("div",{staticClass:"pops"},[t._m(1),n("ul",{staticClass:"cont"},[n("li",{on:{click:function(e){return t.metaMaskWallet()}}},[n("h4",[t._v("MetaMask")]),n("svg",{staticClass:"sc-bdfBwQ exWFUV",attrs:{viewBox:"0 0 96 96",width:"32px",color:"text",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"48",cy:"48",r:"48",fill:"white"}}),n("path",{attrs:{d:"M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z",fill:"#E17726"}}),n("path",{attrs:{d:"M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z",fill:"#E27625"}}),n("path",{attrs:{d:"M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z",fill:"#E27625"}}),n("path",{attrs:{d:"M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z",fill:"#E27625"}}),n("path",{attrs:{d:"M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z",fill:"#E27625"}}),n("path",{attrs:{d:"M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z",fill:"#E27625"}}),n("path",{attrs:{d:"M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z",fill:"#E27625"}}),n("path",{attrs:{d:"M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z",fill:"#E27625"}}),n("path",{attrs:{d:"M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z",fill:"#D5BFB2"}}),n("path",{attrs:{d:"M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z",fill:"#D5BFB2"}}),n("path",{attrs:{d:"M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z",fill:"#233447"}}),n("path",{attrs:{d:"M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z",fill:"#233447"}}),n("path",{attrs:{d:"M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z",fill:"#CC6228"}}),n("path",{attrs:{d:"M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z",fill:"#CC6228"}}),n("path",{attrs:{d:"M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z",fill:"#CC6228"}}),n("path",{attrs:{d:"M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z",fill:"#CC6228"}}),n("path",{attrs:{d:"M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z",fill:"#E27525"}}),n("path",{attrs:{d:"M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z",fill:"#E27525"}}),n("path",{attrs:{d:"M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z",fill:"#E27525"}}),n("path",{attrs:{d:"M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z",fill:"#E27525"}}),n("path",{attrs:{d:"M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z",fill:"#F5841F"}}),n("path",{attrs:{d:"M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z",fill:"#F5841F"}}),n("path",{attrs:{d:"M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z",fill:"#C0AC9D"}}),n("path",{attrs:{d:"M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z",fill:"#161616"}}),n("path",{attrs:{d:"M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z",fill:"#763E1A"}}),n("path",{attrs:{d:"M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z",fill:"#763E1A"}}),n("path",{attrs:{d:"M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z",fill:"#F5841F"}}),n("path",{attrs:{d:"M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z",fill:"#F5841F"}}),n("path",{attrs:{d:"M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z",fill:"#F5841F"}})])]),n("li",{on:{click:function(e){return t.trustWallet()}}},[n("h4",[t._v("TrustWallet")]),n("svg",{staticClass:"sc-bdfBwQ exWFUV",attrs:{viewBox:"0 0 96 96",width:"32px",color:"text",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{attrs:{"clip-path":"url(#clip0)"}},[n("path",{attrs:{d:"M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z",fill:"#3375BB"}}),n("path",{attrs:{d:"M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z",fill:"white"}})]),n("defs",[n("clipPath",{attrs:{id:"clip0"}},[n("rect",{attrs:{width:"96",height:"96",fill:"white"}})])])])])])]):t._e(),t.messages?n("div",{staticClass:"messages"},[n("h4",[t._v(t._s(t.messages))])]):t._e()])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},[n("div",{staticClass:"label"},[t._v(" Earn : ")]),n("div",{staticClass:"cont"},[t._v(" STAR ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head"},[n("h6",[t._v("Connect to a wallet")]),n("i",{staticClass:"fa fa-close"})])}],i=n("b85c"),r=n("1da1"),o=(n("4795"),n("0d03"),n("b0c0"),n("d3b7"),n("e9c4"),n("4160"),n("159b"),n("99af"),n("96cf"),n("5826")),u=n("c030"),c=n("9326"),l=n("076e"),p=n("1673"),d=n("d0f7"),m=(n("3e8f"),{components:{},data:function(){return{Functions:c,pools:p.tokenPools,starAdded:!1,connected:!1,web3:!1,account:"Not Connected",selectedABI:!1,selectedContractAddress:!1,selectedPid:!1,showPops:!1,showStake:!1,showModal:!1,messages:!1,starEarned:"connect wallet",lpContractInstance:!1,masterChefContractAbi:[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"caller",type:"address"},{indexed:!1,internalType:"uint256",name:"previousAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newAmount",type:"uint256"}],name:"BonusMupltiplier",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"pid",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"pid",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"EmergencyWithdraw",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"caller",type:"address"},{indexed:!1,internalType:"uint256",name:"previousAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newAmount",type:"uint256"}],name:"EmissionRateUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"caller",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"totalBalance",type:"uint256"}],name:"Funded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOperator",type:"address"},{indexed:!0,internalType:"address",name:"newOperator",type:"address"}],name:"OperatorTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"pid",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amountLockedUp",type:"uint256"}],name:"RewardLockedUp",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"pid",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Withdraw",type:"event"},{inputs:[],name:"BONUS_MULTIPLIER",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAXIMUM_DEPOSIT_FEE_RATE",outputs:[{internalType:"uint16",name:"",type:"uint16"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAXIMUM_HARVEST_INTERVAL",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_STAR_PER_BLOCK",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_allocPoint",type:"uint256"},{internalType:"contract IERC20",name:"_lpToken",type:"address"},{internalType:"uint16",name:"_depositFeeBP",type:"uint16"},{internalType:"uint256",name:"_harvestInterval",type:"uint256"},{internalType:"bool",name:"_withUpdate",type:"bool"}],name:"add",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"},{internalType:"address",name:"_user",type:"address"}],name:"canHarvest",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"}],name:"collectFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"}],name:"compound",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"deposit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"devAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"}],name:"emergencyWithdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"fundMasterChef",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"}],name:"getDepositFees",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_from",type:"uint256"},{internalType:"uint256",name:"_to",type:"uint256"}],name:"getMultiplier",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"}],name:"harvestStar",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"massUpdatePools",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"operator",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"},{internalType:"address",name:"_user",type:"address"}],name:"pendingStar",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"poolInfo",outputs:[{internalType:"contract IERC20",name:"lpToken",type:"address"},{internalType:"uint256",name:"allocPoint",type:"uint256"},{internalType:"uint256",name:"lastRewardBlock",type:"uint256"},{internalType:"uint256",name:"accStarPerShare",type:"uint256"},{internalType:"uint16",name:"depositFeeBP",type:"uint16"},{internalType:"uint256",name:"harvestInterval",type:"uint256"},{internalType:"uint256",name:"totalLp",type:"uint256"},{internalType:"uint256",name:"depositFees",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"poolLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"remainingRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"},{internalType:"uint256",name:"_allocPoint",type:"uint256"},{internalType:"uint16",name:"_depositFeeBP",type:"uint16"},{internalType:"uint256",name:"_harvestInterval",type:"uint256"},{internalType:"bool",name:"_withUpdate",type:"bool"}],name:"set",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_devAddress",type:"address"}],name:"setDevAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"}],name:"setStarId",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_address",type:"address"}],name:"setstarContractAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"star",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"starPerBlock",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"startBlock",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"startFarming",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalAllocPoint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalAllocation",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalLockedUpRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalStarInPools",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOperator",type:"address"}],name:"transferOperator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"},{internalType:"uint256",name:"_allocPoint",type:"uint256"},{internalType:"bool",name:"_withUpdate",type:"bool"}],name:"updateAllocPoint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_bonus",type:"uint256"}],name:"updateBonus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_starPerBlock",type:"uint256"}],name:"updateEmissionRate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"}],name:"updatePool",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"address",name:"",type:"address"}],name:"userInfo",outputs:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"rewardDebt",type:"uint256"},{internalType:"uint256",name:"rewardLockedUp",type:"uint256"},{internalType:"uint256",name:"nextHarvestUntil",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],masterChefContractAddress:"0x16E76500f1E6C943FEd150bF56403d91A91dCD55",masterChefContractInstance:!1,totalAllocation:null,dailyEmission:182.9059829,starPrice:11}},watch:{$route:{handler:function(t,e){}}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.readBackup();case 2:if("undefined"===typeof window.ethereum){e.next=32;break}if(console.log("MetaMask is installed!"),null!=t.$route.params.web3&&null!=t.$route.params.account){e.next=14;break}return console.log("account not set pool"),e.next=8,Object(l["initMasterchef"])();case 8:return e.next=10,t.metaMaskWallet();case 10:return e.next=12,t.updateBackup();case 12:e.next=30;break;case 14:return t.messages="Loading user Details",console.log("account already set pool"),t.account=t.$route.params.account,t.web3=t.$route.params.web3,e.next=20,Object(l["initMasterchef"])();case 20:return t.masterChefContractInstance=new t.web3.eth.Contract(t.masterChefContractAbi,t.masterChefContractAddress),t.connected=!0,n=new t.web3.eth.getChainId,137!=n&&c["setChain"](),e.next=27,c["getUserPoolStats"](t.pools,t.web3,t.account);case 27:return t.messages=!1,e.next=30,t.updateBackup();case 30:e.next=33;break;case 32:confirm("Would you like to get MetaMask?")&&c["getMetamask"]();case 33:case"end":return e.stop()}}),e)})))()},methods:{pops:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.address&&(e.selectedABI=t.ABI,e.selectedContractAddress=t.address,e.showPops=!0);case 1:case"end":return n.stop()}}),n)})))()},metaMaskWallet:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.showPops=!1,Object(o["a"])().then((function(e){t.messages=" Pending...";var n=e;t.web3=n,t.masterChefContractInstance=new t.web3.eth.Contract(t.masterChefContractAbi,t.masterChefContractAddress),t.$route.params.web3=n;var a=new n.eth.getChainId;137!=a&&c["setChain"](),n.eth.getAccounts().then((function(e){e.length>0?(t.account=e[0],t.$route.params.account=e[0],t.connected=!0,t.messages=!1,t.messages="Loading user Details",c["getUserPoolStats"](t.pools,t.web3,t.account),setTimeout((function(e){t.messages=!1}),1e3)):(t.messages="No account Connected",console.log("no account connected"),setTimeout((function(e){t.messages=!1}),3e3))}))}));case 2:case"end":return e.stop()}}),e)})))()},trustWallet:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a,s,i,r,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showPops=!1,e.next=3,ethereum.request({method:"eth_requestAccounts"});case 3:n=e.sent,console.log(n),t.account=n[0],a=new WalletConnectProvider({host:"https://rpc-mumbai.matic.today",callbacks:{onConnect:console.log("connected"),onDisconnect:console.log("disconnected!")}}),new WalletConnectProvider({host:"https://ropsten.infura.io/v3/70645f042c3a409599c60f96f6dd9fbc",callbacks:{onConnect:console.log("connected"),onDisconnect:console.log("disconnected")}}),s=new Web3(a),i=t.selectedABI,r=t.selectedContractAddress,o=new s.eth.Contract(i,r),u={from:t.account,to:r,gas:8e5,data:o.methods.balanceOf(t.account).encodeABI()},s.eth.signTransaction(u).then((function(t){s.eth.sendSignedTransaction(t).then((function(t){return console.log(t)}))}));case 14:case"end":return e.stop()}}),e)})))()},CustomToken:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a,s,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.MetaMask();case 2:return e.sent,n="0x8440178087C4fd348D43d0205F4574e0348a06F0",a="STAR",s=18,i="https://upwork-usw2-prod-file-storage-wp1.s3.us-west-2.amazonaws.com/workplace/attachment/fa082a5b2e94bf1e76ca0f9b5fc23411?response-content-disposition=inline%3B%20filename%3D%22Starseed-Dimension1.jpg%22%3B%20filename%2A%3Dutf-8%27%27Starseed-Dimension1.jpg&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIGw2APTHGT%2BDzrP4FrawkgDvU5hD%2Fr2hbDHPVM074KpkAiEAw3sFP5RDbQn1YefTCH8FISnhl724N4UQ0KBQPmIKouAq1gQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3Mzk5MzkxNzM4MTkiDAImma6YwmGQI3Wu3SqqBIuFEDzBiTY5AOjndBtNhTUDamknRsuB4AX8IDsrm6bMNu8sVHOhQFMJ7UiFK155cMYs%2FM6IfhxFJUqzZuAZsks4dLdKMe%2FVpe10XlmbulaYyJXKY577ULBsuhh56ba3Jx4UVWydotee0NMbjZOb%2FBuHXlogYtBvmk258j8mqjuVVxsgdo8slUfw85os%2Bzmk7%2F%2B3onTI2vl2BdTmI3oD1cpCz334mNvsxMLsAwTSl8f2A7L12W3MWuNAQtvNh%2By7Q5LSPn9cyqb1raUIoF2jS%2FRvH%2BaulGp2bhn733qJGqzwUNLYmi9pQyVnpJg66V5dPjF1t168QLbbSjEx9t7fp%2FWidZK08yL0%2FAy1doNH2FzNkPKmrhmiPAYqoohEgLlIeBqACzy70MLA9YJcsL%2Fe5Xh%2F7tkmYUdPk%2BtfKbMVo9fOxsibrmYaZ0vOr%2F5VdpckU%2FW%2FE2VUS%2BJwi21h%2Bee7UXXSsdSQBIBisOPhRj4dEn6skev41s49kmtHgsQvzCNvCzMc4kAteI87c7WnUb9CQjDVPxgpcMuLrR8xzh9Hd1PpOhB5aObvxaWJpCiAbDt8NgpcxUNWAr0HTxHmCRNV4iRz4GxwODTx9OHTv8xpkWsOlBMGw0%2BKgwZ9KKD1BvFu%2BsktKg2pLg3lkU0Er0%2FZe1fo%2Bs2STOPpoax8%2BlXU1w11R5XaC34KnJW0zz%2BUx6twfOy%2F7cFI4CF1Qsj%2BVD0%2BhLjJYu0%2BTKFJFo3SMNPp04oGOqcB%2Bg0mDvadqMC65u%2FMo3EWEkRwlPAByx8QTbIbNLPzVOcY5lqCEVhQVBYoXs2%2FbsNhKdUH3y5FjRewUPsk0grVBvanllaDyu6wHbCWcjcclKm8TmSKCOFFqCszfbqOU6nvOhnTL6sawLSx7f%2FGQI1FuYgqJIBTnuujPxGYrmq55XnVg%2Fdi30ijaSDj9VhpHqwukthXwNAlUUQnTsFvqzwOdkG6G2JvNSQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210930T001840Z&X-Amz-SignedHeaders=host&X-Amz-Expires=599&X-Amz-Credential=ASIA2YR6PYW54ATYNRN4%2F20210930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=b071723508914fffe021f4069504334a80e996e73e3079cc6b01ea48879aa57a",e.prev=7,e.next=10,ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:n,symbol:a,decimals:s,image:i}}});case 10:r=e.sent,r?console.log("Thanks for your interest!"):console.log("Your loss!"),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](7),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})))()},StakeLP:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,c["StakeLP"](t,e.web3,e.account);case 2:c["getUserPoolStats"](e.pools,e.web3,e.account);case 3:case"end":return n.stop()}}),n)})))()},compoundReward:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(t.starEarned>0)){n.next=27;break}return n.prev=1,n.next=4,c["compoundReward"](t,e.web3,e.account);case 4:a=n.sent,n.t0=a[0],n.next=0===n.t0?8:1===n.t0?11:2===n.t0?14:3===n.t0?17:20;break;case 8:return e.messages="Compound not available until: "+a[1].message,setTimeout((function(t){e.messages=!1}),5e3),n.abrupt("break",20);case 11:return e.messages="Compound rewards error: "+a[1].message,setTimeout((function(t){e.messages=!1}),5e3),n.abrupt("break",20);case 14:return e.messages="EIP-1559: "+a[1].message,setTimeout((function(t){e.messages=!1}),5e3),n.abrupt("break",20);case 17:return e.messages="Compound can harvest error: "+a[1].message,setTimeout((function(t){e.messages=!1}),5e3),n.abrupt("break",20);case 20:n.next=27;break;case 22:n.prev=22,n.t1=n["catch"](1),e.messages="Compound failed: "+n.t1.message,setTimeout((function(t){e.messages=!1}),5e3),console.log("first compound can harvest error: "+n.t1.message);case 27:case"end":return n.stop()}}),n,null,[[1,22]])})))()},harvest:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(t.starEarned>0)){n.next=20;break}return n.prev=1,n.next=4,e.masterChefContractInstance.methods.canHarvest(t.pid,e.account).call();case 4:if(a=n.sent,a){n.next=13;break}return n.next=8,e.masterChefContractInstance.methods.userInfo(t.pid,e.account).call();case 8:s=n.sent,i=new Date(1e3*s.nextHarvestUntil),console.log("next harvest time: "+i),e.messages="Harvest not available until: "+i,setTimeout((function(t){e.messages=!1}),5e3);case 13:console.log("can harvest: "+a),a&&c["harvest"](t,e.web3,e.account),n.next=20;break;case 17:n.prev=17,n.t0=n["catch"](1),console.log("can harvest error: "+n.t0);case 20:case"end":return n.stop()}}),n,null,[[1,17]])})))()},getBalance:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.lpContractInstance=new e.web3.eth.Contract(t.ABI,t.address),n.prev=1,n.next=4,e.lpContractInstance.methods.totalSupply().call();case 4:a=n.sent,void 0==a&&(a=0),t.supply=a,n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),console.log("get totalsupply error: "+n.t0);case 12:return n.prev=12,n.next=15,e.lpContractInstance.methods.balanceOf(e.account).call();case 15:return a=n.sent,console.log(t.name+" get balance: "+a),void 0==a&&(a=0),n.abrupt("return",u["a"].utils.formatUnits(a,t.decimals));case 21:n.prev=21,n.t1=n["catch"](12),console.log("get balance error: "+n.t1);case 24:e.lpContractInstance=null;case 25:case"end":return n.stop()}}),n,null,[[1,9],[12,21]])})))()},disconnect:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.account="Not Connected",t.$route.params.account=null,t.$route.params.web3=null,t.web3=null,t.connected=!1,t.availStar="Connect Wallet",t.starHarvest="Connect Wallet",t.lpContractInstance=!1,t.masterChefContractInstance=!1;case 9:case"end":return e.stop()}}),e)})))()},getTotalAllocation:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.masterChefContractInstance.methods.totalAllocation().call();case 3:n=e.sent,console.log("master total allocation: "+n),t.totalAllocation=n,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("get master total allocation  error: "+e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getLp:function(t){window.open(t.pool,"_blank")},viewExplorer:function(t){window.open("https://polygonscan.com/token/"+t.address,"_blank")},sleep:function(t){return new Promise((function(e){setTimeout(e,t)}))},confirm:function(t){null!=t.amount&&this.StakeLP(t)},updateBackup:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,a,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=[],n=Object(i["a"])(p.tokenPools);try{for(n.s();!(a=n.n()).done;)s=a.value,e.push({apr:s.apr,stakedTokens:s.totalLiquidity})}catch(o){n.e(o)}finally{n.f()}return r=JSON.stringify(e),t.next=6,d.streamUpload({apiKey:Object({NODE_ENV:"production",BASE_URL:""}).API_key,apiSecret:Object({NODE_ENV:"production",BASE_URL:""}).API_secret,key:"StarSeeds/PoolBackup.json",stream:r});case 6:t.sent,console.log("Updated Backup");case 8:case"end":return t.stop()}}),t)})))()},readBackup:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a,s,r,o,u,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.get({apiKey:Object({NODE_ENV:"production",BASE_URL:""}).API_key,apiSecret:Object({NODE_ENV:"production",BASE_URL:""}).API_secret,key:"StarSeeds/PoolBackup.json",getOptions:["data"]});case 2:n=e.sent,a=n.data,s="",a.forEach((function(t){return s=s.concat(String.fromCharCode(t))})),a=JSON.parse(s),r=0,o=Object(i["a"])(t.pools);try{for(o.s();!(u=o.n()).done;)c=u.value,c.apr=a[r].apr,c.totalLiquidity=a[r].stakedTokens,r++}catch(l){o.e(l)}finally{o.f()}console.log("Loaded Backup");case 11:case"end":return e.stop()}}),e)})))()}}}),y=m,f=n("2877"),v=Object(f["a"])(y,a,s,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0e2892.47fb1410.js.map