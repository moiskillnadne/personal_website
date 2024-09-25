import { Modal, useModal } from '~/shared/ui';
import { SupportLink } from './types';
import { useState } from 'react';

type Props = {
  link: SupportLink;
};

export const CardLink = ({ link }: Props) => {
  const { isOpen, openModal, closeModal } = useModal();

  const [copyButtonText, setCopyButtonText] = useState<string>('Скопировать адрес');

  const onClick = () => {
    if (link.type === 'fiat') {
      return window.open(link.url, '_blank');
    }

    if (link.type === 'crypto') {
      return openModal();
    }
  };

  const onAddressCopyClick = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopyButtonText('Скопировано!');

    setTimeout(() => {
      setCopyButtonText('Скопировать адрес');
    }, 1500); // 1.5s
  };

  return (
    <>
      <div
        onClick={onClick}
        className="clickable-card w-[250px] h-[100px] flex justify-center items-center text-[20px]"
      >
        {link.title}
      </div>

      {link.type === 'crypto' && (
        <Modal isOpen={isOpen} onClose={closeModal}>
          <div className="py-[20px] text-[24px] flex flex-col items-center">
            <div className="text-black my-[12px]">{link.title}</div>
            <div className="text-black my-[12px]">
              <img src={link.qrcode} alt="" className="h-[250px]" />
            </div>

            <div className="text-[18px] text-slate-600 my-[12px]">Сеть: {link.network}</div>
            <div className="text-[18px] text-slate-600 my-[12px]">{link.address}</div>
            <button
              className="button-apple-style text-black"
              onClick={() => onAddressCopyClick(link.address)}
            >
              <p className="text-black text-[18px]">{copyButtonText}</p>
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};
