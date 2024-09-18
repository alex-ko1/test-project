<template>
  <AppSectionTitle title="Заходи" :button="{name:'Дивитися усі'}"/>
  <div class="events">
    <div class="event" v-for="(event,i) in events" :key="i">
      <img :src="event.image" alt=""/>
      <span class="date">{{ event.date }}</span>
      <span class="place">{{ event.place }}</span>
      <h4 class="name">{{ event.name }}</h4>
      <p class="description">{{ event.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import AppSectionTitle from "@/components/AppSectionTitle.vue";

const events = ref([
  {
    date: 'May 05, 2023',
    place: 'Lorem ipsum dolor sit amet consectetur',
    name: 'Назва заходу',
    description: 'Lorem ipsum dolor sit amet consectetur. Tortor duis quis dolor tellus tristique quisque in ut donec. Lacus pharetra adipiscing elit amet.',
    image: '/src/assets/restaurant.png'
  },
  {
    date: 'May 05, 2023',
    place: 'Lorem ipsum dolor sit amet consectetur',
    name: 'Назва заходу',
    description: 'Lorem ipsum dolor sit amet consectetur. Tortor duis quis dolor tellus tristique quisque in ut donec. Lacus pharetra adipiscing elit amet.',
    image: '/src/assets/restaurant.png'
  },
  {
    date: 'May 05, 2023',
    place: 'Lorem ipsum dolor sit amet consectetur',
    name: 'Назва заходу',
    description: 'Lorem ipsum dolor sit amet consectetur. Tortor duis quis dolor tellus tristique quisque in ut donec. Lacus pharetra adipiscing elit amet.',
    image: '/src/assets/restaurant.png'
  },
])
</script>

<style scoped lang="scss">
.events{
  display: flex;
  justify-content: space-between;
  .event{
    padding: 1rem 1rem 1.5rem;
    width: 32%;
    background: #323131;
    img{
      display: block;
      width: 100%;
    }
    .date{
      margin: 1rem 0 .5rem;
      &::before{
        background: url("@/assets/calendar.png") no-repeat;
      }
    }
    .place::before{
        background: url("@/assets/location.png") no-repeat;
    }
    .date,.place{
      display: flex;
      align-items: center;
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 600;
      color: #FFFFFF99;
      &::before{
        content: '';
        background-size: contain;
        display: inline-block;
        width: 18px;
        height: 20px;
        margin: 0 10px 0 4px;
      }
    }
    .name{
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 2rem;
      margin: 1.5rem 0 1rem;
    }
    .description{
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
}
</style>
