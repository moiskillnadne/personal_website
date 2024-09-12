import { SupportLinkGroup } from './types';
import { SupportLinkGroups } from './SupportLinkGroups';

type Props = {
  linkGroups: Array<SupportLinkGroup>;
};

export const SupportLinksGrid = ({ linkGroups }: Props) => {
  return (
    <div className="flex flex-col gap-[30px] px-[16px] md:px-[24px] py-[20px] items-center">
      {linkGroups.map((group) => {
        return <SupportLinkGroups key={group.title} group={group} />;
      })}
    </div>
  );
};
