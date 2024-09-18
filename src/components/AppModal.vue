<template>
  <Transition>
    <div class="modal-window-wrapper" v-show="props.show" @click="closeDialog">
      <div class="modal-window" @click.stop>
        <button class="close-modal-window" @click="closeDialog">&times;</button>
        <h2 class="title">{{ title }}</h2>
        <div v-if="subtitle" class="subtitle">{{ subtitle }}</div>
        <form :class="{'form-registration' : inputs.length>2}">
          <div class="input-wrapper" v-for="(input,i) in inputs" :key="i">
            <AppInput :input="input"/>
          </div>
          <span v-if="name === 'signIn'" class="forgot-password"><a href="#">Забули пароль?</a></span>
          <AppButton name="Відправити" is-painted/>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">

import AppButton from "@/components/AppButton.vue";
import AppInput, {type Input} from "@/components/AppInput.vue";

const props = defineProps<{
  title: string,
  subtitle?: string,
  show: boolean,
  inputs: Input[]
  name: string
}>()
const emit = defineEmits(['closeDialog'])

const closeDialog = (event: any) => {
  emit("closeDialog", event);
}

</script>

<style scoped lang="scss">
.v-enter-active {
  opacity: 1;
  transition: 0.4s;
}

.v-leave-active {
  opacity: 1;
  transition: 0.3s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.modal-window-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 5;
  cursor: auto;

  .modal-window {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    color: #ffffff;
    background-color: #323131;
    padding: 2.5rem;
    border-radius: 5px;
    box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
    z-index: 10;

    .close-modal-window {
      position: absolute;
      top: 0.5rem;
      right: 2rem;
      font-size: 3rem;
      font-family: system-ui;
      font-weight: 100;
      color: #ffffff;
      cursor: pointer;
      border: none;
      background: none;
    }

    .title {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 3rem;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
    }

    form {
      margin-top: 2.5rem;

      .input-wrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;
      }
      &.form-registration{
        .input-wrapper:nth-child(-n+4) {
          display: inline-block;
          width: 48%;

          &:nth-child(odd) {
            margin-right: 4%;
          }

          & > * {
            display: block;
          }
        }
      }
      .forgot-password{
        font-size: 1rem;
        font-weight: 500;
        text-decoration: underline;
      }
      button {
        margin-top: 1rem;
        margin-left: auto;
      }
    }
  }
}
</style>
