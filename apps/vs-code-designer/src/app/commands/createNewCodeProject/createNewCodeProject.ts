/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { funcVersionSetting, projectLanguageSetting, projectOpenBehaviorSetting, projectTemplateKeySetting } from '../../../constants';
import { localize } from '../../../localize';
import { addLocalFuncTelemetry, tryGetLocalFuncVersion, tryParseFuncVersion } from '../../utils/funcCoreTools/funcVersion';
import { getGlobalSetting, getWorkspaceSetting } from '../../utils/vsCodeConfig/settings';
import { OpenBehaviorStep } from '../createNewProject/OpenBehaviorStep';
import { FolderListStep } from '../createNewProject/createProjectSteps/FolderListStep';
import { OpenFolderStepCodeProject } from './CodeProjectBase/OpenFolderStepCodeProject';
import { NewCodeProjectTypeStep } from './createCodeProjectSteps/NewCodeProjectTypeStep';
import { setWorkspaceName } from './createCodeProjectSteps/SetWorkspaceName';
import { setMethodName } from './createCodeProjectSteps/createFunction/setMethodName';
import { setNameSpace } from './createCodeProjectSteps/createFunction/setNamepSpace';
import { isString } from '@microsoft/utils-logic-apps';
import { AzureWizard } from '@microsoft/vscode-azext-utils';
import type { IActionContext } from '@microsoft/vscode-azext-utils';
import { latestGAVersion, OpenBehavior } from '@microsoft/vscode-extension';
import type { ICreateFunctionOptions, IFunctionWizardContext, ProjectLanguage, ProjectVersion } from '@microsoft/vscode-extension';
import * as fse from 'fs-extra';
import * as path from 'path';
import { window } from 'vscode';

export async function createNewCodeProjectFromCommand(
  context: IActionContext,
  folderPath?: string | undefined,
  language?: ProjectLanguage,
  version?: ProjectVersion,
  openFolder = true,
  templateId?: string,
  functionName?: string,
  functionSettings?: { [key: string]: string | undefined }
): Promise<void> {
  await createNewCodeProjectInternal(context, {
    folderPath: isString(folderPath) ? folderPath : undefined,
    templateId,
    functionName,
    functionSettings,
    suppressOpenFolder: !openFolder,
    language,
    version,
  });
}

export async function createNewCodeProjectInternal(context: IActionContext, options: ICreateFunctionOptions): Promise<void> {
  addLocalFuncTelemetry(context);

  const language: ProjectLanguage | undefined = (options.language as ProjectLanguage) || getGlobalSetting(projectLanguageSetting);
  const version: string = options.version || getGlobalSetting(funcVersionSetting) || (await tryGetLocalFuncVersion()) || latestGAVersion;
  const projectTemplateKey: string | undefined = getGlobalSetting(projectTemplateKeySetting);
  const wizardContext: Partial<IFunctionWizardContext> & IActionContext = Object.assign(context, options, {
    language,
    version: tryParseFuncVersion(version),
    projectTemplateKey,
  });

  if (options.folderPath) {
    new FolderListStep.setProjectPath(wizardContext, options.folderPath);
  }

  if (options.suppressOpenFolder) {
    wizardContext.openBehavior = OpenBehavior.dontOpen;
  } else if (!wizardContext.openBehavior) {
    wizardContext.openBehavior = getWorkspaceSetting(projectOpenBehaviorSetting);
    context.telemetry.properties.openBehaviorFromSetting = String(!!wizardContext.openBehavior);
  }

  const wizard: AzureWizard<IFunctionWizardContext> = new AzureWizard(wizardContext, {
    title: localize('createNewCodeProject', 'Create new code project'),
    promptSteps: [
      new FolderListStep(),
      new setWorkspaceName(),
      new setMethodName(),
      new setNameSpace(),
      new NewCodeProjectTypeStep(options.templateId, options.functionSettings),
      new OpenBehaviorStep(),
    ],
    executeSteps: [new OpenFolderStepCodeProject()],
  });

  await wizard.prompt();
  await wizard.execute();

  await createArtifactsFolder(context as IFunctionWizardContext);

  window.showInformationMessage(localize('finishedCreating', 'Finished creating project.'));
}

async function createArtifactsFolder(context: IFunctionWizardContext): Promise<void> {
  fse.mkdirSync(path.join(context.projectPath, 'Artifacts', 'Maps'), { recursive: true });
  fse.mkdirSync(path.join(context.projectPath, 'Artifacts', 'Schemas'), { recursive: true });
}
