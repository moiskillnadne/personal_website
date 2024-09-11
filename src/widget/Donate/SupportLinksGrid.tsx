import { Box, Typography } from '~/shared/ui';
import { SupportLinkGroup } from './types';
import { SupportLinkGroups } from './SupportLinkGroups';

type Props = {
  linkGroups: Array<SupportLinkGroup>;
};

export const SupportLinksGrid = ({ linkGroups }: Props) => {
  return (
    <Box display="flex" flexDirection="column" gap="24px" alignItems="center">
      <Typography value="Support" size="3xl" />

      <Box display="flex" flexDirection="column" gap="16px">
        {linkGroups.map((group) => {
          return <SupportLinkGroups key={group.title} group={group} />;
        })}
      </Box>
    </Box>
  );
};
