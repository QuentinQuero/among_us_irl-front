<template>
  <div>
    <div class="vue-template">
      <form>
        <h3>{{ $t('pages.title.sign_in') }}</h3>
        <!-- Form group for email address -->
        <div class="form-group">
          <label>{{ $t('forms.email_address') }}</label>
          <input
              v-model="email"
              type="email"
              class="form-control form-control-lg"
          />
        </div>

        <!-- Form group for Password -->
        <div class="form-group">
          <label>{{ $t('forms.password') }}</label>
          <input
              v-model="password"
              type="password"
              class="form-control form-control-lg"
          />
        </div>
        <!-- Button line -->
        <div class="row">
          <button
              v-on:click="signIn"
              type="button"
              class="btn btn-dark btn-lg btn-block col-4"
          >
            {{ $t('actions.sign_in') }}
          </button>
          <button
              v-on:click="signUp"
              type="button"
              class="btn btn-outline-primary btn-lg btn-block col-4"
          >
            {{ $t('actions.sign_up') }}
          </button>
        </div>
      </form>
    </div>
    <b-alert
        style="margin-top: 3em"
        :show="dismissCountDown"
        dismissible
        variant="danger"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
    >
      <h4>{{ $t('errors.invalid_credentials') }}</h4>
      <b-progress
          variant="warning"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="4px"
      ></b-progress>
    </b-alert>
  </div>
</template>

<script>
const userService = require('../../../services/userServices')
export default {
  name: "LoginForm",
  data () {
    return {
      email: '',
      password: '',
      dismissSecs: 10,
      dismissCountDown: 0,
    }
  },
  methods: {
    signIn () {
      userService.login(this.email, this.password).then((response) => {
        // Test if user send good credential
        if (response.status === 'success') {
          // Set in localStorage the token
          sessionStorage.setItem('jwt', response.jwt);
          sessionStorage.setItem('userRole', response.user.role);
          this.$router.push('/home')
        } else {
          // Show the error
          sessionStorage.removeItem('jwt');
          this.dismissCountDown = this.dismissSecs;
        }
      })
    },
    signUp () {
      this.$router.push('/signup')
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    }
  }
}
</script>

<style scoped>
.row{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
}
</style>
