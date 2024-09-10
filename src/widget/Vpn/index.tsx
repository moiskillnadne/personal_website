import './style.css';

import Box from '~/shared/ui/Box';
import { VpnSvgClose } from './Icons/VpnSvgClose';
import { useState } from 'react';
import { Steps } from './Steps';

export const VpnWidget = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => {
    setIsOpen(true);
  };

  return (
    <Box
      display="flex"
      flex={1}
      justifyContent="center"
      alignItems="center"
      className="vpn-widget-root"
      flexDirection="column"
    >
      <Box display="flex" flexDirection="column">
        <Box
          display="flex"
          flexDirection="column"
          gap="16px"
          alignItems="center"
          className={`want-vpn-wrapper-default ${isOpen ? 'want-vpn-wrapper-default-open' : ''}`}
        >
          <VpnSvgClose width={isOpen ? '80px' : '178px'} height={isOpen ? '80px' : '178px'} />
          <button
            type="button"
            style={{ opacity: isOpen ? '0' : '1' }}
            className="button-apple-style header-right-button font-bold"
            onClick={open}
          >
            Получить VPN
          </button>

          <Steps isOpen={isOpen} />
        </Box>
      </Box>
    </Box>
  );
};
