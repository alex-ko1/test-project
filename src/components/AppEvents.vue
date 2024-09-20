<template>
  <div class="wrapper">
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
    image: '/src/assets/images/restaurant.png'
  },
  {
    date: 'May 05, 2023',
    place: 'Lorem ipsum dolor sit amet consectetur',
    name: 'Назва заходу',
    description: 'Lorem ipsum dolor sit amet consectetur. Tortor duis quis dolor tellus tristique quisque in ut donec. Lacus pharetra adipiscing elit amet.',
    image: '/src/assets/images/restaurant.png'
  },
  {
    date: 'May 05, 2023',
    place: 'Lorem ipsum dolor sit amet consectetur',
    name: 'Назва заходу',
    description: 'Lorem ipsum dolor sit amet consectetur. Tortor duis quis dolor tellus tristique quisque in ut donec. Lacus pharetra adipiscing elit amet.',
    image: '/src/assets/images/restaurant.png'
  },
])
</script>

<style scoped lang="scss">
.wrapper{
  position: relative;
}
.events {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1170px) {
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 8rem;
  }

  .event {
    padding: 1rem 1rem 1.5rem;
    width: 32%;
    background: $gray-dark;
    min-width: 344px;

    img {
      display: block;
      width: 100%;
    }

    .date {
      margin: 1rem 0 .5rem;

      &::before {
        background: url("@/assets/icons/calendar.svg") no-repeat;
      }
    }

    .place::before {
      background: url("@/assets/icons/location.svg") no-repeat;
    }

    .date, .place {
      display: flex;
      align-items: center;
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 600;
      color: #FFFFFF99;

      &::before {
        content: '';
        background-size: contain;
        display: inline-block;
        width: 18px;
        height: 20px;
        margin: 0 10px 0 4px;
      }
    }

    .name {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 2rem;
      margin: 1.5rem 0 1rem;
    }

    .description {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
}
</style>
