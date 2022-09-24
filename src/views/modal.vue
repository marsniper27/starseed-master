<template>
    <div class ="modal__wrapper" className="modal__wrapper">
        <div className="modal">
          <slot/>
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