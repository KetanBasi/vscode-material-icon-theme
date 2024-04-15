import { commands } from 'vscode';
import { activateIcons } from './activate';
import { toggleExplorerArrows } from './explorerArrows';
import { changeFileColor } from './fileColor';
import { changeFolderColor } from './folderColor';
import { changeFolderTheme } from './folders';
import { toggleGrayscale } from './grayscale';
import { toggleIconPacks } from './iconPacks';
import { changeOpacity } from './opacity';
import { restoreDefaultConfig } from './restoreConfig';
import { changeSaturation } from './saturation';
import { toggleNextJS } from './frameworkSupportsNextJS';

const extensionCommands: { [commmand: string]: () => Promise<void> } = {
  activateIcons,
  toggleIconPacks,
  changeFolderTheme,
  changeFolderColor,
  changeFileColor,
  restoreDefaultConfig,
  toggleExplorerArrows,
  changeOpacity,
  toggleGrayscale,
  changeSaturation,
};

const frameworkSupports: { [command: string]: () => Promise<void> } = {
  toggleNextJS,
};

export const registered = Object.keys(extensionCommands)
  .map((commandName) => {
    const callCommand = () => extensionCommands[commandName]();
    return commands.registerCommand(
      `material-icon-theme.${commandName}`,
      callCommand
    );
  })
  .concat(
    Object.keys(frameworkSupports).map((commandName) => {
      const callCommand = () => frameworkSupports[commandName]();
      return commands.registerCommand(
        `material-icon-theme.frameworkSupports.${commandName}`,
        callCommand
      );
    })
  );
