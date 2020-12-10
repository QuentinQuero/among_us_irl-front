<template>
  <div>
    <b-card
      border-variant="primary"
      :header="$t('forms.games.create')"
      header-bg-variant="primary"
      header-text-variant="white"
    >
      <b-card-body>
        <b-form>
          <!-- Game accessCode -->
          <b-form-group
            id="accessCode-group"
            :label="$t('forms.games.access_code')"
            label-for="accessCode-input"
          >
            <b-form-input
                id="accessCode-input"
                v-model="accessCode"
                type="text"
                required
                :placeholder="$t('placeholders.game_access_code')"
            ></b-form-input>
          </b-form-group>
          <!-- Game configurations -->
          <b-form-group
              id="configuration-group"
              :label="$t('forms.games.configuration')"
              label-for="configuration-select"
          >
            <b-form-select
                id="configuration-select"
                v-model="configurationId"
                :options="configurations"
            >
            </b-form-select>
          </b-form-group>
          <!-- Display configuration -->
          <display-configuration
              v-if="configuration"
              :configuration="configuration"
          ></display-configuration>
        </b-form>
      </b-card-body>
      <b-card-footer class="row justify-content-between">
        <b-button variant="danger" v-on:click="cancel">{{ $t('actions.cancel') }}</b-button>
        <b-button variant="primary" v-on:click="create">{{ $t('actions.create') }}</b-button>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
import gameService from '@/services/gameServices'
import configurationService from '@/services/configurationServices';
import DisplayConfiguration from "@/components/shared/displayConfiguration";
export default {
  name: "CreateGameModal",
  components: {DisplayConfiguration},
  data () {
    return {
      accessCode: '',
      configuration: '',
      configurationId: '',
      configurations: []
    }
  },
  methods: {
    loadData () {
      configurationService.getConfigurationForSelect().then((response) => {
        this.configurations = response
      }).catch((error) => {
        console.log(error)
      })
    },
    loadConfiguration () {
      configurationService.getConfigurationById(this.configurationId).then((response) => {
        this.configuration = response
      }).catch((error) => {
        console.log(error);
      })
    },
    cancel () {
      this.$root.$emit('close-modal');
    },
    create () {
      gameService.createGame(this.accessCode, this.configurationId).then(() => {
        this.$root.$emit('game-created');
        this.$root.$emit('close-modal');
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.loadData()
  },
  watch: {
    configurationId: function () {
      this.loadConfiguration();
    }
  }
}
</script>

<style scoped>
</style>
