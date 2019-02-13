<template>
  <footer class="footer">
    <p>
      The website acronymshare.com is a free service for creating,
      sharing and reviewing acronym-based information like well-known
      <a
        class="more-details-link"
        href="https://en.wikipedia.org/wiki/SMART_criteria"
        target="_blank"
      >
        SMART
      </a>
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
          class="space-link"
          :href="`/${name}`"
          target="_blank"
        >
          {{ space.name }}
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
  background: $filler;
  border-top: 2px solid $primaryDark;
  color: $primaryDark;
  padding: 20px;
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

.space-link,
.more-details-link {
  background: $secondary;
  color: $primaryDark;
  font-weight: 700;
}
</style>
