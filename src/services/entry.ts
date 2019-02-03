import { IEntry } from '@/model/entry';

class EntryService {
  public get(id: string): Promise<IEntry> {
    return Promise.resolve({
      texts: {
        s: 'sssssss' + id,
        r: 'rrr' + id,
      },
    });
  }
}

export const entryService = new EntryService();
