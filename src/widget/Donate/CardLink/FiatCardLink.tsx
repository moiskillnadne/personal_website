import { FiatSupportLink } from '../types';

type Props = {
  link: FiatSupportLink;
};

export const FiatCardLink = ({ link }: Props) => {
  const onClick = () => {
    window.open(link.url, '_blank');
  };

  return (
    <div
      onClick={onClick}
      className="clickable-card w-[250px] h-[100px] flex justify-center items-center text-[20px]"
    >
      {link.title}
    </div>
  );
};
