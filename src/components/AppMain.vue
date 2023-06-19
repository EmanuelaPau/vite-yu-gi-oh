<template>
    <div>
        <h1>Main</h1>
        <CardContainer />
    </div>
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
</style> 