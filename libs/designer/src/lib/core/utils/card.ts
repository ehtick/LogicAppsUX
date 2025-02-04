import type { Connector, OperationManifest } from '@microsoft/utils-logic-apps';
import { fallbackConnectorUrl } from '@microsoft/utils-logic-apps';

export function getBrandColorFromManifest(manifest: OperationManifest): string {
  return manifest.properties?.brandColor ?? getBrandColorFromConnector(manifest.properties?.connector);
}

export function getIconUriFromManifest(manifest: OperationManifest): string {
  return manifest.properties?.iconUri ?? getIconUriFromConnector(manifest.properties?.connector);
}

export function getBrandColorFromConnector(connector: Connector | undefined): string {
  if (!connector) return '#000000';
  const {
    properties: { brandColor, metadata },
  } = connector;
  return brandColor ?? metadata?.brandColor ?? '#000000';
}

export function getIconUriFromConnector(connector: Connector | undefined): string {
  if (!connector) return '';
  const {
    properties: { iconUrl, iconUri, generalInformation },
  } = connector;
  return fallbackConnectorUrl(iconUrl ?? iconUri ?? generalInformation?.iconUrl);
}
