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

import Footer from './components/Footer.vue';
import Goal from './components/Goal.vue';
import Header from './components/Header.vue';
import { defaultSpace, spaces } from './config/spaces';
import { ISpace } from './model/space';
import { entryService } from './services/entry';
import { Store, store } from './store';

@Component({
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
    entryService.get(this.$route.params.entryId).then((entry) => {
      store.updateWithEntry(entry);
    });
  }
}
</script>

<style scoped lang="scss">
@import url('../node_modules/normalize.css');
@import 'global';

$appHeaderHeight: 100px;

.app-header {
  height: $appHeaderHeight;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
}

.goal {
  padding-top: $appHeaderHeight;
}

</style>
