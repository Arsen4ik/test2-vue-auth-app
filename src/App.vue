<template>
  <header>
    <ul>
      <router-link to="/"><li>home</li></router-link>
      <router-link to="/users"><li>users</li></router-link>
      <router-link to="/profile"><li>profile</li></router-link>
    </ul>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <div class="images">
      <svg
        width="30.000000"
        height="30.000000"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <path
          id="fb"
          d="M25.6055 0L4.39453 0C1.97156 0 0 1.97159 0 4.39453L0 25.6055C0 28.0284 1.97156 30 4.39453 30L13.2422 30L13.2422 19.3945L9.72656 19.3945L9.72656 14.1211L13.2422 14.1211L13.2422 10.5469C13.2422 7.63892 15.6077 5.27344 18.5156 5.27344L23.8477 5.27344L23.8477 10.5469L18.5156 10.5469L18.5156 14.1211L23.8477 14.1211L22.9688 19.3945L18.5156 19.3945L18.5156 30L25.6055 30C28.0284 30 30 28.0284 30 25.6055L30 4.39453C30 1.97159 28.0284 0 25.6055 0Z"
          fill="#21243D"
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
      </svg>
      <img src="../src/assets/instagram.svg" alt="" />
      <svg
        width="36.923096"
        height="30.000000"
        viewBox="0 0 36.9231 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <path
          id="Vector"
          d="M36.9231 3.55154C35.55 4.15384 34.0869 4.55307 32.5615 4.74692C34.1307 3.81 35.3285 2.33771 35.8916 0.56308C34.4285 1.43539 32.8131 2.05154 31.0916 2.39539C29.7023 0.916168 27.7223 0 25.5623 0C21.3716 0 17.9977 3.40155 17.9977 7.57153C17.9977 8.17154 18.0485 8.74847 18.1731 9.2977C11.88 8.99078 6.31152 5.97461 2.5708 1.38C1.91772 2.51309 1.53467 3.81 1.53467 5.20615C1.53467 7.8277 2.88464 10.1516 4.89697 11.4969C3.68079 11.4738 2.48767 11.1208 1.47693 10.5646C1.47693 10.5877 1.47693 10.6177 1.47693 10.6477C1.47693 14.3261 4.10083 17.3815 7.5415 18.0854C6.92542 18.2538 6.25391 18.3346 5.55688 18.3346C5.07227 18.3346 4.58313 18.3069 4.1239 18.2054C5.10461 21.2031 7.8877 23.4069 11.1969 23.4785C8.62158 25.4931 5.35156 26.7069 1.81152 26.7069C1.1908 26.7069 0.595337 26.6792 0 26.6031C3.35303 28.7654 7.3269 30 11.6123 30C25.5415 30 33.157 18.4615 33.157 8.45999C33.157 8.1254 33.1454 7.80231 33.1293 7.48154C34.6316 6.41537 35.8938 5.08383 36.9231 3.55154Z"
          fill="#21243D"
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
      </svg>
      <svg
        width="30.000000"
        height="30.000000"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <path
          id="Linkedin"
          d="M25.6055 0L4.39453 0C1.97156 0 0 1.97159 0 4.39453L0 25.6055C0 28.0284 1.97156 30 4.39453 30L25.6055 30C28.0284 30 30 28.0284 30 25.6055L30 4.39453C30 1.97159 28.0284 0 25.6055 0ZM10.6055 23.7891L7.08984 23.7891L7.08984 11.4844L10.6055 11.4844L10.6055 23.7891ZM10.6055 9.72656L7.08984 9.72656L7.08984 6.21094L10.6055 6.21094L10.6055 9.72656ZM22.9102 23.7891L19.3945 23.7891L19.3945 16.7578C19.3945 15.7887 18.6058 15 17.6367 15C16.6676 15 15.8789 15.7887 15.8789 16.7578L15.8789 23.7891L12.3633 23.7891L12.3633 11.4844L15.8789 11.4844L15.8789 12.147C16.7999 11.8607 17.3982 11.4844 18.5156 11.4844C20.8999 11.4869 22.9102 13.6258 22.9102 16.1536L22.9102 23.7891Z"
          fill="#21243D"
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
      </svg>
    </div>
    <p>Copyright ©{{ new Date().getFullYear() }} All rights reserved</p>
  </footer>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { RouterView, RouterLink } from 'vue-router'

export default {}
</script>
<style scoped>
header {
  padding: 30px 117px;
  display: flex;
  justify-content: end;

  ul {
    display: flex;
    flex-direction: row;
    gap: 30px;
    list-style-type: none;

    a {
      text-decoration: none;
    }

    li {
      color: black;
    }
  }
}

footer {
  position: absolute;
  bottom: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: 182px;
  justify-content: center;
  align-items: center;
  gap: 20px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 240px;
    height: 50px;

    img {
      width: 50px;
      height: 50px;
    }
    svg {
      margin-top: 10px;
    }
  }
}
</style>
