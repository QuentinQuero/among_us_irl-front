<template>
  <div>
    <b-table
        show-empty
        striped
        hover
        :items="data"
        :fields="fields"
    >
      <template slot="top-row">
        <td v-for="column in columns" :key="column.name">
          <b-form-input
            v-if="column.filterable"
            v-model="filters[column.name]"
            :placeholder="column.label"
          >
          </b-form-input>
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
      filters: {},
      fields: []
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
  },
  mounted () {
    this.columns.forEach((field) => {
      this.fields.push({
        key: field.name,
        sortable: field.sortable
      });
    });
  }
}
</script>

<style scoped>

</style>
