<template>
  <header class="header">
    <h1>{{ store.space.fold('')(({ name }) => name) }}</h1>
    <button
      @click="saveEntry"
      :disabled="store.isEntrySyncing()"
    >
      save ({{ store.entryStatus }})
    </button>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { saveEntry } from '@/actions/save-entry';
import { entryService } from '@/services/entry';
import { Store, store } from '@/services/store';

@Component
export default class Header extends Vue {
  private store: Store = store;
  private saveEntry = saveEntry;
}
</script>

<style scoped lang="scss">
.header {
  background: red;
}
</style>
