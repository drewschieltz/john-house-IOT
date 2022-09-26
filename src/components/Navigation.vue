
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand mr-auto" href="/">John Maltinksy - IOT Portal</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/thermostats">Thermostats</a>
                </li>
            </ul>
        </div>
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

.navbar-toggler {
    margin-left: 5px;
}

.navbar-brand {
    margin-left: 10px;
}

.navbar-nav {
    margin-left: 20px;
    margin-right: 20px;
}

.mobileAuthNavBar {
    min-height: 125px;
    justify-content: space-between;
}

</style>