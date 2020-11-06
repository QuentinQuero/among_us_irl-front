<template>
  <div>
    <list
      :columns="columns"
      :data="data"
    />
  </div>
</template>

<script>
import configurationService from '@/services/configurationServices';
import List from "@/components/shared/list";
export default {
  name: "ConfigurationTab",
  components: {List},
  data () {
    return {
      columns: [
        {name: 'name', type: 'String', filterable: true, sortable: true, label: 'Configuration name'},
        {name: 'cooldown', type: 'number', filterable: true, sortable: true, label: 'Impostor cooldown'},
        {name: 'nbPlayers', type: 'number', filterable: true, sortable: true, label: 'Max total game player number'},
        {name: 'nbImporter', type: 'number', filterable: true, sortable: true, label: 'Imposter number'},
        {name: 'nbShortMissions', type: 'number', filterable: true, sortable: true, label: 'Number short player missions'},
        {name: 'nbNormalMissions', type: 'number', filterable: true, sortable: true, label: 'Number normal player missions'},
        {name: 'nbLongMissions', type: 'number', filterable: true, sortable: true, label: 'Number long player missions'}
      ],
      data: {},
      filters: {},
      pagination: {},
      sort: {
        column: 'name',
        order: 1
      }
    }
  },
  methods: {
    loadData () {
      configurationService.searchConfigurations(this.filters, this.pagination, this.sort).then((response) => {
        console.log(response);
      })
    }
  },
  mounted() {
    this.loadData();
  }
}
</script>

<style scoped>

</style>
