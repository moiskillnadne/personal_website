import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  imageUrl: string;
}>;

export const AppearanceBackground = ({ children, imageUrl }: Props) => {
  return (
    <div id="AppearanceBackground" className="relative flex flex-col m-0 p-0 w-screen h-svh">
      <img
        src={imageUrl}
        alt="background"
        className="absolute left-0 top-0 w-screen h-svh layout-filters"
      />

      <div className="absolute left-0 top-0 w-screen h-svh content base-app-filter-blur">
        {children}
      </div>
    </div>
  );
};
