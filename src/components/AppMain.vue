<template>
    <main>
        <!-- <h1>Main</h1> -->
        <div class="main-container">


            <CardContainer />
        </div>
    </main>
</template>

<script>
import CardContainer from './CardContainer.vue'
import { store } from '../store.js';


export default {
    name: 'AppMain',

    components: {
        CardContainer,
        store,

    },

    data() {
        return {
            store,
        }
    },
    methods() {
    },
}		
</script>
<style scoped lang="scss">
@use '../styles/partials/_variables.scss';
@use '../styles/partials/_mixins.scss';

div.main-container {
    padding: 30px 100px;
    background-color: #d48f38;
}

div.dropdown {
    margin-bottom: 30px;
}
</style> 