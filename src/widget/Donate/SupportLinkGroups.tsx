import { Box, Typography } from '~/shared/ui';
import { SupportLinkGroup } from './types';
import { LinkCard } from './LinkCard';

type Props = {
  group: SupportLinkGroup;
};

export const SupportLinkGroups = ({ group }: Props) => {
  return (
    <Box>
      <Typography value={group.title} size="xl" />

      <Box display="flex" gap="16px">
        {group.links.map((link) => {
          return <LinkCard key={link.url} link={link} />;
        })}
      </Box>
    </Box>
  );
};
