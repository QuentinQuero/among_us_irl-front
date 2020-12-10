<template>
  <div>
    <list
      :columns="columns"
      :data="data"
      :sortOrder="[{field: 'name', sortField: 'name', direction: 'asc'}]"
      v-on:filerChange="filterChange"
    />
    <div class="row justify-content-center">
      <b-button v-on:click="addConfiguration">{{ $t('actions.add_configuration') }}</b-button>
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
        { name: 'name', type: 'String', filterable: true, sortable: true, title: this.$t('list_label.configurations.name') },
        { name: 'cooldown', type: 'number', filterable: true, sortable: true, title: this.$t('list_label.configurations.cooldown') },
        { name: 'nbPlayers', type: 'number', filterable: true, sortable: true, title: this.$t('list_label.configurations.players') },
        { name: 'nbImposter', type: 'number', filterable: true, sortable: true, title: this.$t('list_label.configurations.imposters') },
        { name: 'nbShortMissions', type: 'number', filterable: true, sortable: true, title: this.$t('list_label.configurations.short_missions') },
        { name: 'nbNormalMissions', type: 'number', filterable: true, sortable: true, title: this.$t('list_label.configurations.normal_missions') },
        { name: 'nbLongMissions', type: 'number', filterable: true, sortable: true, title: this.$t('list_label.configurations.long_missions') },
        'actions'
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
