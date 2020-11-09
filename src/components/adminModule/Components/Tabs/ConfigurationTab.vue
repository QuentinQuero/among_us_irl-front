<template>
  <div>
    <list
      :columns="columns"
      :data="data"
      v-on:filerChange="filterChange"
    />
    <div class="row justify-content-center">
      <b-button v-on:click="addConfiguration">Add Configuration</b-button>
    </div>
  </div>
</template>

<script>
import configurationService from '@/services/configurationServices';
import List from "@/components/shared/List";
export default {
  name: "ConfigurationTab",
  components: {List},
  data () {
    return {
      columns: [
        {name: 'name', type: 'String', filterable: true, sortable: true, label: 'Configuration name'},
        {name: 'cooldown', type: 'number', filterable: true, sortable: true, label: 'Impostor cooldown'},
        {name: 'nbPlayers', type: 'number', filterable: true, sortable: true, label: 'Max total game player number'},
        {name: 'nbImposter', type: 'number', filterable: true, sortable: true, label: 'Imposter number'},
        {name: 'nbShortMissions', type: 'number', filterable: true, sortable: true, label: 'NB short missions'},
        {name: 'nbNormalMissions', type: 'number', filterable: true, sortable: true, label: 'NB normal missions'},
        {name: 'nbLongMissions', type: 'number', filterable: true, sortable: true, label: 'NB long missions'}
      ],
      data: [],
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
        this.data = response.data
      })
    },
    addConfiguration () {
      this.$root.$emit('open-modal', ['createConfig'])
    },
    filterChange ($event) {
      this.filters = $event
      this.loadData();
    }
  },
  mounted() {
    this.loadData();
  },
  created () {
    this.$root.$on('configuration-created', this.loadData);
  }
}
</script>

<style scoped>

</style>
