<template>
  <a class="logo" href="#"><img src="@/assets/logo.png" alt="Logo"/></a>
</template>

<style scoped lang="scss">
.logo {
  margin-right: 4rem;
  max-width: 178px;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: min-content;
  }
  @media(max-width: 1600px) {
    margin-right: 2rem;
  }
  @media(max-width: 1600px) {
    width: 22vw;
  }
}
</style>
