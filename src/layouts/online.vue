<template>
  <div class="online">
    <nav-bar/>
    <slot/>
  </div>
</template>

<script>
import NavBar from "@/components/shared/NavBar";
export default {
name: "online",
  components: {NavBar}
}
</script>

<style scoped>

</style>
