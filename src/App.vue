<template>
  <div id="app">
    <Header
      class="app-header"
    />
    <Goal
      class="goal"
    />
    <Footer class="app-footer" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { getEntry } from './actions/get-entry';
import Footer from './components/Footer.vue';
import Goal from './components/Goal.vue';
import Header from './components/Header.vue';
import { defaultSpace, spaces } from './config/spaces';
import { EntryStatus } from './model/entry-status';
import { ISpace } from './model/space';
import { entryService } from './services/entry';
import { Store, store } from './services/store';

@Component({
  beforeRouteUpdate: (to, from, next) => {
    next();
  },
  components: {
    Footer,
    Goal,
    Header,
  },
})
export default class App extends Vue {
  private store: Store = store;

  private created() {
    this.setStore();
  }

  private setStore() {
    store.setSpace(spaces.get(this.$route.params.spaceName));
    if (store.entryStatus === EntryStatus.Unfetched) {
      getEntry();
    }
  }
}
</script>

<style lang="scss">
@import 'global';
</style>

<style scoped lang="scss">
@import url('../node_modules/normalize.css');
@import 'global';

#app {
  margin: 0 auto;
  max-width: $appMaxWidth;
}
</style>
