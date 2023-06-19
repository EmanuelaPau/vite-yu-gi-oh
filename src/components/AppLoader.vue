<template>
    <main>
        <!-- <h1>Main</h1> -->
        <div class=" loading-page d-flex justify-content-center align-items-center">
            <div class="">
                <h1 class="text-center"> Loading</h1>
                <img src="../assets/loading.gif" alt="">
            </div>

        </div>
    </main>
</template>

<script>

export default {
    name: 'AppLoader',
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

.loading-page {
    background-color: #1d1d1d;
    height: 600px;
}

h1 {
    color: rgba(255, 255, 255, 0.35);
}
</style> 