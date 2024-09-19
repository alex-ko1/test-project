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

    & > .nav-item:hover {
      border-bottom: 1px solid #ffffff;
    }

    & > .nav-item:not(:last-of-type) {
      margin-right: 3rem;
    }
  }
}

footer {
  .navbar {
    margin: 1rem auto 0 2.5rem;

    .navbar-nav {
      list-style-type: none;
      font-size: 1rem;

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
