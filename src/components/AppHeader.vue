<template>
  <header>
    <div class="container">
      <div class="header__links">
        <AppLogo/>
        <AppNavLinks/>
        <div class="soc-links">
          <a v-for="(link,i) in socialLinks" :key="i" :href="link.url">
            <span class="label">{{link.name}}</span>
            <font-awesome-icon :icon="['fab', link.name]"/>
          </a>
        </div>
        <div class="header-buttons">
          <AppButton name="Зареєструватися" is-painted @click="showDialog('signUp')"/>
          <AppButton name="Увійти" @click="showDialog('signIn')"/>
        </div>
      </div>
    </div>
    <AppModal subtitle="Будь ласка, заповніть усі поля" title="Заявка нового клієнта" @close-dialog="closeDialog"
              :show="isShow && dialogName==='signUp'" :inputs="signUp" :name="dialogName"/>
    <AppModal title="Увійти" @close-dialog="closeDialog" :show="isShow && dialogName === 'signIn'" :inputs="signIn"
              :name="dialogName"/>
  </header>
</template>

<script setup lang="ts">
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fas} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTelegram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import AppButton from "@/components/AppButton.vue";
import AppNavLinks from "@/components/AppNavLinks.vue";
import AppLogo from "@/components/AppLogo.vue";
import AppModal from "@/components/AppModal.vue";
import {type Ref, ref} from "vue";
import type {IInput} from "@/components/AppInput.vue";

library.add(fas, faFacebook, faTelegram, faWhatsapp)

const socialLinks: { name: string, url: string }[] = [
  {
    name: 'facebook', url: '#',
  }, {
    name: 'telegram', url: '#',
  },
  {
    name: 'whatsapp', url: '#',
  },
]
const isShow: Ref<boolean> = ref(false)
const dialogName: Ref<string> = ref('')
const showDialog = (name: string) => {
  isShow.value = !isShow.value;
  dialogName.value = name;
}
const closeDialog = () => {
  isShow.value = false;
  dialogName.value = '';
}

const signUp: Ref<IInput[]> = ref([
  {
    type: 'text',
    label: 'Ім\'я',
    id: 'name',
    placeholder: 'Ім\'я',
    class: 'name',
  },
  {
    type: 'text',
    label: 'Прізвище',
    id: 'surname',
    placeholder: 'Прізвище',
    class: 'surname',
  },
  {
    type: 'text',
    label: 'Поштова адреса',
    id: 'post-address',
    placeholder: 'Поштова адреса',
    class: 'post-address',
  },
  {
    type: 'text',
    label: 'Номер телефону',
    id: 'number',
    placeholder: 'Номер телефону',
    class: 'number',
  },
  {
    type: 'text',
    label: 'Назва компанії',
    id: 'company-name',
    placeholder: 'Назва компанії',
    class: 'company-name',
  },
  {
    type: 'text',
    label: 'Місто',
    id: 'city',
    placeholder: 'Місто',
    class: 'city',
  },
  {
    type: 'text',
    label: 'Адреса',
    id: 'address',
    placeholder: 'Адреса',
    class: 'address',
  },

])

const signIn: Ref<IInput[]> = ref([
  {
    type: 'text',
    label: 'Ім\'я користувача',
    id: 'name',
    placeholder: 'Ім\'я користувача',
    class: 'name',
  },
  {
    type: 'password',
    label: 'Пароль',
    id: 'password',
    placeholder: 'Пароль',
    class: 'password',
  },

])
</script>

<style scoped lang="scss">
header {
  background-color: #272626;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  .container {
    padding: 22px 0;
    margin: 0 auto;
    max-width: 1520px;

    .header__links {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        display: block;
        margin-right: 4rem;

        img {
          width: 178px;
        }
      }

      .soc-links {
        margin-left: 3rem;
        display: flex;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #272626;
          background-color: #fff;
          font-size: 1.5rem;
          border-radius: 100%;
          width: 40px;
          height: 40px;
          text-align: center;
          position: relative;

          &:not(:last-of-type) {
            margin-right: 1rem;
          }
          .label{
            opacity: 0;
            transition: .3s;
            color: #ffffff;
            font-size: 1rem;
            font-weight: 300;
            padding: .5rem 1rem;
            border-radius: 20px;
            background-color: #323131;
            position: absolute;
            top: 50px;
          }
          &:hover .label{
            opacity: 1;
          }
        }
      }

      .header-buttons {
        display: flex;
        gap: 1rem;
      }
    }
  }
}
</style>
