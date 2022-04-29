import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
    {
        pid: 1,
        risk: 5,
        lpSymbol: 'XBT-BNB LP',
        lpAddresses: {
            97: '',
            56: '0x420Eb74d51BEb2b6A69c40e4AAE29563e2ce1489',
        },
        tokenSymbol: 'XBT',
        tokenAddresses: {
            97: '',
            56: '0x6Cce1fef6247b722944cdA1e555754a830680F6E',
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
            56: '0x61a03EE196Bd78E0f0f617f41f2295D3Ec740e90',
        },
        tokenSymbol: 'XBT',
        tokenAddresses: {
            97: '',
            56: '0x6Cce1fef6247b722944cdA1e555754a830680F6E',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
    },
    {
        pid: 0,
        risk: 2,
        lpSymbol: 'BUSD-BNB LP',
        lpAddresses: {
            97: '',
            56: '0x6Cce1fef6247b722944cdA1e555754a830680F6E',
        },
        tokenSymbol: QuoteToken.BUSD,
        tokenAddresses: contracts.busd,
        quoteTokenSymbol: QuoteToken.BNB,
        quoteTokenAdresses: contracts.wbnb,
    }
]

export default farms
