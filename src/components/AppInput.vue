<template>
  <label :for="input.id">{{ input.label }}</label>
  <input :type="input.type" :class="input.class" :placeholder="input.placeholder" :id="input.id">
</template>
<script setup lang="ts">
export interface IInput {
  type: string,
  label: string,
  id: string,
  placeholder: string,
  class: string,
}

const props = defineProps<{
  input: IInput,
}>()
</script>
<style scoped lang="scss">
label {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
}

input {
  width: 100%;
  margin-top: .5rem;
  background: transparent;
  border: 1px solid #ADADAD;
  font-size: 1rem;
  padding: .75rem 0 .75rem 1rem;
  color: #ffffff;
}
</style>
