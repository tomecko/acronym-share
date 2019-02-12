<template>
  <footer class="footer">
    <p>
      The website acronymshare.com is a free service for creating,
      sharing and reviewing acronym-based information like well-known SMART
      used for defining objectives.
    </p>
    <p class="above-list">
      See also (opens in a new tab):
    </p>
    <ul class="space-links">
      <li
        v-for="[name, space] in spaces.entrySeq().toArray()"
        :key="name"
        class="space-link-item"
      >
        <a
          class="space-link on-primary-dark"
          :href="`/${name}`"
          target="_blank"
        >
          {{ space.name }}
        </a>
      </li>
    </ul>
    <p>
      See
      <a
        class="on-primary-dark"
        href="https://en.wikipedia.org/wiki/SMART_criteria"
        target="_blank"
      >
        https://en.wikipedia.org/wiki/SMART_criteria
      </a>
    </p>
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
  background: $primaryDark;
  color: $primaryLight;
  padding: 15px;
}

.space-links {
  margin-bottom: 15px;
  margin-top: 5px;
}

.space-link-item {
  display: inline-block;
  margin-bottom: 5px;
}

.space-link {
  margin-right: 20px;
  text-transform: uppercase;
}
</style>
