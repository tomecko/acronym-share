import * as httpCode from 'http-status-codes';

import { IEntry } from '@/model/entry';
import { db, firestore } from './firebase';

class EntryService {
  private static db = db.collection('entries');

  public get(id: string): Promise<any> {
    return EntryService.db.where('publicId', '==', id).limit(1).get()
      .then((res) => res.empty
        ? Promise.reject(Error(String(httpCode.NOT_FOUND)))
        : Promise.resolve(res.docs[0].data()));
  }

  public create(entry: IEntry): Promise<any> {
    return EntryService.db.add({
      ...entry,
      added: firestore.Timestamp.now(),
    });
  }
}

export const entryService = new EntryService();
