
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand mr-auto" href="/">John's IOT Portal</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/thermostats">Thermostats</a>
                </li>
            </ul>
        </div>
        <ul class="navbar-nav fixed-right">
            <li class="nav-item navbar-right user-authenticated">
                <a class="nav-link dropdown-toggle" href="#" id="profileDropDown" data-toggle="dropdown">
                    <img :src="$auth.user.picture" alt="User" class="nav-user-profile rounded-circle" width="50"/>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <div class="dropdown-header">{{ $auth.user.name }}</div>
                    <a href="#" class="dropdown-item logout-btn" @click="$auth.logout()">Logout</a>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NavbarComponent",
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

    .user-authenticated {
        position: absolute;
        top: 10px;
        right: 15px;
    }

    .user-unauthenticated {
        position: absolute;
        top: 22.5px;
        right: 15px;
    }

    .navbar-nav .dropdown-menu {
        position: absolute;
        top: 75px;
        float: none;
    }
</style>