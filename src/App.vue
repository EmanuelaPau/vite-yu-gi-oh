<template>
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'
import axios from 'axios';
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
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
      .then((response) => {
        // handle success
        console.log(response);
        this.store.cardList = response.data.data;
        console.log(store.cardList)
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
  methods() { },
}
</script>

<style lang="scss">
@import './styles/general.scss';
// Import all of Bootstrap's CSS
@import "../node_modules/bootstrap/scss/bootstrap";
</style>
