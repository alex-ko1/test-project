<template>
  <div class="banner">
    <div class="title">
      <h1>ЛОРЕМ ІПСУМ ДОЛОР СІТ АМЕТ</h1>
      <hr/>
    </div>
  </div>
</template>

<style scoped>
.banner {
  height: 100vh;
  background: linear-gradient(180deg, rgba(39, 38, 38, 0) 0%, #272626 100%),
  url("@/assets/images/banner.png") no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;

  .title {
    width: 100%;
    max-width: 1520px;
    margin: 0 auto 4rem;

    h1 {
      width: 55%;
      font-size: 5rem;
      font-weight: 700;
      line-height: 5rem;
      color: #fff;
    }
    @media(max-width: 1600px) {
      max-width: 90%;
    }
    @media (max-width: 768px) {
      max-width: 95%;
    }
    @media(max-width: 1170px) {
      h1{
        font-size: 3rem;
        width: 100%;
        max-width: 500px;
        line-height: 48px;
      }
    }
    @media(max-width: 768px) {
      margin-bottom: 1rem;
    }
  }

  hr {
    margin-top: 1rem;
    border-top: 1.5px solid #fff;
  }
}
</style>
