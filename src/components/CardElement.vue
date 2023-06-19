<template>
    <div class="my-column d-flex justify-content-between">
        <div class="my_card-container">
            <!-- <h3>CardElement</h3> -->
            <img src="../assets/dark-magician.jpg" alt="">
            <div class="card-infos-container">
                <h1>Very very long Name</h1>
                <h2>Card Type</h2>
            </div>
        </div>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'CardElement',
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

img {
    width: 100%;

    margin-bottom: 20px;
}

div.my_card-container {
    background-color: #d48f38;
    width: calc(100% / 4 - 20px);
    text-align: center;
    height: 500px;


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

        margin-bottom: 20px;
    }
}
</style> 