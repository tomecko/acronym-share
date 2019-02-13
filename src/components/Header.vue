<template>
  <header class="header">
    <h1>
      {{ store.space.fold('')(({ name }) => name) }}
    </h1>
    <button
      @click="saveEntry"
      :class="store.entryStatus"
      :disabled="saveDisabled"
      class="save"
    >
      {{ saveText }}
    </button>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { saveEntry } from '@/actions/save-entry';
import { EntryStatus } from '@/model/entry-status';
import { entryService } from '@/services/entry';
import { Store, store } from '@/services/store';

@Component
export default class Header extends Vue {
  private store: Store = store;
  private saveEntry = saveEntry;

  get saveDisabled(): boolean {
    return ![EntryStatus.New, EntryStatus.Unsaved]
      .includes(this.store.entryStatus);
  }

  get saveText(): string {
    return this.store.entryStatus === EntryStatus.Synced
      ? 'saved'
      : 'save';
  }
}
</script>

<style scoped lang="scss">
@import '../global';

.header {
  display: flex;

  background: $primaryLight;
  color: $primaryLightText;
  border-bottom: 4px solid $primaryDark;
}

h1 {
  flex: 5 300px;

  line-height: 60px;
  margin: 0;
  padding: 0 20px;
  text-transform: uppercase;
}

.save {
  flex: 1;

  background: $secondary;
  border: 0;
  color: $secondaryText;
  cursor: pointer;
  display: block;
  font-size: 1.5em;
  padding: 15px 1em;
  text-transform: uppercase;

  &.synced {
    background: transparent;
    color: $primaryText;
  }

  &.syncing {
    cursor: wait;
  }

  &,
  &:focus {
    outline: 0;
  }
}
</style>
