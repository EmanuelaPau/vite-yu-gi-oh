<template>
    <div class="my_card-container">
        <!-- <h3>CardElement</h3> -->
        <img :src="cardImage" alt="">
        <div class="card-infos-container">
            <h1>{{ cardName }}</h1>
            <h2>{{ cardType }}</h2>
        </div>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { store } from '../store.js';

export default {
    name: 'CardElement',
    components: {
        store,
    },
    data() {
        return {
            store,
        }
    },
    methods() {
    },
    props: {
        cardName: String,
        cardType: String,
        cardImage: String,
    }
}		
</script>
<style scoped lang="scss">
@use '../styles/partials/_variables.scss';
@use '../styles/partials/_mixins.scss';

img {
    width: 100%;
    // margin-bottom: 20px;
}

div.my_card-container {
    // width: calc(100% / 5 - 20px);
    text-align: center;
    // height: 500px;


    h1 {
        color: white;
        text-transform: uppercase;
        font-size: 1.3rem;
        font-weight: 600;
        line-height: 1.8rem;

        margin-bottom: 20px;
    }

    h2 {
        font-size: 1.3rem;
        font-weight: 300;


    }

    div.card-infos-container {
        padding: 20px 0;
        background-color: #d48f38;
        height: 150px;
        margin-bottom: 20px;

    }
}
</style> 