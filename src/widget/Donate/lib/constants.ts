import { CryptoSupportLink, FiatSupportLink, SupportLinkGroup } from '../types';

import ToncoinQRCode from '~/assets/img/crypto_qrcodes/toncoin.jpeg';

export const BoostyLink: FiatSupportLink = {
  type: 'fiat',
  title: 'Boosty',
  url: 'https://boosty.to/viktorriabkov/donate',
};

export const DonationAlertsLink: FiatSupportLink = {
  type: 'fiat',
  title: 'Donation Alerts',
  url: 'https://www.donationalerts.com/r/viktorriabkov',
};

export const TelegramTributeLink: FiatSupportLink = {
  type: 'fiat',
  title: 'Telegram Tribute',
  url: 'https://t.me/tribute/app?startapp=d9X3',
};

export const BuyMeACoffeeLink: FiatSupportLink = {
  type: 'fiat',
  title: 'Buy Me a Coffee',
  url: 'https://buymeacoffee.com/viktor_riabkov',
};

export const PatreonLink: FiatSupportLink = {
  type: 'fiat',
  title: 'Patreon',
  url: 'https://patreon.com/ViktorRiabkov?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink',
};

export const ToncoinAddress: CryptoSupportLink = {
  type: 'crypto',
  title: 'Toncoin',
  currency: 'Toncoin',
  network: 'TON',
  address: 'UQAU7lW_irMX07bKy43yM83L19BQT8ioS3eZO4bVXhcSHc-Q',
  qrcode: ToncoinQRCode,
};

export const AllCards: SupportLinkGroup = {
  title: 'Все карты',
  links: [BoostyLink, DonationAlertsLink, TelegramTributeLink],
};

export const InternationalCardsOnly: SupportLinkGroup = {
  title: 'Зарубежные карты (Не РФ/РБ карты)',
  links: [BuyMeACoffeeLink, PatreonLink],
};

export const CryptoTransfers: SupportLinkGroup = {
  title: 'Переводы в криптовалюте',
  links: [ToncoinAddress],
};
