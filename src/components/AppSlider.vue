<template>
  <div class="text">
    <div class="subtitle">
      Подорож Hermossa почалася в 2014 році як модний бренд у Туреччині,
      унікальний у гармонії європейського сучасного дизайну з турецькою
      культурою.
    </div>
    <AppButton name="Дізнатись більше"/>
  </div>
  <carousel :items-to-show="1">
    <slide v-for="slide in 5" :key="slide">
      <div class="carousel__item">
        <img src="@/assets/slide1.png" alt=""/>
      </div>
    </slide>

    <template #addons>
      <navigation/>
      <pagination/>
    </template>
  </carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'

import {Carousel, Slide, Pagination, Navigation} from "vue3-carousel";
import AppButton from "@/components/AppButton.vue";
</script>

<style scoped lang="scss">
.text {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 14.8rem 0 3.5rem;

  .subtitle {
    width: 45%;
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

</style>
