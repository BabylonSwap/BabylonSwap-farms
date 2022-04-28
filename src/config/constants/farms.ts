import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
    {
        pid: 0,
        risk: 5,
        lpSymbol: 'XBT-BNB LP',
        lpAddresses: {
            97: '',
            56: '0x420Eb74d51BEb2b6A69c40e4AAE29563e2ce1489',
        },
        tokenSymbol: 'KGH',
        tokenAddresses: {
            97: '',
            56: '0x6Cce1fef6247b722944cdA1e555754a830680F6E',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
    },
    {
        pid: 1,
        risk: 1,
        lpSymbol: 'USDT-BUSD LP',
        lpAddresses: {
            97: '',
            56: '0x6Cce1fef6247b722944cdA1e555754a830680F6E',
        },
        tokenSymbol: 'USDT',
        tokenAddresses: {
            97: '',
            56: '0x55d398326f99059ff775485246999027b3197955',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
    },
    {
        pid: 2,
        risk: 2,
        lpSymbol: 'BTCB-BNB LP',
        lpAddresses: {
            97: '',
            56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
        },
        tokenSymbol: 'BTCB',
        tokenAddresses: {
            97: '',
            56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
        },
        quoteTokenSymbol: QuoteToken.BNB,
        quoteTokenAdresses: contracts.wbnb,
    }
]

export default farms
