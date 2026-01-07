type HEX = `#${string}`;

export interface teamConfiguration {
  team_number: number;
  team_color: HEX;
}

export interface userConfiguration {
  github_token: string;
}

export interface userConfigurationProps {
  isUserConfigurationPopUpOpen?: boolean;
  closeUserConfigurationPopUp: () => void;
  openUserConfigurationPopUp?: () => void;
}
