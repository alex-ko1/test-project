<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="nav-item" v-for="(link,i) in menuLinks" :key="i">
        <a :href="link.url">{{ link.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import {type Ref, ref} from "vue";

const menuLinks: Ref<{ text: string, url: string }[]> = ref([
  {text: 'Для клієнтів', url: '#'},
  {text: 'Про нас', url: '#'},
  {text: 'Бренди', url: '#'},
  {text: 'Особистий кабінет', url: '#'},
  {text: 'Контакти', url: '#'},
])
</script>

<style lang="scss">
header {
  .navbar-nav {
    list-style-type: none;
    display: flex;
    color: #fff;
    font-size: 1rem;
    text-transform: uppercase;
    @media (min-width: 1530px) {
      margin-right: 3rem;
    }
    & > .nav-item:hover a{
      padding-bottom: 2px;
      &:hover {
        border-bottom: 1px solid $white;
      }
    }

    & > .nav-item:not(:last-of-type) {
      margin-right: 3rem;
      @media (max-width: 1440px) {
        margin-right: 1.5rem;
      }
    }
  }
}

footer {
  .navbar {
    margin: 1rem auto 0 2.5rem;

    .navbar-nav {
      list-style-type: none;
      font-size: 1rem;
      & > .nav-item a{
        padding-bottom: 2px;
        &:hover {
          border-bottom: 1px solid $white;
        }
      }

      & > .nav-item:not(:last-of-type) {
        margin-bottom: 2rem;
      }
    }
  }
}
@media (max-width: 1440px) {
  header{
    .navbar-nav {
      & > .nav-item:not(:last-of-type) {
        margin-right: 1.5rem;
      }
    }
  }
}
</style>
