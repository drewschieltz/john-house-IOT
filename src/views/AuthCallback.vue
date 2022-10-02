<template>
    <div class="authCB">Auth Callback</div>
</template>

<script>
export default {
    name: 'authCB',
    mounted() {
        this.$auth.handleAuthentication().then((data) => {
            this.$router.push({ name: 'home' })
        })
    }
}

</script>