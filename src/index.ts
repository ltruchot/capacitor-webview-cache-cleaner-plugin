import { registerPlugin } from '@capacitor/core';

import type { CapacitorWebviewCacheCleanerPlugin } from './definitions';

const CapacitorWebviewCacheCleaner =
  registerPlugin<CapacitorWebviewCacheCleanerPlugin>(
    'CapacitorWebviewCacheCleaner',
    {
      web: () =>
        import('./web').then(m => new m.CapacitorWebviewCacheCleanerWeb()),
    },
  );

export * from './definitions';
export { CapacitorWebviewCacheCleaner };
