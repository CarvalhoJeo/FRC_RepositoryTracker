import { useState } from 'react';
import type { userConfigurationProps } from '../types/userConfig';

export function usePopupControls(): userConfigurationProps {
  const [isOpen, setIsOpen] = useState(false);
  return {
    isUserConfigurationPopUpOpen: isOpen,
    closeUserConfigurationPopUp: () => setIsOpen(false),
    openUserConfigurationPopUp: () => setIsOpen(true),
  };
}
