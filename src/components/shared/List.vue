<template>
  <div>
    <vuetable
        ref="vuetable"
        :api-mode="false"
        :fields="columns"
        pagination-path=""
        :data="data"
        :per-page="5"
        :sort-order="sortOrder"
        @vuetable:pagination-data="onPaginationData"
        @vuetable:loading="onLoading"
        @vuetable:loaded="onLoaded"
    >
      <template slot="actions" slot-scope="props">
        <div class="row justify-content-around">
          <b-button
              variant="warning"
              style="color: white"
              v-on:click="editRow(props.rowData)"
          >
            Edit
          </b-button>
          <b-button
              variant="danger"
              v-on:click="deleteRow(props.rowData)"
          >
            Delete
          </b-button>
        </div>
      </template>
    </vuetable>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2'
let timerWatch = null
export default {
  name: "List",
  props: ['data', 'columns', 'pagination', 'sortOrder'],
  components: {
    Vuetable
  },
  data () {
    return {
      filters: {},
      perPage: 3,
    }
  },
  methods: {
    onPaginationData () {
      // console.log('PaginationData')
    },
    onLoading () {
      // console.log('onLoading')
    },
    onLoaded () {
      // console.log('onLoaded')
    },
    editRow (rowData) {
      console.log(rowData);
    },
    deleteRow (rowData) {
      console.log(rowData)
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
