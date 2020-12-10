<template>
  <div>
    <b-nav
      pills
      class="navBar"
    >
      <!-- First item set -->
      <div class="item-set">
        <b-nav-item :active="activeRoute === 'home'" href="/home">Home</b-nav-item>
        <b-nav-item :active="activeRoute === 'admin'" v-if="userAdmin" href="/admin">Admin Panel</b-nav-item>
        <b-nav-item :active="activeRoute === 'game'">Game</b-nav-item>
        <b-nav-item :active="activeRoute === 'account'">My Account</b-nav-item>
      </div>
      <b-nav-dropdown
        id="nav-dropdown"
        text="Options"
        toggle-class="nav-link-custom"
        right
      >
        <b-dropdown-item @click="signOut()">Sign out</b-dropdown-item>
      </b-nav-dropdown>
    </b-nav>
  </div>
</template>

<script>
const userService = require('../../services/userServices')
export default {
  name: "navBar",
  data () {
    return {
      userAdmin: false
    }
  },
  mounted () {
    this.isUserAdmin()
  },
  methods: {
    isUserAdmin () {
      userService.isUserAdmin().then((response) => {
        this.userAdmin = response.data;
      }).catch(() => {
        sessionStorage.removeItem('jwt');
        sessionStorage.removeItem('user');
        this.$router.push('/signup')
      });
    },
    signOut () {
      // Remove local storage item jwt
      sessionStorage.removeItem('jwt')
      // Change route
      this.$router.push('/')
    }
  },
  computed: {
    activeRoute () {
      return this.$route.name;
    }
  }
}
</script>

<style scoped>

.navBar {
  justify-content: space-between;
  padding: 1em;
}

.item-set {
  display: flex;
}
</style>
