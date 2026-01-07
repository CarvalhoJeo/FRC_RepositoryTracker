import { useState } from 'react';
import type { userConfigurationProps } from '../types/userConfig';

export function usePopupControls(): userConfigurationProps {
  const [isOpen, setIsOpen] = useState(false);
  return {
    isUserConfigurationPopUpOpen: isOpen,
    closeUserConfigurationPopUp: () => {
      setIsOpen(false);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    },
    openUserConfigurationPopUp: () => setIsOpen(true),
  };
}
