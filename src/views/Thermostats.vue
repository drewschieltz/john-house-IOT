<template>
    <NavbarComponent />
    <br />
    <div v-if="!isAuthenticated && !isLoading">
        <UnauthorizedComponent />
    </div>
    <div v-else>
        <ThermostatsComponent />
    </div>
    
</template>

<script>

import { useAuth0 } from '@auth0/auth0-vue';
import NavbarComponent from '../components/Navbar.vue'
import ThermostatsComponent from '../components/Thermostats.vue'
import UnauthorizedComponent from '../components/Unauthorized.vue'

export default {
  name: 'Thermostats',
  components: {
    NavbarComponent,
    ThermostatsComponent,
    UnauthorizedComponent
  },
  setup() {
    const auth0 = useAuth0();

    return {
      isLoading: auth0.isLoading,
      isAuthenticated: auth0.isAuthenticated
    }
  }
}

</script>