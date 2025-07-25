/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { defaultVersionRange, extensionBundleId, localSettingsFileName, defaultExtensionBundlePathValue } from '../../constants';
import { getLocalSettingsJson } from './appSettings/localSettings';
import { downloadAndExtractDependency } from './binaries';
import { getJsonFeed } from './feed';
import type { IActionContext } from '@microsoft/vscode-azext-utils';
import type { IBundleDependencyFeed, IBundleFeed, IBundleMetadata, IHostJsonV2 } from '@microsoft/vscode-extension-logic-apps';
import * as fse from 'fs-extra';
import * as path from 'path';
import * as semver from 'semver';
import * as vscode from 'vscode';
import { localize } from '../../localize';
import { ext } from '../../extensionVariables';

/**
 * Gets bundle extension feed.
 * @param {IActionContext} context - Command context.
 * @param {IBundleMetadata | undefined} bundleMetadata - Bundle meta data.
 * @returns {Promise<IBundleFeed>} Returns bundle extension object.
 */
async function getBundleFeed(context: IActionContext, bundleMetadata: IBundleMetadata | undefined): Promise<IBundleFeed> {
  const bundleId: string = (bundleMetadata && bundleMetadata.id) || extensionBundleId;

  const envVarUri: string | undefined = process.env.FUNCTIONS_EXTENSIONBUNDLE_SOURCE_URI;
  // Only use an aka.ms link for the most common case, otherwise we will dynamically construct the url
  let url: string;
  if (!envVarUri && bundleId === extensionBundleId) {
    url = 'https://aka.ms/AAqvc78';
  } else {
    const baseUrl: string = envVarUri || 'https://cdn.functions.azure.com/public';
    url = `${baseUrl}/ExtensionBundles/${bundleId}/index-v2.json`;
  }

  return getJsonFeed(context, url);
}

/**
 * Gets Workflow bundle extension feed.
 * @param {IActionContext} context - Command context.
 * @param {IBundleMetadata | undefined} bundleMetadata - Bundle meta data.
 * @returns {Promise<IBundleFeed>} Returns bundle extension object.
 */
async function getWorkflowBundleFeed(context: IActionContext): Promise<IBundleFeed> {
  const envVarUri: string | undefined = process.env.FUNCTIONS_EXTENSIONBUNDLE_SOURCE_URI;
  const baseUrl: string = envVarUri || 'https://cdn.functions.azure.com/public';
  const url = `${baseUrl}/ExtensionBundles/${extensionBundleId}/index-v2.json`;

  return getJsonFeed(context, url);
}

/**
 * Gets extension bundle dependency feed.
 * @param {IActionContext} context - Command context.
 * @param {IBundleMetadata | undefined} bundleMetadata - Bundle meta data.
 * @returns {Promise<IBundleFeed>} Returns bundle extension object.
 */
async function getBundleDependencyFeed(
  context: IActionContext,
  bundleMetadata: IBundleMetadata | undefined
): Promise<IBundleDependencyFeed> {
  const bundleId: string = (bundleMetadata && bundleMetadata?.id) || extensionBundleId;
  const projectPath: string | undefined = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : null;
  let envVarUri: string | undefined = process.env.FUNCTIONS_EXTENSIONBUNDLE_SOURCE_URI;
  if (projectPath) {
    envVarUri = (await getLocalSettingsJson(context, path.join(projectPath, localSettingsFileName)))?.Values
      ?.FUNCTIONS_EXTENSIONBUNDLE_SOURCE_URI;
  }

  const baseUrl: string = envVarUri || 'https://cdn.functions.azure.com/public';
  const url = `${baseUrl}/ExtensionBundles/${bundleId}/dependency.json`;
  return getJsonFeed(context, url);
}

/**
 * Gets latest bundle extension version range.
 * @param {IActionContext} context - Command context.
 * @returns {Promise<string>} Returns lates version range.
 */
export async function getLatestVersionRange(context: IActionContext): Promise<string> {
  const feed: IBundleFeed = await getBundleFeed(context, undefined);
  return feed.defaultVersionRange;
}

/**
 * Gets latest bundle extension dependencies versions.
 * @param {IActionContext} context - Command context.
 * @returns {Promise<any>} Returns dependency versions.
 */
export async function getDependenciesVersion(context: IActionContext): Promise<IBundleDependencyFeed> {
  const feed: IBundleDependencyFeed = await getBundleDependencyFeed(context, undefined);
  return feed;
}

/**
 * Add bundle extension version to host.json configuration.
 * @param {IActionContext} context - Command context.
 * @param {IHostJsonV2} hostJson - Host.json configuration.
 */
export async function addDefaultBundle(context: IActionContext, hostJson: IHostJsonV2): Promise<void> {
  let versionRange: string;
  try {
    versionRange = await getLatestVersionRange(context);
  } catch {
    versionRange = defaultVersionRange;
  }

  hostJson.extensionBundle = {
    id: extensionBundleId,
    version: versionRange,
  };
}

/**
 * Gets bundle extension zip. Microsoft.Azure.Functions.ExtensionBundle.Workflows.<version>.
 * @param {IActionContext} context - Command context.
 * @param {string} extensionVersion - Bundle Extension Version.
 * @returns {string} Returns bundle extension zip url.
 */
