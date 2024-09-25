import { CryptoSupportLink, FiatSupportLink, SupportLinkGroup } from '../types';

import ToncoinQRCode from '~/assets/img/crypto_qrcodes/toncoin.jpeg';
import USDTTRC from '~/assets/img/crypto_qrcodes/usdt_trc20.jpeg';
import USDTBEP from '~/assets/img/crypto_qrcodes/usdt_bep20.jpeg';
import Bitcoin from '~/assets/img/crypto_qrcodes/bitcoin.jpeg';
import Eth from '~/assets/img/crypto_qrcodes/eth.jpeg';

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

export const DollarTRCAddress: CryptoSupportLink = {
  type: 'crypto',
  title: 'USDT TRC20',
  currency: 'USDT',
  network: 'TRC20',
  address: 'TAgrxeyF8CMHwoPhfr32F8e1evx4xaQHpL',
  qrcode: USDTTRC,
};

export const DollarBEPAddress: CryptoSupportLink = {
  type: 'crypto',
  title: 'USDT BEP20',
  currency: 'USDT',
  network: 'BEP20',
  address: '0x4dDFdafD3fa7e4ce5e188E911480fCBb8544DF40',
  qrcode: USDTBEP,
};

export const BitcoinAddress: CryptoSupportLink = {
  type: 'crypto',
  title: 'Bitcoin',
  currency: 'Bitcoin',
  network: 'BTC',
  address: 'bc1qcyxjsacz6rx2z3fn5jrnqpzk0rxt24j8h6st9n',
  qrcode: Bitcoin,
};

export const EthAddress: CryptoSupportLink = {
  type: 'crypto',
  title: 'ETH',
  currency: 'Ethereum',
  network: 'Ethereum',
  address: '0x4dDFdafD3fa7e4ce5e188E911480fCBb8544DF40',
  qrcode: Eth,
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
  links: [ToncoinAddress, DollarTRCAddress, DollarBEPAddress, BitcoinAddress, EthAddress],
};
