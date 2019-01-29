<template>
  <div id="app">
    <Header />
    <Goal />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Footer from './components/Footer.vue';
import Goal from './components/Goal.vue';
import Header from './components/Header.vue';

@Component({
  components: {
    Footer,
    Goal,
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
