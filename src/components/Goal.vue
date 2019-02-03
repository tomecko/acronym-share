<template>
  <main>
    <GoalSection
      @input="store.setText(name, $event)"
      :key="name"
      :name="fieldVariants.first().name"
      :value="store.getText(name)"
      v-for="[name, fieldVariants] in store.space.orJust([]).fields.entrySeq().toArray()"
    >
      {{ name }} {{ fieldVariants.first().info }}
    </GoalSection>
  </main>
</template>

<script lang="ts">
import { Map, OrderedMap, OrderedSet } from 'immutable';
import { Component, Prop, Vue } from 'vue-property-decorator';

import { spaces } from '@/config/spaces';
import { IFieldVariant } from '@/model/field-variant';
import { ISpace } from '@/model/space';
import { Store, store } from '@/store';

import GoalSection from './GoalSection.vue';

@Component({
  components: {
    GoalSection,
  },
})
export default class Goal extends Vue {
  private store: Store = store;
}
</script>

<style scoped lang="scss">
</style>
