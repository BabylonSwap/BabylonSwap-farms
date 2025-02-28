import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://babylonswap.org/#/',
  },
  {
    label: 'Trade On BNB',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farm On BNB',
    icon: 'FarmIcon',
    href: 'https://farm.babylonswap.org'
  },
  {
    label: 'BNB Mining Bank',
    icon: 'TicketIcon',
    href: '/MiningBank'
  },
  {
    label: 'V2 Market',
    icon: 'MoreIcon',
    href: 'https://v2.babylonswap.org'
  },
  {
    label: 'XBT Price',
    icon: 'InfoIcon',
    href: 'https://apy.babylonswap.org'
  },
    {
    label: 'TrumpUp Trading',
    icon: 'InfoIcon',
    href: 'https://trump.babylonswap.org'
  },
    {
    label: 'TRUMPUP Price',
    icon: 'InfoIcon',
    href: 'https://dexscreener.com/bsc/0x7E8267AB9d82F007376431C8D97F1D7b34E27f36'
  },
  {
    label: 'Glossary',
    icon: 'AuditIcon',
    href: 'https://babylonswap.gitbook.io/'
  },
  // {
  //   label: 'Roulette',
  //   icon: 'TicketIcon',
  //   href: 'http://localhost:3000/#/Loulette'
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/babylon-finance',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/babylon-finance/',
  //     },
  //     {
  //       label: 'AstroTools',
  //       href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     },
  //   ],
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/goosedefi/',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://goosedefi.gitbook.io/babylon-finance/',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://goosefinance.medium.com/',
  //     },
  //   ],
  // },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/babylon-finance',
  // },
]

export default config
