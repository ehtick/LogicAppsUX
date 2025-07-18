/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { debugSymbolDll, extensionBundleId } from '../../constants';
import { ext } from '../../extensionVariables';
import { localize } from '../../localize';
import { getFunctionsCommand } from './funcCoreTools/funcVersion';
import * as cp from 'child_process';
import * as fse from 'fs-extra';
import * as path from 'path';

export async function getDebugSymbolDll(): Promise<string> {
  const bundleFolderRoot = await getExtensionBundleFolder();
  const bundleFolder = path.join(bundleFolderRoot, extensionBundleId);
  const bundleVersionNumber = await getBundleVersionNumber();

  return path.join(bundleFolder, bundleVersionNumber, 'bin', debugSymbolDll);
}

/**
 * Retrieves the highest version number of the extension bundle available in the bundle folder.
 *
 * This function locates the extension bundle folder, enumerates its subdirectories,
 * and determines the maximum version number present among them. If no bundle is found,
 * it throws an error.
 *
 * @returns {Promise<string>} A promise that resolves to the highest bundle version number as a string (e.g., "1.2.3").
 * @throws {Error} If the extension bundle folder is missing or contains no subdirectories.
 */
export async function getBundleVersionNumber(): Promise<string> {
  const bundleFolderRoot = await getExtensionBundleFolder();
  const bundleFolder = path.join(bundleFolderRoot, extensionBundleId);
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
}

/**
 * Gets extension bundle folder path.
 * @returns {string} Extension bundle folder path.
 */
async function getExtensionBundleFolder(): Promise<string> {
  const command = `${getFunctionsCommand()} GetExtensionBundlePath`;
  const outputChannel = ext.outputChannel;

  if (outputChannel) {
    outputChannel.appendLog(localize('runningCommand', 'Running command: "{0}"...', command));
  }

  let extensionBundlePath = '';
  try {
    extensionBundlePath = await cp.execSync(command, { encoding: 'utf8' });
  } catch (error) {
    if (outputChannel) {
      outputChannel.appendLog(localize('bundleCommandError', 'Could not find path to extension bundle'));
      outputChannel.appendLog(JSON.stringify(error));
    }
    throw new Error(localize('bundlePathError', 'Could not find path to extension bundle.'));
  }

  extensionBundlePath = extensionBundlePath.trim().split('Microsoft.Azure.Functions.ExtensionBundle')[0];

  if (outputChannel) {
    outputChannel.appendLog(localize('extensionBundlePath', 'Extension bundle path: "{0}"...', extensionBundlePath));
  }
  return extensionBundlePath;
}

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
