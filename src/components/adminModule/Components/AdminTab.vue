<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab :title="$t('tabs.configurations')" active>
          <configuration-tab/>
        </b-tab>
        <b-tab :title="$t('tabs.games')">
          <games-tab/>
        </b-tab>
        <b-tab :title="$t('tabs.players')">
          <b-card-text>Coming soon</b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import ConfigurationTab from "@/components/adminModule/Components/Tabs/ConfigurationTab";
import GamesTab from "@/components/adminModule/Components/Tabs/GamesTab";
export default {
name: "AdminTab",
  components: {GamesTab, ConfigurationTab}
}
</script>

<style scoped>

</style>