async function getExtensionBundleZip(context: IActionContext, extensionVersion: string): Promise<string> {
  let envVarUri: string | undefined = process.env.FUNCTIONS_EXTENSIONBUNDLE_SOURCE_URI;
  const projectPath: string | undefined = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : null;
  if (projectPath) {
    envVarUri = (await getLocalSettingsJson(context, path.join(projectPath, localSettingsFileName)))?.Values
      ?.FUNCTIONS_EXTENSIONBUNDLE_SOURCE_URI;
  }
  const baseUrl: string = envVarUri || 'https://cdn.functions.azure.com/public';
  const url = `${baseUrl}/ExtensionBundles/${extensionBundleId}/${extensionVersion}/${extensionBundleId}.${extensionVersion}_any-any.zip`;

  return url;
}

/**
 * Gets the Extension Bundle Versions iterating through the default extension bundle path directory.
 * @param {string} directoryPath - extension bundle path directory.
 * @returns {string[]} Returns the list of versions.
 */
async function getExtensionBundleVersionFolders(directoryPath: string): Promise<string[]> {
  if (!(await fse.pathExists(directoryPath))) {
    return [];
  }
  const directoryContents = fse.readdirSync(directoryPath);

  // Filter only the folders with valid version names.
  const folders = directoryContents.filter((item) => {
    const itemPath = path.join(directoryPath, item);
    return fse.statSync(itemPath).isDirectory() && semver.valid(item);
  });

  return folders;
}

/**
 * Download Microsoft.Azure.Functions.ExtensionBundle.Workflows.<version>
 * Destination: C:\Users\<USERHOME>\.azure-functions-core-tools\Functions\ExtensionBundles\<version>
 * @param {IActionContext} context - Command context.
 * @returns {Promise<bool>} A boolean indicating whether the bundle was updated.
 */
export async function downloadExtensionBundle(context: IActionContext): Promise<boolean> {
  let envVarVer: string | undefined = process.env.AzureFunctionsJobHost_extensionBundle_version;
  const projectPath: string | undefined = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : null;
  if (projectPath) {
    envVarVer = (await getLocalSettingsJson(context, path.join(projectPath, localSettingsFileName)))?.Values
      ?.AzureFunctionsJobHost_extensionBundle_version;
  }

  // Check for latest version at directory.
  let latestLocalBundleVersion = '1.0.0';
  const localVersions = await getExtensionBundleVersionFolders(defaultExtensionBundlePathValue);
  for (const localVersion of localVersions) {
    latestLocalBundleVersion = semver.gt(latestLocalBundleVersion, localVersion) ? latestLocalBundleVersion : localVersion;
  }

  context.telemetry.properties.envVariableExtensionBundleVersion = envVarVer;
  if (envVarVer) {
    if (semver.eq(envVarVer, latestLocalBundleVersion)) {
      return false;
    }

    const extensionBundleUrl = await getExtensionBundleZip(context, envVarVer);
    await downloadAndExtractDependency(context, extensionBundleUrl, defaultExtensionBundlePathValue, extensionBundleId, envVarVer);
    return true;
  }

  // Check the latest from feed.
  let latestFeedBundleVersion = '1.0.0';
  const feed: IBundleFeed = await getWorkflowBundleFeed(context);
  for (const bundleVersion in feed.bundleVersions) {
    latestFeedBundleVersion = semver.gt(latestFeedBundleVersion, bundleVersion) ? latestFeedBundleVersion : bundleVersion;
  }

  context.telemetry.properties.latestBundleVersion = semver.gt(latestFeedBundleVersion, latestLocalBundleVersion)
    ? latestFeedBundleVersion
    : latestLocalBundleVersion;

  ext.defaultBundleVersion = context.telemetry.properties.latestBundleVersion;
  ext.latestBundleVersion = context.telemetry.properties.latestBundleVersion;

  if (semver.gt(latestFeedBundleVersion, latestLocalBundleVersion)) {
    const extensionBundleUrl = await getExtensionBundleZip(context, latestFeedBundleVersion);
    await downloadAndExtractDependency(
      context,
      extensionBundleUrl,
      defaultExtensionBundlePathValue,
      extensionBundleId,
      latestFeedBundleVersion
    );

    return true;
  }

  return false;
}

/**
 * Retrieves the latest version number of a bundle from the specified folder.
 * @param {string} bundleFolder - The path to the folder containing the bundle.
 * @returns The latest version number of the bundle.
 * @throws An error if the bundle folder is empty.
 */
export const getLatestBundleVersion = async (bundleFolder: string) => {
  let bundleVersionNumber = '0.0.0';

  const bundleFolders = await fse.readdir(bundleFolder);
  if (bundleFolders.length === 0) {
    throw new Error(localize('bundleMissingError', 'Extension bundle could not be found.'));
  }

  for (const file of bundleFolders) {
    const filePath: string = path.join(bundleFolder, file);
    if (await (await fse.stat(filePath)).isDirectory()) {
      bundleVersionNumber = getMaxVersion(bundleVersionNumber, file);
    }
  }

  return bundleVersionNumber;
};

/**
 * Compares and gets biggest extension bundle version.
 * @param version1 - Extension bundle version.
 * @param version2 - Extension bundle version.
 * @returns {string} Biggest extension bundle version.
 */
function getMaxVersion(version1, version2): string {
  let maxVersion = '';
  let arr1 = version1.split('.');
  let arr2 = version2.split('.');

  arr1 = arr1.map(Number);
  arr2 = arr2.map(Number);

  const arr1Size = arr1.length;
  const arr2Size = arr2.length;

  if (arr1Size > arr2Size) {
    for (let i = arr2Size; i < arr1Size; i++) {
      arr2.push(0);
    }
  } else {
    for (let i = arr1Size; i < arr2Size; i++) {
      arr1.push(0);
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      maxVersion = version1;
      break;
    }
    if (arr2[i] > arr1[i]) {
      maxVersion = version2;
      break;
    }
  }
  return maxVersion;
}
