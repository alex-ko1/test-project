<template>
  <button class="btn" :class="{'btn-painted':isPainted,'down-arrow':isArrow}"><ArrowDownIcon v-if="isArrow"/> {{ name }}</button>
</template>

<script setup lang="ts">
import ArrowDownIcon from '@/assets/icons/down-arrow.svg'

const props = defineProps({
  name: {type: String, required: true},
  isPainted: {type: Boolean, default: false},
  isArrow: {type: Boolean, default: false}
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
  &.down-arrow{
    display: flex;
    gap: 5px;
    align-items: center;
    border-radius: 3px;
    padding: 1rem;
    background-color: #52515150;
    border: none;
    &:hover {
      //background-color: transparent;
      color: $white;
    }
    svg{
      fill: $white;
      width: 1rem;
      height: auto;
      transition: transform .4s;
    }
    //&:focus {
    //  background-color: $white;
    //  color: $blackish;
    //  svg{
    //    fill: $blackish;
    //    transform: rotate(180deg);
    //  }
    //}
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
