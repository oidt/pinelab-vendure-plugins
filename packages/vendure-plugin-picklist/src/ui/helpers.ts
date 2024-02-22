import { LocalStorageService } from '@vendure/admin-ui/core';

export async function downloadBlob(
  blob: Blob,
  fileName: string,
  openInNewTab = false
): Promise<void> {
  const blobUrl = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.setAttribute('hidden', 'true');
  a.href = blobUrl;
  if (!openInNewTab) {
    a.download = fileName;
  }
  a.setAttribute('target', '_blank');
  a.click();
}

export function getHeaders(
  localStorageService: LocalStorageService
): Record<string, string> {
  const headers: Record<string, string> = {};
  const channelToken = localStorageService.get('activeChannelToken');
  if (channelToken) {
    headers['vendure-token'] = channelToken;
  }
  const authToken = localStorageService.get('authToken');
  if (authToken) {
    headers.authorization = `Bearer ${authToken}`;
  }
  headers['Content-Type'] = 'application/json';
  return headers;
}
