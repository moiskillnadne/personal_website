import { SupportLink } from './types';

type Props = {
  link: SupportLink;
};

export const LinkCard = ({ link }: Props) => {
  const onClick = () => {
    window.open(link.url, '_blank');
  };

  return (
    <div onClick={onClick} className="clickable-card text-4xl font-bold underline">
      {link.title}
    </div>
  );
};
