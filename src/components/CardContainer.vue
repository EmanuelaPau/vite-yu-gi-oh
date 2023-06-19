<template>
    <div class="my_card-container">
        <!-- <h2>Cards Container</h2> -->
        <div class="my_card-counter">
            Found {{ }}
            <h1> {{ store.searchText }}</h1>
        </div>
        <CardElement />
    </div>
</template>

<script>
import CardElement from './CardElement.vue';
import { store } from '../store.js';


export default {
    name: 'CardContainer',

    components: {
        CardElement,
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

div.my_card-container {
    background-color: white;
    padding: 50px;
}

div.my_card-counter {
    background-color: #212529;
    color: white;
    padding: 20px;
    font-size: 1.2rem;
    font-weight: 600;
}
</style> 