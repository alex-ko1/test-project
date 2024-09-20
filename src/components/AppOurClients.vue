<template>
  <AppSectionTitle title="Наші клієнти"/>
  <div class="subtitle">Більше 500 клієнтів по всій Україні</div>
  <div class="map">
    <img src="@/assets/images/map-Ukraine.png" alt="">
  </div>
</template>

<script setup>

import AppSectionTitle from "@/components/AppSectionTitle.vue";
</script>

<style scoped lang="scss">
.subtitle {
  margin-top: 2.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
    margin-top: 1.5rem;
  }
}

.map {
  margin-top: 4.5rem;
  text-align: center;
  padding-bottom: 10rem;
  @media (max-width: 1170px) {
    padding-bottom: 5rem;
  }

  img {
    width: 100%;
  }
}
</style>
