<template>
  <div class="section">
    <h2 class="title">{{ title }}</h2>
    <AppButton v-if="button" :name="button.name"/>
  </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/AppButton.vue";

const props = defineProps<{
  title: string,
  button?: {
    name: string
  }
}>()
</script>

<style scoped lang="scss">
.section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 10rem 0 2.5rem;
  @media (max-width: 1170px) {
    margin-top: 5rem;
  }
  //@media (max-width: 768px) {
  //  margin-top: 8rem;
  //}

  .title {
    width: 49%;
    border-bottom: 2px solid #ffffff;
    font-size: 3rem;
    line-height: 56px;
    font-weight: 700;
    padding-bottom: 5px;
  }
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    .title{
      font-size: 2rem;
      line-height: 2.5rem;
      width: 100%;
    }
    button{
      position: absolute;
      bottom: -6rem;
      right: 0;
      width: max-content;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
