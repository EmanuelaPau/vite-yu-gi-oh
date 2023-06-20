<template>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle my_button" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            Choose the archetype
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li v-for="archetype in store.cardList"><a class="dropdown-item" href="#">Action</a></li>
        </ul>
    </div>
</template>

<script>
import { store } from '../store.js';

export default {
    name: 'AppMain',

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
}		
</script>
<style scoped lang="scss">
@use '../styles/partials/_variables.scss';
@use '../styles/partials/_mixins.scss';

button.my_button {
    background-color: white;
    color: black;
    border: none;
}

div.dropdown {
    margin-bottom: 30px;
}
</style> 