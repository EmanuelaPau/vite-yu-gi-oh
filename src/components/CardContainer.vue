<template>
    <AppSearchbar />
    <div class="my_cards-container">
        <div class="container p-0">
            <div class="row card-row m-0 p-0">
                <div class="my_card-counter col-12">
                    <h2>Found {{ store.cardList.length }} cards</h2>
                </div>
                <AppLoader v-if="store.cardList.length === 0" />
                <div @select="clickTest">Ciao {{ scritta }}</div>
                <CardElement class="col-lg-3 col-md-6 col-12" v-for="card in store.cardList" :cardName="card.name"
                    :cardType="card.type" :cardImage="card.card_images[0].image_url">
                </CardElement>
            </div>
        </div>
    </div>
</template>

<script>
import CardElement from './CardElement.vue';
import AppLoader from './AppLoader.vue'
import { store } from '../store.js';
import AppSearchbar from './AppSearchbar.vue'

export default {
    name: 'CardContainer',

    components: {
        CardElement,
        store,
        AppLoader,
        AppSearchbar,
    },

    data() {
        return {
            store,
            scritta: 'boh',
        }
    },

    methods: {
        clickTest() {
            // scritta = element;
            console.log('scritta')
            // return scritta;
        },

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