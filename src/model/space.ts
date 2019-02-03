import { OrderedMap, OrderedSet } from 'immutable';

import { IFieldVariant } from './field-variant';

export interface ISpace {
  fields: OrderedMap<string, OrderedSet<IFieldVariant>>;
  name: string;
}
