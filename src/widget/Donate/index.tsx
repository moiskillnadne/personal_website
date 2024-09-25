import { Image, Typography } from '~/shared/ui';
import SadHamster from '~/assets/img/sadhamster_circle.png';
import { SupportLinksGrid } from './SupportLinksGrid';
import { AllCards, CryptoTransfers, InternationalCardsOnly } from './lib/constants';

export const DonateWidget = () => {
  const linkGroups = [AllCards, InternationalCardsOnly, CryptoTransfers];

  return (
    <div className="flex justify-center items-center flex-1">
      <div className="flex items-center flex-col">
        <div className="flex flex-col items-center">
          <Image src={SadHamster} alt="profile" width="200px" height="140px" borderRadius="50%" />
          <Typography value="Donate" size="4xl" weight="bold" />
        </div>

        <SupportLinksGrid linkGroups={linkGroups} />
      </div>
    </div>
  );
};
