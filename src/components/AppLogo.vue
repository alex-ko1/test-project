<template>
  <a class="logo" href="#">
<!--    <img src="@/assets/logo.png" alt="Logo"/>-->
    <SiteLogo class="logo-svg"/>
  </a>
</template>
<script setup lang="ts">
import SiteLogo from '@/assets/icons/logo.svg';
</script>
<style scoped lang="scss">
.logo {
  margin-right: 4rem;
  max-width: 178px;
  display: flex;
  align-items: center;
  .logo-svg {
    width: 100%;
    height: min-content;
  }
  @media(max-width: 1600px) {
    margin-right: 2rem;
  }
  @media(max-width: 1600px) {
    //width: 22vw;
  }
}
</style>
