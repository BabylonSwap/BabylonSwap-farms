import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
    {
        pid: 0,
        risk: 5,
        lpSymbol: 'XBT-BNB LP',
        lpAddresses: {
            97: '',
            56: '0x015e5da8def0679dec521fdfbf6bc8706ec5577b',
        },
        tokenSymbol: 'XBT',
        tokenAddresses: {
            97: '',
            56: '0xe35FBF0A5EdDA08741A97446163Dd0cFf4B9cDeD',
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
            56: '0x00f59038d6080da1105d2d6cb4399d0d644c0b72',
        },
        tokenSymbol: 'XBT',
        tokenAddresses: {
            97: '',
            56: '0xe35FBF0A5EdDA08741A97446163Dd0cFf4B9cDeD',
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
            56: '0xc8d75eafcb8e4ea84a661285af73c75a3294fe63',
        },
        tokenSymbol: QuoteToken.BUSD,
        tokenAddresses: contracts.busd,
        quoteTokenSymbol: QuoteToken.BNB,
        quoteTokenAdresses: contracts.wbnb,
    }
]

export default farms
