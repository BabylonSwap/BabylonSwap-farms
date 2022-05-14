import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
    {
        pid: 4,
        risk: 5,
        lpSymbol: 'XBT-BNB LP',
        lpAddresses: {
            97: '',
            56: '0xb53ee64090D9B36932CA8a359732D60eF40c0Fe9',
        },
        tokenSymbol: 'XBT',
        tokenAddresses: {
            97: '',
            56: '0x5BbD197EeCfECB05a07909020a524bfb155c4E2a',
        },
        quoteTokenSymbol: QuoteToken.BNB,
        quoteTokenAdresses: contracts.wbnb,
        isNative : true
    },
    {
        pid: 5,
        risk: 1,
        lpSymbol: 'XBT-BUSD LP',
        lpAddresses: {
            97: '',
            56: '0xB5e5932D907690930E7F2B72A8D77C469C2Efe9c',
        },
        tokenSymbol: 'XBT',
        tokenAddresses: {
            97: '',
            56: '0x5BbD197EeCfECB05a07909020a524bfb155c4E2a',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
        isNative : true
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
        isNative : true
    }
]

export const addFarms = (farm: FarmConfig) => {
    const inExist = farms.findIndex(_farm => _farm.pid === farm.pid);
    console.error("inExist", inExist, farms);
    if (inExist === -1) {
        if (farms.length === 3)
            farms.push(farm)
        else farms[3] = farm;
        console.error("inExist farms", farms);
        return true;
    }
    return false;
}

export default farms
