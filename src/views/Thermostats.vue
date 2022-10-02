<template>
    <NavbarComponent />
    <br />
    <template v-if="!isLoading">
        <div v-if="isValidUser">
            <p>{{ user.email }}</p>
            <ThermostatsComponent />
        </div>
        <div v-else>
            <UnauthorizedComponent />
        </div>
    </template>
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
    data() {
        const auth0 = useAuth0()

        return {
          validUsers: [],
          isValidUser: false,
          isLoading: auth0.isLoading,
        }
    },
    methods : {
        async assignValidUser() {
            
            const user = await auth0.getUser()
            
            console.log(user.name)
            this.isValidUser = false

            // for (let i=0; i < this.validUsers.length; i++) {
            //     console.log(this.user.email, this.validUsers[i].emailAddress)
            //     if (this.user.email == this.validUsers[i].emailAddress) {
            //         this.isValidUser = true
            //         break
            //     }
            // }
        }
    },
    async created() {
        this.axios
            .get('api/users?page=thermostats')
            .then(response => (this.validUsers = response.data))

        this.assignValidUser()
    }
}

</script>