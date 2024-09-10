import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  imageUrl: string;
}>;

export const AppearanceBackground = ({ children, imageUrl }: Props) => {
  return (
    <div id="AppearanceBackground" className="relative">
      <img src={imageUrl} alt="background" className="absolute left-0 top-0 full layout-filters" />

      <div className="absolute left-0 top-0 full content base-app-filter-blur">{children}</div>
    </div>
  );
};
