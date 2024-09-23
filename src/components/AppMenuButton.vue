<template>
  <v-menu class="btn-menu" open-on-hover>
    <template v-slot:activator="{ props }">
      <AppButton name="Menu" v-bind="props" is-arrow/>
<!--      <v-btn color="grey-darken-2" v-bind="props">Menu</v-btn>-->
    </template>
    <AppNavLinks/>
  </v-menu>
</template>

<script setup lang="ts">

import AppNavLinks from "@/components/AppNavLinks.vue";
import AppButton from "@/components/AppButton.vue";
</script>

<style scoped lang="scss">
.btn-menu{
  color: $white;
  :deep .navbar-nav{
    list-style-type: none;
    margin-top: .5rem;
    padding: 1rem 0;
    background-color: $gray-dark;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    li{
      padding: .5rem 1rem;
      transition: .3s;
      &:hover{
        background-color: #ADADAD30;
      }
    }
  }
}
</style>
