<template>
    <div class="my_cards-container">
        <!-- <h2>Cards Container</h2> -->
        <div class="my_card-counter">
            <!-- <h4>Found {{ store.cardList.length }}</h4> -->
        </div>
        <div class="card-row d-flex justify-content-between flex-wrap">
            <CardElement v-for="card in store.cardList" :cardName="card.name" :cardType="card.type">
            </CardElement>
        </div>
    </div>
</template>

<script>
import CardElement from './CardElement.vue';
import { store } from '../store.js';


export default {
    name: 'CardContainer',

    components: {
        CardElement,
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

div.my_cards-container {
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

div.card-row {
    margin-bottom: 30px;
}
</style> 