<template>
  <section>
    <h1 v-if="errorMessage">{{ errorMessage }}</h1>
    <div v-else>
      <h2>My profile</h2>
      <div class="info">
        <user-info-item :item="`Username: ${userInfo.username}`"></user-info-item>
        <user-info-item :item="`Name: ${userInfo.firstName}`"></user-info-item>
        <user-info-item :item="`Lastname: ${userInfo.lastName}`"></user-info-item>
        <user-info-item :item="`Gender: ${userInfo.gender}`"></user-info-item>
        <user-info-item :item="`Email: ${userInfo.email}`"></user-info-item>
        <img :src="userInfo.image" alt="" />
      </div>
    </div>
  </section>
</template>
<script>
import UserInfoItem from '../components/UserInfoItem.vue'
export default {
  components: {
    UserInfoItem
  },
  data() {
    return {
      errorMessage: '',
      userInfo: {}
    }
  },
  async mounted() {
    try {
      const res = await fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      const data = await res.json()
      console.log(data)
      if (data.message) {
        this.errorMessage = data.message
        setTimeout(() => {
          localStorage.removeItem('token')
          this.errorMessage = ''
          this.$router.replace('/login')
        }, 3000)
      } else {
        this.userInfo = data
      }
    } catch (e) {
      console.error('ОШИБКА: ', e)
    }
  }
}
</script>
<style scoped>
h1 {
  text-align: center;
  margin: 100px 0;
  font-weight: 700;
  font-size: 44px;
  color: #21243d;
}

h2 {
  width: 65%;
  margin-left: 25%;
  padding: 50px 0 70px;
  font-weight: 700;
  font-size: 44px;
  color: #21243d;
}
.info {
  width: 65%;
  display: grid;
  margin-left: 25%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-row-gap: 15px;

  img {
    grid-row-start: 1;
    grid-row-end: 6;
    grid-column-start: 2;
    display: flex;
    justify-self: start;
    border-radius: 100%;
  }
}
</style>
