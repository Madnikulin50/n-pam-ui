<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item">
          <router-link :to="'/dashboard'" class="nav-link">
            <i class="icon-speedometer"></i> Dashboard </router-link>
        </li>
        <li class="nav-title">
          Storage
        </li>
        <router-link tag="li" class="nav-item nav-dropdown" :to="{ path: '/storage'}" disabled>
          <div class="nav-link nav-dropdown-toggle" @click="handleClick">
            <i class="icon-envelope"></i> Incidents</div>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <router-link :to="'/storage/all'" class="nav-link" exact>
                <i class="icon-envelope"></i> All</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/storage/by-id'" class="nav-link" exact>
                <i class="icon-puzzle"></i> Incident by ID</router-link>
            </li>
          </ul>
        </router-link>
        <router-link tag="li" class="nav-item nav-dropdown" :to="{ path: '/users'}" disabled>
          <div class="nav-link nav-dropdown-toggle" @click="handleClick">
            <i class="icon-people"></i> Users</div>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <router-link :to="'/users/all'" class="nav-link" exact>
                <i class="icon-people"></i> All</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/users/rating'" class="nav-link" exact>
                <i class="icon-star"></i> Rating</router-link>
            </li>
          </ul>
        </router-link>
        <router-link tag="li" class="nav-item nav-dropdown" :to="{ path: '/storage'}" disabled>
          <div class="nav-link nav-dropdown-toggle" @click="handleClick">
            <i class="icon-puzzle"></i> Examples</div>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <router-link :to="'/components/cards'" class="nav-link" exact><i class="icon-puzzle"></i> ---Cards</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/components/forms'" class="nav-link" exact><i class="icon-puzzle"></i> ---Forms</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/components/modals'" class="nav-link" exact><i class="icon-puzzle"></i> ---Modals</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/components/switches'" class="nav-link" exact><i class="icon-puzzle"></i> ---Switches</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/components/tables'" class="nav-link" exact><i class="icon-puzzle"></i> ---Tables</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/icons/glyphicons-filetypes'" class="nav-link" exact><i class="icon-star"></i> Glyphicons Filetypes</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/icons/glyphicons-social'" class="nav-link" exact><i class="icon-star"></i> Glyphicons Social</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/icons/simple-line-icons'" class="nav-link" exact><i class="icon-star"></i> Simple Line Icons</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/widgets'" class="nav-link" exact>
                <i class="icon-calculator"></i> Widgets
                <span class="badge badge-info">NEW</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/charts'" class="nav-link" exact>
                <i class="icon-pie-chart"></i> Charts</router-link>
            </li>
          </ul>
        </router-link>
        <li class="divider"></li>
        <li class="nav-title">
          Preferencies
        </li>
        <li class="nav-item nav-dropdown">
          <a class="nav-link nav-dropdown-toggle" href="#" @click="handleClick">
            <i class="icon-target"></i> Agents  <i class="icon-plus"></i>
          </a>
          <ul class="nav-dropdown-items">
            <li v-for="a in agents" v-bind:key="a.id" class="nav-item">
              <router-link :to="{path: '/agent/' + a.id}" class="nav-link" exact>{{a.title}}</router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item nav-dropdown">
          <a class="nav-link nav-dropdown-toggle" href="#" @click="handleClick">
            <i class="icon-shield"></i> Policies  <i class="icon-plus"></i>
          </a>
          <ul class="nav-dropdown-items">
            <li v-for="p in policies" v-bind:key="p.id" class="nav-item">
              <router-link :to="'/policy/' + p.id" class="nav-link" exact>{{p.name}}</router-link>
            </li>
          </ul>
        </li>
  
        <li class="nav-item nav-dropdown">
          <a class="nav-link nav-dropdown-toggle" href="#" @click="handleClick">
            <i class="icon-loop"></i> Actions   <i class="icon-plus"></i>
          </a>
          <ul class="nav-dropdown-items">
            <li v-for="a in actions" v-bind:key="a.id" class="nav-item">
              <router-link :to="'/action/' + a.id" class="nav-link" exact>{{a.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapGetters/* , mapActions */} from 'vuex'
export default {
  name: 'sidebar',
  computed: mapGetters({
    agents: 'allAgents',
    policies: 'allPolicies',
    actions: 'allActions'
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
    this.$store.dispatch('getAllActions')
    this.$store.dispatch('getAllAgents')
    this.$store.dispatch('getAllPolicies')
  }
}
</script>

<style lang="css">
.nav-link {
  cursor: pointer;
}
</style>
