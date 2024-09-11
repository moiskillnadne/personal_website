import './style.css';

import { VpnSvgClose } from './Icons/VpnSvgClose';
import { useState } from 'react';
import { Steps } from './Steps';

export const VpnWidget = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => {
    setIsOpen(true);
  };

  return (
    <div className="vpn-widget-root flex flex-1 justify-center items-center flex-col">
      <div className="flex flex-col">
        <div
          className={`want-vpn-wrapper-default ${isOpen ? 'want-vpn-wrapper-default-open' : ''} flex flex-col gap-[16px] items-center`}
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
        </div>
      </div>
    </div>
  );
};
