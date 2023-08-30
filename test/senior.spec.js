/* eslint-disable max-len */
import { SignRawData, GenAddressByPath, UpdateWallet } from '../src/index.js';

const url =
    'http://shenyu-bootstrap-c.basic-service.dev3.newhuoapps.com/mpc-uc';
const privKey =
    '308193020100301306072a8648ce3d020106082a8648ce3d0301070479307702010104206b73de8d3bb167392d8bb2a782801082cf02eca41dca0c718621850ee1413b75a00a06082a8648ce3d030107a1440342000432e5c48d5fdbc6e1e8db0c996173b7b684aadc584d022008c50b4fd76da9b22ac63fdeeebf82ba31da1e6dfba008f8399333f4f8f0e8a865a0eea28fd4668f7b';
const pubKey =
    '3059301306072a8648ce3d020106082a8648ce3d0301070342000432e5c48d5fdbc6e1e8db0c996173b7b684aadc584d022008c50b4fd76da9b22ac63fdeeebf82ba31da1e6dfba008f8399333f4f8f0e8a865a0eea28fd4668f7b';

describe('senior api test', () => {
    it('SignRawData success', async () => {
        const api = new SignRawData(url, privKey, pubKey);
        const data = await api.request({
            vaultId: '450632968208222',
            requestId: '413497079388421',
            walletId: '413497079382091',
            hdPath: 'm/1/1/60/0',
            rawData:
                '0x4dac0911bbb5f363e04c425d84a84a98355285fb359ca212701528bf9f4164d4',
        });
        console.log('SignRawData:', data);
        expect(data.code).not.toBe(200);
    });

    it('GenAddressByPath success', async () => {
        const api = new GenAddressByPath(url, privKey, pubKey);
        const data = await api.request({
            vaultId: '450632968208222',
            walletId: '413497079388421',
            index: '1',
            algorithmType: 1,
            coinType: 10,
        });
        console.log('GenAddressByPath:', data);
        expect(data.code).not.toBe(200);
    });

    it('UpdateWallet success', async () => {
        const api = new UpdateWallet(url, privKey, pubKey);
        const data = await api.request({
            vaultId: '450632968208222',
            walletId: '413497079388421',
            advancedEnabled: 1,
        });
        console.log('UpdateWallet:', data);
        expect(data.code).not.toBe(200);
    });
});
