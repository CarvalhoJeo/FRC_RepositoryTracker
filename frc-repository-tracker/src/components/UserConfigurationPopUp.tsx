import type { teamConfiguration, userConfiguration } from '../types/userConfig';
import type { userConfigurationProps } from '../types/userConfig';

interface ConfigurationProps {
  userConfig: userConfiguration;
  teamConfig: teamConfiguration;
}

export function ConfigurationPage({
  isUserConfigurationPopUpOpen,
  closeUserConfigurationPopUp,
}: userConfigurationProps) {
  if (!isUserConfigurationPopUpOpen) {
    return;
  }

  return (
    <form className="bg-slate-700 opacity-40" onSubmit={closeUserConfigurationPopUp}>
      <button type="submit"></button>
    </form>
  );
}
