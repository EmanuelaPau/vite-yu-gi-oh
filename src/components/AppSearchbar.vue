<template>
    <!-- <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle my_button" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            Choose an archetype
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li v-for="archetype in archetypeList" @click="$emit('mySelect', archetype)"><a class=" dropdown-item"
                    href="#">{{
                        archetype.archetype_name
                    }}</a></li>
        </ul>
    </div> -->

    <select class="form-select" aria-label="Default select example">
        <option selected>Choose an archetype</option>
        <option v-for="archetype in archetypeList" @click="$emit('mySelect', archetype)" value="archetype.archetype_name">{{
            archetype.archetype_name }}</option>
    </select>
</template>

<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppMain',

    components: {
        store,
    },

    data() {
        return {
            store,
            archetypeList: [],
        }
    },

    created() {
        // Make a request for a user with a given ID
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then((response) => {
                this.archetypeList = response.data;
                this.archetypeList = this.archetypeList.slice(0, 8);
                console.log(this.archetypeList);
            })
            .catch(function (error) {
                // handle error 
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }
    ,

    methods: {
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

select {
    width: 200px;
    font-size: .95rem;
    margin-bottom: 30px;
}
</style> 