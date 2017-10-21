<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-block">
            <div class="form-group row">
              <label for="actionType" class="col-md-3 form-control-label">Type</label>
              <div class="col-md-9">
                <select v-model="data.type" class="form-control" id="actionType">
                  <option value="rdp">RDP</option>
                  <option value="vnc">VNC</option>
                  <option value="ssh">SSH</option>
                  <option value="ipp">IPP Printer</option>
                  <option value="ftp">FTP</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-3 form-control-label">Name</label>
              <div class="col-md-9">
                <input v-model="data.name" type="text" placeholder="Action name" class="form-control">
                <span class="help-block">Enter connection name</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/.col-->
    </div>
    <!--/.row-->
  </div>
</template>

<script>
import { dropdown } from 'vue-strap'
import { mapGetters } from 'vuex'

export default {
  name: 'action',
  components: {
    dropdown
  },
  computed: mapGetters(
    {
      data: 'getSettings'
    }
  ),
  created () {
    this.$store.dispatch('getSettings', this.$route.params.id)
  },
  watch: {
    '$route' (to, from) {
      this.$store.dispatch('setSettings', this.data)
      this.$store.dispatch('getSettings', this.$route.params.id)
    }
  },
  methods: {
    click () {
      // do nothing
    }
  }
}
</script>
