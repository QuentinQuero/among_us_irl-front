<template>
  <div>
    <b-card
        border-variant="primary"
        :header="$t('forms.configurations.create')"
        header-bg-variant="primary"
        header-text-variant="white"
    >
      <b-card-body>
        <b-form>
          <!-- Configuration name -->
          <b-form-group
            id="name-group"
            :label="$t('forms.configurations.name')"
            label-for="name-input"
          >
            <b-form-input
              id="name-input"
              v-model="name"
              type="text"
              required
              :placeholder="$t('placeholders.configuration_name')"
            ></b-form-input>
          </b-form-group>
          <div class="row">
            <div class="col-6" style="border-right: 2px black solid">
              <!-- Player number -->
              <b-form-group
                  id="nbPlayers-group"
                  :label="$t('forms.configurations.players') + nbPlayer"
                  label-for="nbPlayer-input"
              >
                <b-form-input
                    id="nbPlayer-input"
                    v-model="nbPlayer"
                    type="range"
                    min="1"
                    max="10"
                ></b-form-input>
              </b-form-group>
              <!-- Imposter number -->
              <b-form-group
                  id="nbImposter-group"
                  :label="$t('forms.configurations.imposters') + nbImposter"
                  label-for="nbImposter-input"
              >
                <b-form-input
                    id="nbImposter-input"
                    v-model="nbImposter"
                    type="range"
                    min="1"
                    :max="nbPlayer / 2"
                ></b-form-input>
              </b-form-group>
              <!-- Cooldown -->
              <b-form-group
                  id="cooldown-group"
                  :label="$t('forms.configurations.cooldown') + cooldown"
                  label-for="cooldown-input"
              >
                <b-form-input
                    id="cooldown-input"
                    v-model="cooldown"
                    type="range"
                    min="0"
                    max="180"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-6">
              <!-- Short mission number -->
              <b-form-group
                  id="nbShortMission-group"
                  :label="$t('forms.configurations.short_missions') + nbShortMissions"
                  label-for="nbShortMission-input"
              >
                <b-form-input
                    id="nbShortMission-input"
                    v-model="nbShortMissions"
                    type="range"
                    min="1"
                    max="10"
                ></b-form-input>
              </b-form-group>
              <!-- Normal mission number -->
              <b-form-group
                  id="nbNormalMission-group"
                  :label="$t('forms.configurations.normal_missions') + nbNormalMissions"
                  label-for="nbNormalMission-input"
              >
                <b-form-input
                    id="nbNormalMission-input"
                    v-model="nbNormalMissions"
                    type="range"
                    min="1"
                    max="10"
                ></b-form-input>
              </b-form-group>
              <!-- Long mission number -->
              <b-form-group
                  id="nbLongMission-group"
                  :label="$t('forms.configurations.long_missions') + nbLongMissions"
                  label-for="nbLongMission-input"
              >
                <b-form-input
                    id="nbLongMission-input"
                    v-model="nbLongMissions"
                    type="range"
                    min="1"
                    max="3"
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
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
import configurationServices from '@/services/configurationServices'
export default {
  name: "CreateConfigModal",
  data () {
    return {
      name: '',
      cooldown: 60,
      nbPlayer: 5,
      nbImposter: 1,
      nbShortMissions: 2,
      nbNormalMissions: 2,
      nbLongMissions: 1,
    }
  },
  methods: {
    cancel () {
      this.$root.$emit('close-modal');
    },
    create () {
      configurationServices.createConfiguration(
          this.name,
          this.nbPlayer,
          this.nbImposter,
          this.cooldown,
          this.nbShortMissions,
          this.nbNormalMissions,
          this.nbLongMissions
      ).then(() => {
        this.$root.$emit('configuration-created');
        this.$root.$emit('close-modal');
      })
    }
  }
}
</script>

<style scoped>

</style>
