import { OrderedMap, OrderedSet } from 'immutable';

import { ISpace } from '@/model/space';

export const spaces = OrderedMap<ISpace>({
  smart: {
    fields: OrderedMap({
      s: OrderedSet([ {
          info: 'ssssss',
          name: 'specific',
        },
      ]),
      m: OrderedSet([
        {
          info: 'mmmmm',
          name: 'measurable',
        },
      ]),
      a: OrderedSet([
        {
          info: 'aaa',
          name: 'achievable',
        },
      ]),
      r: OrderedSet([
        {
          info: 'rr',
          name: 'relevant',
        },
      ]),
      t: OrderedSet([
        {
          info: 'tbtbtb',
          name: 'time-bound',
        },
      ]),
    }),
    name: 'smart',
  },
});

export const defaultSpace = spaces.first() as ISpace;
