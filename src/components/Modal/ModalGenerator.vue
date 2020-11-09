<template>
  <b-modal
    ref="modal"
    hide-footer
    hide-header
  >
    <div class="modal-body">
      <create-config-modal v-if="modalToOpen === 'createConfig'"/>
    </div>
  </b-modal>
</template>

<script>
import CreateConfigModal from "@/components/Modal/Modals/CreateConfigModal";
export default {
  name: "ModalGenerator",
  components: {CreateConfigModal},
  data () {
    return {
      modalToOpen: '',
      id: null
    }
  },
  created () {
    this.$root.$on('open-modal', this.openModal);
    this.$root.$on('close-modal', this.closeModal);
  },
  methods: {
    openModal(props) {
      this.modalToOpen = props[0];
      this.id = props[1];
      if(typeof this.$refs['modal'] !== 'undefined') {
        this.$refs['modal'].show();
      } else {
        console.log(this.$refs['modal'])
      }
    },
    closeModal () {
      this.modalToOpen = '';
      this.id = null;
      this.$refs['modal'].hide();
    }
  }
}
</script>

<style scoped>

</style>
