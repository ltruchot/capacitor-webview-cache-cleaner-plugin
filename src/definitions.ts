export interface CapacitorWebviewCacheCleanerPlugin {
  clearWebViewCache(): Promise<{ value: string }>;
}
