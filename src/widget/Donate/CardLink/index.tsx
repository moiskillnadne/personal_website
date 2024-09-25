import { SupportLink } from '../types';
import { FiatCardLink } from './FiatCardLink';

type Props = {
  link: SupportLink;
};

export const CardLinkManager = ({ link }: Props) => {
  switch (link.type) {
    case 'fiat':
      return <FiatCardLink link={link} />;

    default:
      return <div>Method not available</div>;
  }
};
