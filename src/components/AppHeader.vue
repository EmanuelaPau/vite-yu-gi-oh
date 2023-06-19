<template>
    <header class="d-flex align-items-center">
        <img src="../assets/Yu-Gi-Oh!_Logo.webp" alt="">
        <h1>
            Yu-Gi-Oh Api
        </h1>
    </header>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'AppHeader',
    data() {
        return {
        }
    },
    methods() {
    },
}		
</script>
<style scoped lang="scss">
@use '../styles/partials/_variables.scss';
@use '../styles/partials/_mixins.scss';

header {
    padding: 2rem;
    // background-color: aqua;
    height: 90px;
}

img {
    height: 100%;
    margin-right: 1.5rem;
}

h1 {
    font-size: 3.3rem;
    font-weight: 400;
}
</style> 
