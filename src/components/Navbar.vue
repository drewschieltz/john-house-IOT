<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand mr-auto" href="/">John's IOT Portal</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/thermostats" a class="nav-link">Thermostats</router-link>
                </li>
            </ul>
        </div>
        <ul class="navbar-nav">
            <li v-if="!isAuthenticated && !isLoading" class="nav-item user-unauthenticated">
                <button class="btn btn-light btn-margin login-btn" @click.prevent="login">Login</button>
            </li>
            <li v-if="isAuthenticated" class="nav-item user-authenticated">
                <a class="nav-link dropdown-toggle" href="#" id="profileDropDown" data-toggle="dropdown">
                    <img :src="user.picture" alt="User" class="nav-user-profile rounded-circle" width="50"/>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <div class="dropdown-header">{{ user.name }}</div>
                    <a href="#" class="dropdown-item logout-btn" @click.prevent="logout">Logout</a>
                </div>
            </li>
        </ul>
    </nav>
</template>


<script>
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  name: "NavbarComponent",
  setup() {
    const auth0 = useAuth0();
    
    return {
      user: auth0.user,
      isLoading: auth0.isLoading,
      isAuthenticated: auth0.isAuthenticated,
      login() { auth0.loginWithRedirect(); },
      logout() { auth0.logout({ returnTo: window.location.origin }); }
    }
  }
};
</script>


<style>
.navbar {
    min-height: 85px;
}

.navbar-toggler {
    margin-left: 10px;
}

.navbar-brand {
    margin-left: 10px;
}

.nav-item {
    margin-left: 40px;
}

.user-authenticated {
    position: absolute;
    top: 17px;
    right: 0px;
}

.user-unauthenticated {
    position: absolute;
    top: 22.5px;
    right: 10px;
}

.dropdown-menu {
    position: absolute;
    top: 65px;
    float: none;
}
</style>