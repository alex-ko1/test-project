<template>
  <AppHeader/>
  <main>
    <AppBanner/>
    <div class="container">
      <AppSlider/>
      <AppBrands/>
      <AppEvents/>
      <AppOurClients/>
    </div>
  </main>
  <AppFooter/>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppBanner from "@/components/AppBanner.vue";
import AppSlider from "@/components/AppSlider.vue";
import AppBrands from "@/components/AppBrands.vue";
import AppEvents from "@/components/AppEvents.vue";
import AppOurClients from "@/components/AppOurClients.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<style scoped lang="scss">
main {
  background-color: #272626;
  color: #fff;
  .container {
    margin: 0 auto;
    max-width: 1520px;
  }
}
</style>
