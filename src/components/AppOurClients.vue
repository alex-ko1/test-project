<template>
  <AppSectionTitle title="Наші клієнти" />
  <div class="subtitle">Більше 500 клієнтів по всій Україні</div>
  <div class="map">
    <img src="@/assets/map-Ukraine.png" alt="">
  </div>
</template>

<script setup>

import AppSectionTitle from "@/components/AppSectionTitle.vue";
</script>

<style scoped lang="scss">
.subtitle{
  margin-top: 2.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
}
.map{
  margin-top: 4.5rem;
  text-align: center;
  padding-bottom: 10rem;
  img{
    width: 100%;
  }
}
</style>
