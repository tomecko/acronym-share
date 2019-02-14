<template>
  <section class="goal-section">
    <header class="header">
      <h2>{{ name }}</h2>
      <p v-if="$slots.default[0].text.length > 0"><slot /></p>
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
@import '../global';

.goal-section {
  display: flex;
  flex-wrap: wrap;

  border-bottom: 1px solid #aaa;
  min-height: 150px;
}

.header {
  background: #f4f4f4;
  color: $primaryDark;
  flex: 1 300px;
  padding: 15px 20px;

  h2 {
    font-size: 1.2em;
    margin: 0;
    text-transform: uppercase;

    &::first-letter {
      font-size: 1.45em;
    }
  }
}

.input {
  background: #fff;
  flex: 100 300px;

  border: 0;
  font-size: 1.2em;
  outline: 0;
  padding: 20px 20px 30px 20px;

  &[disabled] {
    background: #ddd;
  }
}

</style>
