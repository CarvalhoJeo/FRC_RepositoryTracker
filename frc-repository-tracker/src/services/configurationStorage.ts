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

export function storeConfiguration(
  userConfiguration: userConfiguration,
  teamConfiguration: teamConfiguration
) {
  storeTeamConfigInLocalStorage(teamConfiguration);
  storeUserConfigInLocalStorage(userConfiguration);
}
