<template>
    <div class="my_card-container">
        <!-- <h2>Cards Container</h2> -->
        <div class="my_card-counter">
            Found 39 cards
        </div>
        <CardElement />
    </div>
</template>

<script>
import CardElement from './CardElement.vue'

export default {
    name: 'CardContainer',

    components: {
        CardElement,
    },

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