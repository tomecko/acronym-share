import { getId } from '@/helpers/get-id';
import { EntryStatus } from '@/model/entry-status';
import { router } from '@/router';
import { store } from '@/services/store';

export const setText = (fieldName: string, text: string) => {
  store.setText(fieldName, text);
  if (store.entryStatus === EntryStatus.Synced) {
    store.setEntryStatus(EntryStatus.Unsaved);
    router.push(`/${router.currentRoute.params.spaceName}/${getId()}`);
  }
};
