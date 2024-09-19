<template>
  <footer>
    <div class="container">
      <AppLogo/>
      <AppNavLinks/>
      <div class="footer-right">
        <form>
          <span>Підпишіться на розсилку</span>
          <input type="text" class="input" placeholder="Ім'я">
          <AppButton name="Підписатися" is-painted/>
        </form>
        <div class="soc-links">
          <a href="#" aria-label="instagram"><img src="@/assets/instagram.png" alt=""></a>
          <a href="#" aria-label="Facebook"><img src="@/assets/Facebook.png" alt=""></a>
          <a href="#" aria-label="Linkedin"><img src="@/assets/Linkedin.png" alt=""></a>
          <a href="#" aria-label="telegram"><img src="@/assets/telegram.png" alt=""></a>
        </div>
      </div>

    </div>
    <div class="copyright">© 2024 All right reserved</div>
  </footer>
</template>

<script setup lang="ts">

import AppButton from "@/components/AppButton.vue";
import AppNavLinks from "@/components/AppNavLinks.vue";
import AppLogo from "@/components/AppLogo.vue";
</script>


<style scoped lang="scss">
footer {
  background-color: #323131;
  color: #fff;

  .container {
    padding: 4rem 0 8rem;
    margin: 0 auto;
    max-width: 1520px;
    display: flex;
    justify-content: space-between;

    .footer-right {
      margin-top: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;

      span {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 2rem;
        margin-bottom: 1rem;
      }

      .input {
        width: 22rem;
        margin-bottom: .5rem;
        background: transparent;
        border: 1px solid #ADADAD;
        font-size: 1rem;
        padding: .75rem 0 .75rem 1rem;
        color: #ffffff;
      }
    }

    .soc-links {
      margin-top: 2.5rem;

      a {
        margin-right: 1rem;
        &[aria-label] {
          position: relative;
          &:after {
            opacity: 0;
            content: attr(aria-label);
            transition: .3s;
            position: absolute;
            color: #ffffff;
            font-size: 1rem;
            font-weight: 300;
            padding: .5rem 1rem;
            border-radius: 20px;
            background-color: #272626;
            top: 30px;
            left: -2rem;
            width: max-content;
          }
        }
        &:hover{
          &[aria-label]:after{
            opacity: 1;
          }
        }
      }
    }
  }

  .copyright {
    text-align: center;
    color: #ADADAD;
    font-size: 1rem;
    padding-bottom: 1.5rem;
  }
}
</style>
