import { Typography } from '~/shared/ui';
import { SupportLinkGroup } from './types';
import { SupportLinkGroups } from './SupportLinkGroups';

type Props = {
  linkGroups: Array<SupportLinkGroup>;
};

export const SupportLinksGrid = ({ linkGroups }: Props) => {
  return (
    <div className="flex flex-col gap-[24px] items-center">
      <Typography value="Support" size="3xl" />

      <div className="flex flex-col gap-[16px]">
        {linkGroups.map((group) => {
          return <SupportLinkGroups key={group.title} group={group} />;
        })}
      </div>
    </div>
  );
};
