<template>
  <main>
    <GoalSection
      @input="setText(fieldVariants.first().name, $event)"
      :key="fieldVariants.first().name"
      :name="fieldVariants.first().title"
      :value="store.getText(fieldVariants.first().name)"
      v-for="[name, fieldVariants] in store.space.orJust([]).fields.entrySeq().toArray()"
    >{{ fieldVariants.first().info }}</GoalSection>
  </main>
</template>

<script lang="ts">
import { Map, OrderedMap, OrderedSet } from 'immutable';
import { Component, Prop, Vue } from 'vue-property-decorator';

import { setText } from '@/actions/set-text';
import { spaces } from '@/config/spaces';
import { IFieldVariant } from '@/model/field-variant';
import { ISpace } from '@/model/space';
import { Store, store } from '@/services/store';

import GoalSection from './GoalSection.vue';

@Component({
  components: {
    GoalSection,
  },
})
export default class Goal extends Vue {
  private setText = setText;
  private store: Store = store;
}
</script>

<style scoped lang="scss">
</style>
