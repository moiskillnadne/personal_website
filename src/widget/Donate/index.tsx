import { Image, Typography } from '~/shared/ui';
import ProfilePhoto from '~/assets/img/profilePhoto.png';
import { SupportLinksGrid } from './SupportLinksGrid';
import { AllCards, InternationalCardsOnly } from './lib/constants';

export const DonateWidget = () => {
  const linkGroups = [AllCards, InternationalCardsOnly];

  return (
    <div className="flex justify-center items-center flex-1">
      <div className="flex items-center flex-col">
        <div className="flex flex-col items-center">
          <Image src={ProfilePhoto} alt="profile" width="128px" height="128px" borderRadius="50%" />
          <Typography value="Donate" size="4xl" weight="bold" />
        </div>

        <SupportLinksGrid linkGroups={linkGroups} />
      </div>
    </div>
  );
};
