<template>
  <footer>
    <div class="container">
      <AppLogo class="footer-logo"/>
      <AppNavLinks/>
      <div class="footer-right">
        <form>
          <span>Підпишіться на розсилку</span>
          <input type="text" class="input" placeholder="Ім'я">
          <AppButton name="Підписатися" is-painted/>
        </form>
        <div class="soc-links">
          <a href="#" aria-label="Instagram"><InstagramIcon /></a>
          <a href="#" aria-label="Facebook"><FacebookIcon /></a>
          <a href="#" aria-label="Linkedin"><LinkedinIcon /></a>
          <a href="#" aria-label="Telegram"><TelegramIcon /></a>
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
import InstagramIcon from "@/assets/icons/instagram.svg"
import FacebookIcon from "@/assets/icons/facebook.svg"
import LinkedinIcon from "@/assets/icons/linkedin.svg"
import TelegramIcon from "@/assets/icons/telegram.svg"

</script>


<style scoped lang="scss">
footer {
  background-color: $gray-dark;
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
        border: 1px solid $gray-light;
        font-size: 1rem;
        padding: .75rem 0 .75rem 1rem;
        color: $white;
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
            color: $white;
            font-size: 1rem;
            font-weight: 300;
            padding: .5rem 1rem;
            border-radius: 20px;
            background-color: $blackish;
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
    @media(max-width: 1600px) {
      max-width: 90%;
    }
    @media (max-width: 768px) {
      max-width: 95%;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      width: max-content;
      padding: 1.5rem 0;
      & .footer-logo{
        order: -1;
        width: 10rem;
      }
      & .footer-right{
        order: -1;
        form{
          span{
            font-size: 1rem;
            font-weight: 600;
            margin-top: 2rem;
          }
        }
        .soc-links{
          text-align: center;
        }
      }
      .navbar{
        margin: 2.5rem 0 0;
      }
    }
  }

  .copyright {
    text-align: center;
    color: $gray-light;
    font-size: 1rem;
    padding-bottom: 1.5rem;
    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>
