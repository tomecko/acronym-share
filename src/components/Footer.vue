<template>
  <footer class="footer">
    <p>
      acronymhub.com is a free service for creating, sharing and reviewing
      acronym-based information. Well known example is a SMART goal-setting rule.<br/>
    </p>
    <p class="above-list">
      See also (opens in a new tab):
    </p>
    <ul class="space-links">
      <li
        v-for="[name] in spaces.entrySeq().toArray()"
        :key="name"
        class="space-link-item"
      >
        <a
          class="space-link on-primary-dark"
          :href="`/${name}`"
          target="_blank"
        >
          {{ name }}
        </a>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import { OrderedMap } from 'immutable';
import { Component, Vue } from 'vue-property-decorator';

import { ISpace } from '@/model/space';
import { spaces } from '@/config/spaces';

@Component
export default class Footer extends Vue {
  private spaces: OrderedMap<string, ISpace> = spaces;
}
</script>

<style scoped lang="scss">
@import '../global';

.footer {
  $radius: 4px;

  background: $primaryDark;
  border-bottom-left-radius: $radius;
  border-bottom-right-radius: $radius;
  color: $primaryLight;
  padding: 15px;
}

.space-links {
  margin-top: 5px;
}

.space-link-item {
  display: inline-block;
}

.space-link {
  margin-right: 20px;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
