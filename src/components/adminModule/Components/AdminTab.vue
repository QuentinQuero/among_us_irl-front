<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Configurations" active>
          <configuration-tab/>
        </b-tab>
        <b-tab title="Games">
          <b-card-text>Coming soon</b-card-text>
        </b-tab>
        <b-tab title="Players">
          <b-card-text>Coming soon</b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import ConfigurationTab from "@/components/adminModule/Components/Tabs/ConfigurationTab";
export default {
name: "AdminTab",
  components: {ConfigurationTab}
}
</script>

<style scoped>

</style>
