<template>
  <header class="header">
    <h1>{{ store.space.fold('')(({ name }) => name) }}</h1>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { Store, store } from '@/store';

@Component
export default class Header extends Vue {
  private store: Store = store;
}
</script>

<style scoped lang="scss">
.header {
  background: red;
}
</style>
