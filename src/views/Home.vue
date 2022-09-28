<template>
    <NavComponent />
    <HomeComponent />
</template>

<script>

import NavComponent from '../components/NavComponent.vue'
import HomeComponent from '../components/HomeComponent.vue'

export default {
  name: 'Home',
  components: {
    NavComponent,
    HomeComponent
  }
}

</script>