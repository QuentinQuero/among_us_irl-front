<template>
  <div>
    <list
      :columns="columns"
      :data="data"
    />
    <div class="row justify-content-center">
      <b-button v-on:click="addGame">{{ $t('actions.add_game') }}</b-button>
    </div>
  </div>
</template>

<script>
import gameServices from '@/services/gameServices'
import List from "@/components/shared/List";
export default {
  name: "GamesTab",
  components: {List},
  data () {
    return {
      columns: [
        {name: 'accessCode', type: 'String', filterable: true, sortable: true, title: this.$t('list_label.games.access_code') },
        {name: 'status', type: 'String', filterable: true, sortable: true, title: this.$t('list_label.games.status') },
        {name: 'configurations.name', type: 'String', filterable: true, sortable: true, title: this.$t('list_label.games.configuration_name') },
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
      gameServices.searchGames(this.filters, this.pagination, this.sort).then((response) => {
        this.data = response.data
      })
    },
    addGame () {
      this.$root.$emit('open-modal', ['createGame'])
    },
    filterChange ($event) {
      this.filters = $event
      this.loadData();
    }
  },
  mounted () {
    this.loadData()
  },
  created () {
    this.$root.$on('game-created', this.loadData);
  }
}
</script>

<style scoped>

</style>
