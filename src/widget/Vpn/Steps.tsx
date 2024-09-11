type Props = {
  isOpen: boolean;
};

export const Steps = ({ isOpen }: Props) => {
  return (
    <div>
      <div className={`step-1 ${isOpen ? 'opacity-1' : 'opacity-0'}`}>
        <div className="flex justify-between items-center gap-[16px]">
          <div className="flex justify-center items-center number-circle">
            <div className="number-step p-[16px]">1</div>
          </div>
          <div className="flex flex-1">
            <button type="button" className="button-apple-style header-right-button font-bold">
              Авторизоваться
            </button>
          </div>
        </div>
      </div>

      <div className={`link-between-steps link-1-2 ${isOpen ? 'height-60' : 'height-0'}`}></div>

      <div className={`step-2 ${isOpen ? 'opacity-1' : 'opacity-0'}`}>
        <div className="flex justify-between items-center gap-[16px]">
          <div className="number-circle flex justify-center items-center">
            <div className="number-step p-[16px]">2</div>
          </div>
          <div className="flex flex-1">
            <input type="text" name="" id="" className="input-apple-style" placeholder="Ваш ID" />
          </div>
        </div>
      </div>

      <div className={`link-between-steps link-2-3 ${isOpen ? 'height-60' : 'height-0'}`}></div>

      <div className={`step-3 ${isOpen ? 'opacity-1' : 'opacity-0'}`}>
        <div className="flex justify-between items-center gap-[16px]">
          <div className="number-circle flex justify-center items-center">
            <div className="number-step p-[16px]">3</div>
          </div>
          <div className="flex flex-1">
            <button type="button" className="button-apple-style header-right-button font-bold">
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
