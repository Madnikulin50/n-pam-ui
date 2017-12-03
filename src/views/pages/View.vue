<template>
  <div class="animated fadeIn">
    
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'view',
  computed: mapGetters(
    {
      data: 'currentView'
    }
  ),
  data: function () {
    return this.$store.state.views.current
  },
  created () {
    this.$store.dispatch('get', this.$route.params.id)
  },
  watch: {
    '$route' (to, from) {
      this.$store.dispatch('set', this.data)
      this.$store.dispatch('get', this.$route.params.id)
    }
  },
  methods: {
    click () {
      // do nothing
    }
  }
}
</script>
