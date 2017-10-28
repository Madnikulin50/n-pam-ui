<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item">
          <router-link :to="'/dashboard'" class="nav-link">
            <i class="icon-speedometer"></i> Dashboard </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/store'" class="nav-link">
            <i class="icon-speedometer"></i> History </router-link>
        </li>
        <li class="nav-item nav-dropdown">
          <a class="nav-link nav-dropdown-toggle" href="#" @click="handleClick">
            <i class="icon-target"></i> Connections  <i class="icon-plus"></i>
          </a>
          <ul class="nav-dropdown-items">
            <li v-for="a in connections" v-bind:key="a.id" class="nav-item">
              <router-link :to="{path: '/connection/' + a.id}" class="nav-link" exact>{{a.title}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'sidebar',
  computed: mapGetters({
    connections: 'allConnections'
  }),
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }/*  ,
    mapActions([
      'addToCart'
    ]) */
  },
  created () {
    this.$store.dispatch('getAllConnections')
  }
}
</script>

<style lang="css">
.nav-link {
  cursor: pointer;
}
</style>
