/* eslint-disable max-len */
import {
    BabylonStakingCreate,
    BabylonStakingUnbond,
    BabylonStakingTimeLockPathTx,
} from '../src/index.js';

const url =
    'https://api-sandbox-qa1.newhuoapps.com/';
const privKey =
    '308193020100301306072a8648ce3d020106082a8648ce3d030107047930770201010420d59deed8651f9dc130ce12c7ce9ddbda1129a2dc0d57c6e42596188c041a9aa8a00a06082a8648ce3d030107a1440342000421627f551985a685e00188665a6a2f4fa80d5569fd53b31471785aad62fc9b2e23e8a9ba8a3d03b90d2c8fa5fad26fb2a05a9e7477a1ee5e4228bd85bd660309';
const pubKey =
    '3059301306072a8648ce3d020106082a8648ce3d0301070342000421627f551985a685e00188665a6a2f4fa80d5569fd53b31471785aad62fc9b2e23e8a9ba8a3d03b90d2c8fa5fad26fb2a05a9e7477a1ee5e4228bd85bd660309';

describe('brc20 api test', () => {
    it('BabylonStakingCreate success', async () => {
        const api = new BabylonStakingCreate(url, privKey, pubKey);
        const data = await api.request({
            requestId:     '2012',
            chainSymbol:   'SIGNET',
            from:          'tb1q5gddgnx7umasha6vs7xd4784mfv858nzrt0l23',
            feeRate:       '80',
            stakingAmount: '30000',
            stakingTime:   '150',
        });
        expect(data.code).toBe(1002);
    });

    it('BabylonStakingUnbond success', async () => {
        const api = new BabylonStakingUnbond(url, privKey, pubKey);
        const data = await api.request({
            requestId:    '1114',
            oriRequestId: '1012',
            feeRate:      '80',
        });
        expect(data.code).toBe(1002);
    });

    it('BabylonStakingTimeLockPathTx success', async () => {
        const api = new BabylonStakingTimeLockPathTx(url, privKey, pubKey);
        const data = await api.request({
            requestId:    '1116',
            oriRequestId: '1012',
            feeRate:      '50',
        });
        expect(data.code).toBe(1002);
    });
});
