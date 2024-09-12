import { SupportLink, SupportLinkGroup } from '../types';

export const BoostyLink: SupportLink = {
  title: 'Boosty',
  url: 'https://boosty.to/viktorriabkov/donate',
};

export const DonationAlertsLink: SupportLink = {
  title: 'Donation Alerts',
  url: 'https://www.donationalerts.com/r/viktorriabkov',
};

export const TelegramTributeLink: SupportLink = {
  title: 'Telegram Tribute',
  url: 'https://t.me/tribute/app?startapp=d9X3',
};

export const BuyMeACoffeeLink: SupportLink = {
  title: 'Buy Me a Coffee',
  url: 'https://buymeacoffee.com/viktor_riabkov',
};

export const PatreonLink: SupportLink = {
  title: 'Patreon',
  url: 'https://patreon.com/ViktorRiabkov?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink',
};

export const AllCards: SupportLinkGroup = {
  title: 'Все карты',
  links: [BoostyLink, DonationAlertsLink, TelegramTributeLink],
};

export const InternationalCardsOnly: SupportLinkGroup = {
  title: 'Зарубежные карты (Не РФ/РБ карты)',
  links: [BuyMeACoffeeLink, PatreonLink],
};
