<template>
    <main>
        <!-- <h1>Main</h1> -->
        <div class="main-container">


            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Alien
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>

            <CardContainer />
        </div>
    </main>
</template>

<script>
import CardContainer from './CardContainer.vue'

export default {
    name: 'AppMain',

    components: {
        CardContainer,
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

div.main-container {
    padding: 30px 100px;
    background-color: #d48f38;
}

div.dropdown {
    margin-bottom: 30px;
}
</style> 