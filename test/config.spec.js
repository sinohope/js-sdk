/* eslint-disable max-len */
import {
    SetTransferStrategy,
} from '../src/index.js';

const url =
    'http://shenyu-bootstrap-c.basic-service.dev3.newhuoapps.com/mpc-uc';
const privKey =
    '308193020100301306072a8648ce3d020106082a8648ce3d0301070479307702010104206b73de8d3bb167392d8bb2a782801082cf02eca41dca0c718621850ee1413b75a00a06082a8648ce3d030107a1440342000432e5c48d5fdbc6e1e8db0c996173b7b684aadc584d022008c50b4fd76da9b22ac63fdeeebf82ba31da1e6dfba008f8399333f4f8f0e8a865a0eea28fd4668f7b';
const pubKey =
    '3059301306072a8648ce3d020106082a8648ce3d0301070342000432e5c48d5fdbc6e1e8db0c996173b7b684aadc584d022008c50b4fd76da9b22ac63fdeeebf82ba31da1e6dfba008f8399333f4f8f0e8a865a0eea28fd4668f7b';

describe('config api test', () => {
    it('Set transfer strategy success', async () => {
        const api = new SetTransferStrategy(url, privKey, pubKey);
        const data = await api.request({
            fromAddress:'mqC4NKJw3kDNDdLZpTjxUEAkXgSTWiCoBX,0x8b6b4d95cdc757a9f5edd488983c1a23ed29fa64,0xcfa54817f0d9e2b7b1234e5225e890e2fae30a07,0x5d64ddbc51e2aeb9a2e8ef5f1107a9ddc0a7cbe1,mmt9wanCTbjtVZzRajeJpbKiTMXzJSvPFL,0x8a7278f4c3df49e5a4ad1dd891da1b1dadab8207,n4brx1ZF6eWSx9voVkRVzVYsLvyy9y5fRx',
            assetId: '',
            toAddress: '',
            limits: [
                {
                    type:2,
                    chargeUnit: 'usdt',
                    limit24TimeAmount:5.5
                }
            ],
            hitResult: '2',
            vaultId: '624388747146949',
            state: 1
        });
        console.log('SetTransferStrategy:', data);
        expect(data.code).not.toBe(200);
    });

});
