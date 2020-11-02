<template>
  <div class="vue-template">
    <form>
      <h3>Sign in</h3>
      <!-- Form group for email address -->
      <div class="form-group">
        <label>Email address</label>
        <input
            v-model="email"
            type="email"
            class="form-control form-control-lg"
        />
      </div>

      <!-- Form group for Password -->
      <div class="form-group">
        <label>Password</label>
        <input
            v-model="password"
            type="password"
            class="form-control form-control-lg"
        />
      </div>

      <!-- Button to sign in -->
      <button
          v-on:click="signIn"
          type="button"
          class="btn btn-dark btn-lg btn-block"
      >
        Sign In
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn () {
      console.log(this.email + ' ' + this.password);
    }
  }
}
</script>

<style scoped>

</style>