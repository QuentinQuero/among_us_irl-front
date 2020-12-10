<template>
    <ul class="displayConfiguration">
      <li>{{ $t('list_label.configurations.name') }} : {{configuration.name}}</li>
      <li>{{ $t('list_label.configurations.cooldown') }} : {{configuration.cooldown}}</li>
      <li>{{ $t('list_label.configurations.players') }} : {{configuration.nbPlayers}}</li>
      <li>{{ $t('list_label.configurations.imposters') }} : {{configuration.nbShortMissions}}</li>
      <li>{{ $t('list_label.configurations.short_missions') }} : {{configuration.nbNormalMissions}}</li>
      <li>{{ $t('list_label.configurations.normal_missions') }} : {{configuration.nbLongMissions}}</li>
      <li>{{ $t('list_label.configurations.long_missions') }} : {{configuration.nbImposter}}</li>
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
