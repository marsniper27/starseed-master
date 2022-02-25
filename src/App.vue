<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>




<script>

import axios from 'axios'
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  },
  data(){
    return{
      
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
  },
  created(){    
  }
}
</script>
