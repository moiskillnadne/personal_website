import { Typography } from '~/shared/ui';
import { SupportLinkGroup } from './types';
import { LinkCard } from './LinkCard';

type Props = {
  group: SupportLinkGroup;
};

export const SupportLinkGroups = ({ group }: Props) => {
  return (
    <div>
      <Typography value={group.title} size="xl" />

      <div className="flex gap-[16px]">
        {group.links.map((link) => {
          return <LinkCard key={link.url} link={link} />;
        })}
      </div>
    </div>
  );
};
