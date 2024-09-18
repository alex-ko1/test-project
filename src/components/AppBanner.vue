<script setup>

</script>

<template>
  <div class="banner">
    <div class="title">
      <h1>ЛОРЕМ ІПСУМ ДОЛОР СІТ АМЕТ</h1>
      <hr />
    </div>
  </div>
</template>

<style scoped>
.banner {
  height: 100vh;
  background: linear-gradient(180deg, rgba(39, 38, 38, 0) 0%, #272626 100%),
  url("@/assets/banner.png") no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;
  .title {
    width: 100%;
    max-width: 1520px;
    margin: 0 auto 4rem;
    h1 {
      width: 50%;
      font-size: 5rem;
      font-weight: 700;
      line-height: 88px;
      color: #fff;
    }
  }
  hr {
    margin-top: 1rem;
    border-top: 1.5px solid #fff;
  }
}
</style>
