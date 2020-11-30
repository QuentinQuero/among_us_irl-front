<template>
    <ul class="displayConfiguration">
      <li>Cooldown: {{configuration.cooldown}}</li>
      <li>Players number: {{configuration.nbPlayers}}</li>
      <li>Number short missions: {{configuration.nbShortMissions}}</li>
      <li>Number normal missions: {{configuration.nbNormalMissions}}</li>
      <li>Number Long missions: {{configuration.nbLongMissions}}</li>
      <li>Number imposter: {{configuration.nbImposter}}</li>
      <li>Name: {{configuration.name}}</li>
    </ul>
</template>

<script>
export default {
  name: "displayConfiguration",
  props: ['configuration']
}
</script>

<style scoped>
.displayConfiguration {
  list-style-type: none;
  font-size: 0.8em;
}
</style>
