import { EntryStatus } from '@/model/entry-status';
import { entryService } from '@/services/entry';
import { store } from '@/services/store';
import { router } from '@/router';

export const saveEntry = () => {
  store.setEntryStatus(EntryStatus.Syncing);
  entryService.create(store.getEntry(router.currentRoute.params.entryId))
    .then(() => {
      store.setEntryStatus(EntryStatus.Synced);
    });
};
