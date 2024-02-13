<template>
  <section>
    <form @submit.prevent="auth">
      <div>
        <p>Authorization</p>
        <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
      </div>
      <div>
        <p>Login</p>
        <input type="text" v-model="login" spellcheck="false" />
        <p>Password</p>
        <input type="password" v-model="password" spellcheck="false" />
        <button type="submit">submit</button>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      login: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    async auth() {
      try {
        localStorage.removeItem('token')
        const res = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: this.login,
            password: this.password
          })
        })
        const data = await res.json()
        // console.log(data)
        if (data.message) {
          //   console.time()
          this.errorMessage = data.message
          setTimeout(() => {
            this.errorMessage = ''
            // console.timeEnd()
          }, 3000)
        } else {
          localStorage.setItem('token', data.token)
          this.$router.replace('/profile')
        }
      } catch (e) {
        console.error('ОШИБКА: ', e)
      }
    }
  }
}
</script>
<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 262px);
}
form {
  width: 335px;
  height: 277px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow:
    0px 2.75px 9px 0px rgba(0, 0, 0, 0.19),
    0px 0.25px 3px 0px rgba(0, 0, 0, 0.04);
  border-radius: 10px;

  div:first-child {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;

    p:first-child {
      font-weight: 600;
    }

    .error-message {
      color: red;
      font-weight: bold;
    }
  }

  div:last-child {
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    width: 152px;
    gap: 13px;
    font-size: 14px;

    input {
      height: 29px;
      box-shadow:
        0px 2.75px 9px 0px rgba(0, 0, 0, 0.19),
        0px 0.25px 3px 0px rgba(0, 0, 0, 0.04);
      border-radius: 10px;
      border: none;
      outline: none;
      padding: 0 10px;
    }

    button {
      background-color: initial;
      margin-top: 10px;
      border: none;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      &:hover {
        color: black;
      }
    }
  }
}
</style>
