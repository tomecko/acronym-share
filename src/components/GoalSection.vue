<template>
  <section class="goal-section">
    <header class="header">
      <h2>{{ name }}</h2>
      <p><slot /></p>
    </header>
    <textarea
      @input="$emit('input', $event.target.value)"
      :disabled="store.isEntrySyncing()"
      :placeholder="store.isEntrySyncing() ? 'loading…' : 'type here…'"
      :value="value"
      class="input"
    />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { Store, store } from '@/services/store';

@Component
export default class GoalSection extends Vue {
  @Prop(String) private name!: string;
  @Prop(String) private value!: string;
  private store: Store = store;
}
</script>

<style scoped lang="scss">
.goal-section {
  display: flex;

  border-bottom: 1px solid #eee;
}

.header {
  background: green;
  flex: 0 300px;
  padding: 1em;

  h2 {
    margin: 0;
  }
}

.input {
  background: #eee;
  flex: 1;

  border: 0;
  outline: 0;
  padding: 1em;

  &[disabled] {
    background: #ddd;
  }
}

</style>
