<template>
  <section>
    <h2 v-if="!users.length">Loading...⚙️</h2>
    <div class="hide-effect"></div>
    <div class="items">
      <user-item v-for="user in users" :key="user.id" :user="user"></user-item>
    </div>
  </section>
</template>

<script>
import UserItem from '../components/UserItem.vue'
export default {
  components: {
    UserItem
  },
  data() {
    return {
      users: []
    }
  },
  mounted() {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => (this.users = data.users))
  }
}
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  padding: 50px 0;
  height: calc(100vh - 262px);
  overflow: auto;

  h2 {
    text-align: center;
  }

  .hide-effect {
    background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.3));
    position: fixed;
    bottom: 180px;
    width: 402px;
    height: 100px;
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
}
</style>
