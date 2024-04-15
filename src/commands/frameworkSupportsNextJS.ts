import { window as codeWindow } from 'vscode';
import { getMaterialIconsJSON, getConfig } from '../helpers';
import { translate } from '../i18n';

export const toggleNextJS = () => {
  const status = checkNextJS();
  return setNextJS(!status);
};

const setNextJS = async (status: boolean) => {
  try {
    await getConfig().update(
      'material-icon-theme.frameworkSupports.nextJS',
      status,
      true
    );
    codeWindow.showInformationMessage(
      translate(`frameworkSupport.nextjs.${status ? 'enable' : 'disable'}`)
    );
  } catch (error) {
    console.error(error);
  }
};

export const checkNextJS = (): boolean => {
  console.log('getMaterialIconsJSON: ', getMaterialIconsJSON());
  console.log(
    'getMaterialIconsJSON Framerowk NextJS: ',
    getMaterialIconsJSON()?.options?.frameworkSupports?.nextJS
  );
  return !!getMaterialIconsJSON()?.options?.frameworkSupports?.nextJS;
};
