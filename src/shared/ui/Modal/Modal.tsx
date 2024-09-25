import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  isOpen: boolean;

  onClose: () => void;
}>;

const Modal = (props: Props) => {
  const isActiveMap = new Map([
    [true, 'active'],
    [false, ''],
  ]);

  return (
    <div
      className={`modal-overlay ${isActiveMap.get(props.isOpen)}`}
      id="modal"
      onClick={props.onClose}
    >
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close text-black" onClick={props.onClose}>
          ×
        </button>

        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
