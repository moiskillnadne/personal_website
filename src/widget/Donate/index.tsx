import { Box, Image } from '~/shared/ui';
import ProfilePhoto from '~/assets/img/profilePhoto.png';
import { SupportLinksGrid } from './SupportLinksGrid';
import { AllCards, InternationalCardsOnly } from './lib/constants';

export const DonateWidget = () => {
  const linkGroups = [AllCards, InternationalCardsOnly];

  return (
    <Box id="profile-widget" display="flex" justifyContent="center" alignItems="center" flex={1}>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Image src={ProfilePhoto} alt="profile" width="128px" height="128px" borderRadius="50%" />

        <SupportLinksGrid linkGroups={linkGroups} />
      </Box>
    </Box>
  );
};
