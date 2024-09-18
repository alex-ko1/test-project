<template>
  <div class="wrapper">
    <AppSectionTitle title="Бренди" :button="{name:'Дивитися усі'}"/>
    <div class="brands">
      <div class="brand" v-for="(item,i) in 12" :key="i">
        <img src="@/assets/Hermossa.png" alt=""/>
      </div>
    </div>
    <carousel :items-to-show="1">
      <slide v-for="slide in 5" :key="slide">
        <div class="carousel__item">
          <img src="@/assets/slide2.png" alt=""/>
          <img src="@/assets/AZZARO.png" class="azzaro" alt="">
        </div>
      </slide>
      <template #addons>
        <pagination/>
      </template>
    </carousel>
  </div>
</template>

<script setup lang="ts">

import {Carousel, Pagination, Slide} from "vue3-carousel";
import AppButton from "@/components/AppButton.vue";
import AppSectionTitle from "@/components/AppSectionTitle.vue";
</script>

<style scoped lang="scss">
.wrapper {
  margin-top: 10rem;
}

.brands {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 1.5rem;
  margin-bottom: 5rem;

  .brand {
    width: 24%;
    border: 1px solid #525151;
    padding: 1.6rem 3rem;

    img {
      max-width: 100%;
    }
  }
}

.carousel__item .azzaro {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>
