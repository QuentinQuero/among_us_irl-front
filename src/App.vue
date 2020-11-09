<template>
  <div id="app">
    <component :is="layout">
      <modal-generator/>
      <router-view/>
    </component>
  </div>
</template>

<script>

import ModalGenerator from "@/components/Modal/ModalGenerator";
export default {
  name: 'App',
  components: {ModalGenerator},
  computed: {
    layout() {
      return (this.$route.meta.layout.name || 'offline') + '-layout'
    }
  }
}
</script>

<style>
</style>
