<template>
  <div id="app">
    <UserAgreementModal ref="userAgreementModal"/>
    <Header ref="header" v-if="userAgreementAccepted"/>
    <router-view v-if="userAgreementAccepted" />
  </div>
</template>

<script>

import axios from 'axios'
import Header from '@/components/Header.vue'
import UserAgreementModal from '@/components/UserAgreementModal.vue';


export default {
  name: 'Home',
  components: {
    Header,
    UserAgreementModal,
  },
  data(){
    return{
      userAgreementAccepted: false,
      // showModal: false
    }
  },
  watch: {
   '$route' (to, from){
    
    }
  },
  methods:{
    init(){
    }
  },
  mounted(){
      // Check if user has accepted the agreement before
    const userAgreementAccepted = localStorage.getItem('userAgreementAccepted');
    if (userAgreementAccepted !== 'true') {
      // Show the modal
      this.userAgreementAccepted = false;  
      console.log(this.$refs)
      this.$refs.userAgreementModal.showModal = true;
    } else {
        this.userAgreementAccepted = true;  
    }
  },
  created(){    
    
  }
}
</script>
