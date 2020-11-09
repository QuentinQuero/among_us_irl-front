<template>
  <div>
    <b-table show-empty striped hover :items="data" :fields="columns">
      <template slot="top-row" slot-scope="{columns}">
        <td v-for="column in columns" :key="column.name">
          <input
            v-if="column.filtrable"
            v-model="filters[column.name]"
            :placeholder="column.label"
          />
        </td>
      </template>
    </b-table>
  </div>
</template>

<script>
let timerWatch = null
export default {
  name: "List",
  props: ['data', 'columns'],
  data () {
    return {
      filters: {}
    }
  },
  watch: {
    'filters': {
      handler: function () {
        if (timerWatch !== null) {
          clearTimeout(timerWatch)
        }
        timerWatch = setTimeout(() => {
          this.$emit('filerChange', this.filters)
        }, 500);
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>
