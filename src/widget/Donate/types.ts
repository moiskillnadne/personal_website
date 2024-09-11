export type SupportLink = {
  title: string;
  url: string;
  image?: string;
};

export type SupportLinkGroup = {
  title: string;
  links: Array<SupportLink>;
};
