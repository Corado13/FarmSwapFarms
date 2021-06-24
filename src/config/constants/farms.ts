import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'FARMX',
    lpAddresses: {
      97: '',
      56: '0x23d8e0a83965460148af0b1874a4E862a854e94B',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      56: '0x23d8e0a83965460148af0b1874a4E862a854e94B',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'FARMX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd462D9eBDB6b938C8a5d96785d3DD0C8596731f2',   // lp address token-bnb
    },
    tokenSymbol: 'FARMX',
    tokenAddresses: {
      97: '',
      56: '0x23d8e0a83965460148af0b1874a4E862a854e94B', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms
