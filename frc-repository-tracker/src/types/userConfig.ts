type HEX = `#${string}`;

export interface teamConfiguration {
  team_number: string;
  team_color: string;
}

export interface userConfiguration {
  github_token: string;
}

export interface userConfigurationProps {
  isUserConfigurationPopUpOpen?: boolean;
  closeUserConfigurationPopUp: () => void;
  openUserConfigurationPopUp?: () => void;
}
