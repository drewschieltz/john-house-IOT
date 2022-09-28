<template>
    <NavbarComponent />
    <br />
    <HomeComponent />
</template>

<script>

import HomeComponent from '../components/Home.vue'
import NavbarComponent from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    NavbarComponent,
    HomeComponent
  }
}

</script>