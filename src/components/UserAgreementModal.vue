<template>
  <div v-if="showModal" class ="modal__wrapper" className="modal__wrapper">
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
        <H4>License Agreement</H4>
        <button @click="openAgreement()">Agreement</button>
        <form @submit.prevent="onSubmit">
          <label>
            <input type="checkbox" v-model="accepted"> I accept the terms and conditions
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
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


<script>
export default {
  name:'userAgreementModal',
  data() {
    return {
      showModal: false,
      accepted: false
    }
  },
  methods: {
    onSubmit() {
      if (this.accepted) {
        // User has accepted the agreement
        // Set the userAgreementAccepted key in localStorage to true
        localStorage.setItem('userAgreementAccepted', 'true');
        // Close the modal
        this.showModal = false;
        this.$parent.userAgreementAccepted = true;
      }
    }
    
  }
}
function openAgreement(){
      window.open('https://storageapi.fleek.one/aeb85deb-410a-4c50-8834-96486196b392-bucket/StarSeeds/Starseeds%20Membership%20Agreement-1.pdf','_blank');
    }
</script>