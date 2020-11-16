<template>
  <div>
    <b-card
      border-variant="primary"
      header="Create a Game"
      header-bg-variant="primary"
      header-text-variant="white"
    >
      <b-card-body>
        <b-form>
          <!-- Game accessCode -->
          <b-form-group
            id="accessCode-group"
            label="Game access Code"
            label-for="accessCode-input"
          >
            <b-form-input
                id="accessCode-input"
                v-model="accessCode"
                type="text"
                required
                placeholder="Enter game access code"
            ></b-form-input>
          </b-form-group>
          <!-- Game configurations -->
          <b-form-group
              id="configuration-group"
              label="Game access Code"
              label-for="accessCode-input"
          >
            <b-form-select
              v-model="configuration"
              :options="configurations"
            >
            </b-form-select>
          </b-form-group>
        </b-form>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import configurationService from '@/services/configurationServices';
export default {
  name: "CreateGameModal",
  data () {
    return {
      accessCode: '',
      configuration: '',
      configurations: []
    }
  },
  methods: {
    loadData () {

    }
  }
}
</script>

<style scoped>

</style>
