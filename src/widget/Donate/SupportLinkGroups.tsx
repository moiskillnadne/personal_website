import { Typography } from '~/shared/ui';
import { SupportLinkGroup } from './types';
import { LinkCard } from './LinkCard';

type Props = {
  group: SupportLinkGroup;
};

export const SupportLinkGroups = ({ group }: Props) => {
  return (
    <div className="text-center">
      <Typography value={group.title} size="xl" weight="semibold" />

      <div className="flex flex-col gap-[16px] mt-[12px] items-center">
        {group.links.map((link) => {
          return <LinkCard key={link.url} link={link} />;
        })}
      </div>
    </div>
  );
};
