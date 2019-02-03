import { Map } from 'immutable';
import { Maybe, None, Some } from 'monet';

import { IEntry } from '@/model/entry';
import { ISpace } from '@/model/space';

export class Store {
  constructor(
    public space: Maybe<ISpace> = None(),
    public texts: Maybe<Map<string, string>> = None(),
  ) {}

  public setSpace(space: ISpace | undefined) {
    this.space = Maybe.fromNull(space);
  }

  public updateWithEntry(entry: IEntry) {
    Maybe.fromNull(entry.texts).forEach((texts) => {
      this.texts = Some(Map(texts));
    });
  }

  public getText(fieldName: string): string {
    return this.texts
      .flatMap((someTexts) => Maybe.fromNull(someTexts.get(fieldName)))
      .orJust('');
  }

  public setText(fieldName: string, text: string) {
    this.texts = Some(this.texts.orJust(Map()).set(fieldName, text));
  }

}

export const store = new Store();
