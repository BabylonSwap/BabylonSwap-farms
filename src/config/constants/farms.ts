import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
    {
        pid: 3,
        risk: 5,
        lpSymbol: 'XBT-BNB LP',
        lpAddresses: {
            97: '',
            56: '0x3debd7dde09ced03b8f17bc8fd7b314a9874a910',
        },
        tokenSymbol: 'XBT',
        tokenAddresses: {
            97: '',
            56: '0xBD8ae8c42076FbEa34350D3dA56E6edb4170e5cF',
        },
        quoteTokenSymbol: QuoteToken.BNB,
        quoteTokenAdresses: contracts.wbnb,
    },
    {
        pid: 4,
        risk: 1,
        lpSymbol: 'XBT-BUSD LP',
        lpAddresses: {
            97: '',
            56: '0xc5da305830f4639d9976931f875b6c886f5bff0a',
        },
        tokenSymbol: 'XBT',
        tokenAddresses: {
            97: '',
            56: '0xBD8ae8c42076FbEa34350D3dA56E6edb4170e5cF',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
    },
    {
        pid: 5,
        risk: 2,
        lpSymbol: 'BUSD-BNB LP',
        lpAddresses: {
            97: '',
            56: '0xC1B02E701e9214dbedCE9DBec45753c3b44A5f8A',
        },
        tokenSymbol: QuoteToken.BUSD,
        tokenAddresses: contracts.busd,
        quoteTokenSymbol: QuoteToken.BNB,
        quoteTokenAdresses: contracts.wbnb,
    }
]

export default farms
