import type { teamConfiguration } from '../types/userConfig';
import type { userConfiguration } from '../types/userConfig';

function storeTeamConfigInLocalStorage(teamConfiguration: teamConfiguration) {
  const teamConfigurationJson = JSON.stringify(teamConfiguration);
  localStorage.setItem('teamConfig', teamConfigurationJson);
}

function storeUserConfigInLocalStorage(userConfiguration: userConfiguration) {
  const userConfigurationJson = JSON.stringify(userConfiguration);
  localStorage.setItem('userConfig', userConfigurationJson);
}

function setConfigurationProvided() {
  localStorage.setItem('configurationProvided', 'true');
}

function storageAvailable(): boolean {
  let storage;
  try {
    storage = window['localStorage'];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}

export function storeConfiguration(
  userConfiguration: userConfiguration,
  teamConfiguration: teamConfiguration
) {
  if (!storageAvailable()) {
    throw Error('LocalStorage not available in your browser');
  }
  storeTeamConfigInLocalStorage(teamConfiguration);
  storeUserConfigInLocalStorage(userConfiguration);
  setConfigurationProvided();
}
