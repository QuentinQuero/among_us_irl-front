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
      <template slot="status" slot-scope="props">
        <div class="row justify-content-around">
          {{ props.rowData.status }}
          <div v-if="props.rowData.status === 'init'">
            <b-button
                variant="success"
                @click="updateGameStatus(props.rowData._id)"
            >
              {{ $t('actions.launch_game') }}
            </b-button>
          </div>
          <div v-else-if="props.rowData.status === 'inGame'">
            <b-button
                variant="warning"
                style="color: white"
                @click="updateGameStatus(props.rowData._id)"
            >
              {{ $t('actions.stop_game') }}
            </b-button>
          </div>
          <div v-else-if="props.rowData.status === 'finished'">
            <b-button
                variant="danger"
                style="color: white"
                @click="updateGameStatus(props.rowData._id)"
            >
              {{ $t('actions.reset_game') }}
            </b-button>
          </div>
        </div>
      </template>

      <template slot="actions" slot-scope="props">
        <div class="row justify-content-around">
          <b-button
              variant="warning"
              style="color: white"
              v-on:click="editRow(props.rowData)"
          >
            {{ $t('actions.edit') }}
          </b-button>
          <b-button
              variant="danger"
              v-on:click="deleteRow(props.rowData)"
          >
            {{ $t('actions.delete') }}
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
    },
    updateGameStatus (gameId) {
      this.$emit('changeStatus', gameId);
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
