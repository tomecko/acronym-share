import { EntryStatus } from '@/model/entry-status';
import { router } from '@/router';
import { entryService } from '@/services/entry';
import { store } from '@/services/store';

export const getEntry = () => {
  store.setEntryStatus(EntryStatus.Syncing);
  entryService.get(router.currentRoute.params.entryId)
    .then((entry) => {
      store.updateWithEntry(entry);
      store.setEntryStatus(EntryStatus.Synced);
    });
};
