<template>
    <div class="text-center hero">
        <img class="mb-3 app-logo" src="/logo.png" alt="Vue.js logo" width="120" />
        <h1 class="mb-4">Welcome to John's House</h1>
        <div>{{ message }}</div>
    </div>
</template>
  

<script>
    export default {
        name: "HomeComponent",
        data() {
            return {
                message: ""
            };
        },
        async mounted() {
            const { text } = await (await fetch("/api/message")).json();
            this.message = text;
        }
    };
</script>