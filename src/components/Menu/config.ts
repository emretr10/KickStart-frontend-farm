import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.kickstart.finance/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.kickstart.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'NFT Lottery (Upcoming)',
    icon: 'TicketIcon',
    href: '/upcomming',
  },
  {
    label: 'NFT Factory (Upcoming)',
    icon: 'NftIcon',
    href: '/upcomming',
  },
  {
    label: 'NFT Exchange (Upcoming)',
    icon: 'TradeIcon',
    href: '/upcomming',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x08430Ed03bb44909e3B0C529c541D2fE249b8875',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/',
      // },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xa09A2926678075069822F0Abe3Ad93BeC615FB2D',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/KickStart-Token',
      },
      {
        label: "Docs",
        href: "https://doc.kickstart.finance/",
      },
      // {
      //   label: "Blog",
      //   href: "https://goosefinance.medium.com/",
      // },
    ],
  },
]

export default config
