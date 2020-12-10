<template>
  <div class="vue-tempalte">
    <form>
      <h3>{{ $t("pages.title.sign_up") }}</h3>

      <div class="form-group">
        <label>{{ $t('forms.email_address') }}</label>
        <input
            v-model="email"
            type="email"
            class="form-control form-control-lg"
            @blur="checkMail()"
        />
      </div>

      <div class="form-group">
        <label>{{ $t('forms.password') }}</label>
        <input
            v-model="password"
            type="password"
            class="form-control form-control-lg"
        />
      </div>

      <div class="form-group">
        <label>{{ $t('forms.confirm_password') }}</label>
        <input
            v-model="confirmPassword"
            type="password"
            class="form-control form-control-lg"
        />
      </div>

      <button
          @click="signup()"
          :disabled="!goodData"
          type="submit"
          class="btn btn-dark btn-lg btn-block"
      >
        {{ $t('actions.sign_up') }}
      </button>
      <p class="forgot-password text-right">
        {{ $t('messages.already_registred') }}
        <router-link :to="{name: 'login'}">{{ $t('messages.sign_in') }} ?</router-link>
      </p>
    </form>
    <b-alert
        style="margin-top: 3em"
        :show="dismissCountDown"
        dismissible
        :variant="alertType"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
    >
      <h4>{{ $t(alertMessage) }}</h4>
      <b-progress
          :variant="alertType"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="4px"
      ></b-progress>
    </b-alert>
  </div>
</template>

<script>
const userService = require('../../../services/userServices');
export default {
  name: "SignUpForm",
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      isUsed: true,
      alertMessage: '',
      alertType: '',
      dismissSecs: 10,
      dismissCountDown: 0,
    }
  },
  computed: {
    goodData () {
      return (this.email !== '' && this.password !== '' && this.confirmPassword !== '') && (this.password === this.confirmPassword) && !this.isUsed
    }
  },
  methods: {
    checkMail () {
      userService.isUsedEmail(this.email).then((response) => {
        this.isUsed = response.isUsed;
        // Display error if mail is used
        if (this.isUsed) {
          this.alertMessage = 'errors.email_already_used';
          this.alertType = 'danger'
          this.dismissCountDown = this.dismissSecs;
        }
      });
    },
    signup () {
      userService.signup(this.email, this.password, this.confirmPassword)
      .then((response) => {
        this.alertMessage = 'messages.account_created';
        this.alertType = 'success'
        this.dismissCountDown = this.dismissSecs;
        console.log(response)
      })
      .catch((error) => {
        this.alertMessage = 'errors.account_creation';
        this.alertType = 'danger'
        this.dismissCountDown = this.dismissSecs;
        console.log(error)
      });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    }
  }
}
</script>

<style scoped>

</style>
