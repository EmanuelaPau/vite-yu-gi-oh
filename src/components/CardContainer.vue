<template>
    <div>
        <h2>Cards Container</h2>
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
</style> 