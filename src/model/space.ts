import { OrderedMap, OrderedSet } from 'immutable';

import { IFieldVariant } from './field-variant';

export interface ISpace {
  fields: OrderedSet<OrderedSet<IFieldVariant>>;
  name: string;
}
