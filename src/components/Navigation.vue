
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand mr-auto" href="/">IOT Portal</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/thermostats">Thermostats</a>
                </li>
            </ul>
        </div>
        <ul class="navbar-nav fixed-right navbar-profile">
            <li v-if="!isAuthenticated && !isLoading" class="nav-item">
                <button id="qsLoginBtn" class="btn btn-light btn-margin" @click.prevent="login">Login</button>
            </li>
            <li class="nav-item navbar-right" v-if="isAuthenticated">
                <a class="nav-link dropdown-toggle" href="#" id="profileDropDown" data-toggle="dropdown">
                    <img :src="user.picture" alt="User" class="nav-user-profile rounded-circle" width="50"/>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <div class="dropdown-header">{{ user.name }}</div>
                    <a id="qsLogoutBtn" href="#" class="dropdown-item" @click.prevent="logout">Logout</a>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>

import { useAuth0 } from '@auth0/auth0-vue';

export default {
    name: "NavBar",
    setup() {
        const auth0 = useAuth0();
    
        return {
            user: auth0.user,
            isLoading: auth0.isLoading,
            isAuthenticated: auth0.isAuthenticated,
    
            login() {
                auth0.loginWithRedirect();
            },
    
            logout() {
                auth0.logout({
                    returnTo: window.location.origin
                });
            }
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

.navbar-nav {
    margin-left: 40px;
}

.navbar-profile {
    position: absolute;
    top: 10px;
    right: 10px;
}

.navbar-nav .dropdown-menu {
   position: absolute;
   top: 75px;
   float: none;
}

</style>