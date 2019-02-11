import { OrderedMap, OrderedSet } from 'immutable';

import { ISpace } from '@/model/space';

export const spaces = OrderedMap({
  smart: {
    fields: OrderedMap({
      s: OrderedSet([ {
          name: 'specific',
        },
      ]),
      m: OrderedSet([
        {
          name: 'measurable',
        },
      ]),
      a: OrderedSet([
        {
          name: 'achievable',
        },
      ]),
      r: OrderedSet([
        {
          name: 'relevant',
        },
      ]),
      t: OrderedSet([
        {
          name: 'time-bound',
        },
      ]),
    }),
    name: 'smart',
  },
  pure: {
    fields: OrderedMap({
      p: OrderedSet([
        {
          name: 'positively stated',
        },
      ]),
      u: OrderedSet([
        {
          name: 'understood',
        },
      ]),
      r: OrderedSet([
        {
          name: 'relevant',
        },
      ]),
      e: OrderedSet([
        {
          name: 'ethical',
        },
      ]),
    }),
    name: 'pure',
  },
});

export const defaultSpace = spaces.first() as ISpace;
