import { WebPlugin } from '@capacitor/core';

import type { CapacitorWebviewCacheCleanerPlugin } from './definitions';

export class CapacitorWebviewCacheCleanerWeb
  extends WebPlugin
  implements CapacitorWebviewCacheCleanerPlugin
{
  async clearWebViewCache(): Promise<{ value: string }> {
    console.log('clearWebViewCache');
    return { value: 'ok' };
  }
}
