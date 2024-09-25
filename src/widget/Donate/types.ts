export type FiatSupportLink = {
  type: 'fiat';
  title: string;
  url: string;
  image?: string;
};

export type CryptoSupportLink = {
  type: 'crypto';
  title: string;
  address: string;
  currency: string;
  network: string;
  qrcode: string;
};

export type SupportLink = FiatSupportLink | CryptoSupportLink;

export type SupportLinkGroup = {
  title: string;
  links: Array<SupportLink>;
};
