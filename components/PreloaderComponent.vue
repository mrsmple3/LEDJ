<template>
  <div class="preloader">
    <div id="preloader"></div>
  </div>
</template>

<script setup>
const websiteStore = useWebsiteStore();
</script>

<style lang="scss">
.preloader {
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 21;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  #preloader {
    height: 30px;
    width: 30px;
    margin: 40vh auto;
    border: 5px solid rgba(255, 51, 0, 0.3);
    border-top: 5px solid rgb(255, 51, 0);
    border-radius: 50%;
    animation: rotate 1s infinite linear;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
