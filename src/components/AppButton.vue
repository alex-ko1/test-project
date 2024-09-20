<template>
  <button class="btn" :class="{'btn-painted':isPainted}">{{ name }}</button>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {type: String, required: true},
  isPainted: {type: Boolean, default: false},
})
</script>

<style scoped lang="scss">
.btn {
  font-size: 1rem;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  height: 3rem;
  padding: 0.75rem 1rem;
  letter-spacing: .5px;
  display: block;
  cursor: pointer;
  transition: .4s;

  &:hover {
    background-color: $white;
    color: $blackish;
  }
}

.btn-painted {
  color: $blackish;
  background-color: #fff;

  &:hover {
    background-color: transparent;
    color: $white;
  }
}
</style>
