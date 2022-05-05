import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
    {
        pid: 0,
        risk: 5,
        lpSymbol: 'XBT-BNB LP',
        lpAddresses: {
            97: '',
            56: '0x07348935c7bba4a44d01e65f608378d15403ec15',
        },
        tokenSymbol: 'XBT',
        tokenAddresses: {
            97: '',
            56: '0x3853d7d774ee44698d539365f6e8446b57f2cacd',
        },
        quoteTokenSymbol: QuoteToken.BNB,
        quoteTokenAdresses: contracts.wbnb,
    },
    {
        pid: 2,
        risk: 1,
        lpSymbol: 'XBT-BUSD LP',
        lpAddresses: {
            97: '',
            56: '0x2b341f0da71de9ad76add25739de9e5e44d81cfa',
        },
        tokenSymbol: 'XBT',
        tokenAddresses: {
            97: '',
            56: '0x3853d7d774ee44698d539365f6e8446b57f2cacd',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
    },
    {
        pid: 1,
        risk: 2,
        lpSymbol: 'BUSD-BNB LP',
        lpAddresses: {
            97: '',
            56: '0x00761e6dad6883ab38b5f9d8cf160cba718ae7c0',
        },
        tokenSymbol: QuoteToken.BUSD,
        tokenAddresses: contracts.busd,
        quoteTokenSymbol: QuoteToken.BNB,
        quoteTokenAdresses: contracts.wbnb,
    }
]

export default farms
