<template>
  <header>
    <div class="container">
      <AppLogo/>
      <div class="header__links" :class="{'mobile-menu':isMenuOpened}">
        <AppNavLinks v-if="!isMobileView"/>
        <AppMenuButton class="menu-button" v-else/>
        <div class="soc-links">
          <a v-for="(link,i) in socialLinks" :key="i" :href="link.url">
            <span class="label">{{link.name}}</span>
            <component :is="link.icon" ></component>
          </a>
        </div>
        <div class="header-buttons">
          <AppButton name="Зареєструватися" is-painted @click="showDialog('signUp')"/>
          <AppButton name="Увійти" @click="showDialog('signIn')"/>
        </div>
      </div>
      <div class="burger-button">
        <font-awesome-icon :icon="['fas', 'fa-bars']" class="burger" v-if="!isMenuOpened" @click="menuToggle"/>
        <font-awesome-icon :icon="['fas', 'xmark']" class="xmark" v-if="isMenuOpened" @click="menuToggle"/>
      </div>
    </div>
    <AppModal subtitle="Будь ласка, заповніть усі поля" title="Заявка нового клієнта" @close-dialog="closeDialog"
              :show="isShow && dialogName==='signUp'" :inputs="signUp" :name="dialogName"/>
    <AppModal title="Увійти" @close-dialog="closeDialog" :show="isShow && dialogName === 'signIn'" :inputs="signIn"
              :name="dialogName"/>
  </header>
</template>

<script setup lang="ts">
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import AppButton from "@/components/AppButton.vue";
import AppNavLinks from "@/components/AppNavLinks.vue";
import AppLogo from "@/components/AppLogo.vue";
import AppModal from "@/components/AppModal.vue";
import {computed, type Ref, ref} from "vue";
import type {IInput} from "@/components/AppInput.vue";
import FacebookIcon from "@/assets/icons/facebook-bg.svg"
import TelegemIcon from "@/assets/icons/telegram-bg.svg"
import WhatsappIcon from "@/assets/icons/whatsapp.svg"
import AppMenuButton from "@/components/AppMenuButton.vue";


const socialLinks: { name: string, url: string, icon: any }[] = [
  {name: 'facebook', url: '#', icon: FacebookIcon},
  {name: 'telegram', url: '#', icon: TelegemIcon},
  {name: 'whatsapp', url: '#', icon: WhatsappIcon},
];
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

const signUp: IInput[] = [
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

]

const signIn: IInput[] = [
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

]

const isMenuOpened = ref(false);
const menuToggle = () => {
  isMenuOpened.value = !isMenuOpened.value;
}
let windowWidth = ref(window.innerWidth);


window.addEventListener('resize', () => {
  windowWidth.value = window.innerWidth
})
const isMobileView = computed(() => windowWidth.value <= 1350)
</script>

<style scoped lang="scss">
header {
  background-color: $blackish;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  .container {
    padding: 22px 0;
    margin: 0 auto;
    max-width: 1520px;
    display: flex;
    justify-content: space-between;

    .header__links {
      display: flex;
      align-items: center;
      justify-content: flex-end;
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
        @media (min-width: 1530px) {
          margin-right: 1.5rem;
        }
        a {
          position: relative;
          display: flex;
          align-items: center;
          & {
            margin-right: 1rem;
          }
          .label{
            opacity: 0;
            pointer-events: none;
            transition: .3s;
            color: $white;
            font-size: 1rem;
            font-weight: 300;
            padding: .5rem 1rem;
            border-radius: 20px;
            background-color: $gray-dark;
            position: absolute;
            left: -2rem;
            top: 50px;
          }
          &:hover .label{
            opacity: 1;
            pointer-events: auto;
          }
        }
      }

      .header-buttons {
        display: flex;
        gap: 1rem;
      }
    }
    .burger-button{
      display: none;
    }
    .menu-button{
      display: none;
    }
    @media (max-width: 1170px) {
      justify-content: space-between;
      padding: 1rem 0;
      .header__links{
        display: none;
      }
      .burger-button{
        display: flex;
      }
      .header__links.mobile-menu{
        display: block;
      }
    }
    .xmark,
    .burger {
      color: $white;
      margin: auto .5rem auto 0;
      font-size: 2rem;
      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }

    @media(max-width: 1600px) {
      max-width: 95%;
    }
    @media(max-width: 1440px) {
      .header__links {
        width: 100%;
        .soc-links{
          margin-left: 1rem;
        }
      }
    }
  }
}
</style>
