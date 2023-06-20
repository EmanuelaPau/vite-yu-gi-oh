<template>
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'
import { store } from './store';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  created() {
    // Make a request for a user with a given ID


  }
  ,
  methods() { },
}
</script>

<style lang="scss">
@import './styles/general.scss';
// Import all of Bootstrap's CSS
@import "../node_modules/bootstrap/scss/bootstrap";
</style>
