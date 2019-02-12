import { Map } from 'immutable';
import { Maybe, None, Some } from 'monet';

import { IEntry } from '@/model/entry';
import { EntryStatus } from '@/model/entry-status';
import { ISpace } from '@/model/space';

export class Store {
  constructor(
    public entryStatus: EntryStatus = EntryStatus.Unfetched,
    public space: Maybe<ISpace> = None(),
    public texts: Maybe<Map<string, string>> = None(),
  ) {}

  public setEntryStatus(entryStatus: EntryStatus) {
    this.entryStatus = entryStatus;
  }

  public isEntrySyncing(): boolean {
    return this.entryStatus === EntryStatus.Syncing;
  }

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

  public getEntry(publicId: string): IEntry {
    return {
      publicId,
      texts: this.texts.orJust(Map()).toJSON(),
    };
  }

}

export const store = new Store();
