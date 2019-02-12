import { OrderedMap, OrderedSet } from 'immutable';

import { ISpace } from '@/model/space';

const smartFields = [
  OrderedSet([
    { name: 's', title: 'specific' },
  ]),
  OrderedSet([
    { name: 'm', title: 'measurable' },
  ]),
  OrderedSet([
    { name: 'a', title: 'achievable' },
  ]),
  OrderedSet([
    { name: 'r', title: 'relevant' },
  ]),
  OrderedSet([
    { name: 't', title: 'time-bound' },
  ]),
];

export const spaces = OrderedMap({
  smart: {
    fields: OrderedSet(smartFields),
    name: 'smart',
  },
  smarter: {
    fields: OrderedSet([
      ...smartFields,
      OrderedSet([
        { name: 'e', title: 'evaulated' },
      ]),
      OrderedSet([
        { name: 'r', title: 'reviewed' },
      ]),
    ]),
    name: 'smarter',
  },
  smarty: {
    fields: OrderedSet([
      ...smartFields,
      OrderedSet([
        { name: 'y', title: 'why' },
      ]),
    ]),
    name: 'smarty',
  },
  smartvt: {
    fields: OrderedSet([
      OrderedSet([
        { name: 's', title: 'specific' },
      ]),
      OrderedSet([
        { name: 'm', title: 'measurable' },
      ]),
      OrderedSet([
        { name: 'a', title: 'achievable' },
      ]),
      OrderedSet([
        { name: 'r', title: 'relevant' },
      ]),
      OrderedSet([
        { name: 't', title: 'testable' },
      ]),
      OrderedSet([
        { name: 'v', title: 'verifiable' },
      ]),
      OrderedSet([
        { name: 't', title: 'traceable' },
      ]),
    ]),
    name: 'smart-vt',
  },
  clear: {
    fields: OrderedSet([
      OrderedSet([
        { name: 'c', title: 'challenging' },
      ]),
      OrderedSet([
        { name: 'l', title: 'legal' },
      ]),
      OrderedSet([
        { name: 'e', title: 'environment friendly' },
      ]),
      OrderedSet([
        { name: 'a', title: 'agreed' },
      ]),
      OrderedSet([
        { name: 'r', title: 'recorded' },
      ]),
    ]),
    name: 'clear',
  },
  pure: {
    fields: OrderedSet([
      OrderedSet([
        { name: 'p', title: 'positively stated' },
      ]),
      OrderedSet([
        { name: 'u', title: 'understood' },
      ]),
      OrderedSet([
        { name: 'r', title: 'relevant' },
      ]),
      OrderedSet([
        { name: 'e', title: 'ethical' },
      ]),
    ]),
    name: 'pure',
  },
});

export const defaultSpace = spaces.first() as ISpace;
