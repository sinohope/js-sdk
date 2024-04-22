/* eslint-disable max-len */
import {
    InscribeDeploy,
    InscribeMint,
    InscribeTransfer,
    InscribeTransferById,
    OneStopTransfer,
    QueryInscribeTransfers,
    PageBalanceSummary,
    AddressBalance,
} from '../src/index.js';

const url =
    'https://api-sandbox-qa1.newhuoapps.com/';
const privKey =
    '308193020100301306072a8648ce3d020106082a8648ce3d030107047930770201010420d59deed8651f9dc130ce12c7ce9ddbda1129a2dc0d57c6e42596188c041a9aa8a00a06082a8648ce3d030107a1440342000421627f551985a685e00188665a6a2f4fa80d5569fd53b31471785aad62fc9b2e23e8a9ba8a3d03b90d2c8fa5fad26fb2a05a9e7477a1ee5e4228bd85bd660309';
const pubKey =
    '3059301306072a8648ce3d020106082a8648ce3d0301070342000421627f551985a685e00188665a6a2f4fa80d5569fd53b31471785aad62fc9b2e23e8a9ba8a3d03b90d2c8fa5fad26fb2a05a9e7477a1ee5e4228bd85bd660309';

describe('brc20 api test', () => {
    it('InscribeDeploy success', async () => {
        const api = new InscribeDeploy(url, privKey, pubKey);
        const data = await api.request({
            requestId: '2132134',
            ticker: 'aacv',
            totalSupply: '10000',
            limitPerMint: '100',
            decimals: '6',
            chainSymbol: 'BTC_TEST',
            from: 'mzkW8wgqUfgc6qPd2wypDkotRUjzL4VECh',
        });
       
        expect(data.msg).toBe('aacv has exist.');
    });

    it('InscribeMint success', async () => {
        const api = new InscribeMint(url, privKey, pubKey);
        const data = await api.request({
            requestId: '2132134',
            ticker: 'aacv',
            amount: '100',
            chainSymbol: 'BTC_TEST',
            from: 'mzkW8wgqUfgc6qPd2wypDkotRUjzL4VECh',
        });
        expect(data.msg).toBe('wallet not find');
    });

    it('InscribeTransfer success', async () => {
        const api = new InscribeTransfer(url, privKey, pubKey);
        const data = await api.request({
            requestId: '2132134',
            ticker: 'aacv',
            amount: '100',
            chainSymbol: 'BTC_TEST',
            from: 'mzkW8wgqUfgc6qPd2wypDkotRUjzL4VECh',
        });
        expect(data.code).toBe(1001);
    });

    it('InscribeTransferById success', async () => {
        const api = new InscribeTransferById(url, privKey, pubKey);
        const data = await api.request({
            requestId: '2132134',
            chainSymbol: 'BTC_TEST',
            from: 'mzkW8wgqUfgc6qPd2wypDkotRUjzL4VECh',
            to: 'mzkW8wgqUfgc6qPd2wypDkotRUjzL4VECh',
            inscriptionId:
                'dbc64da12879875b1c8eabec67c4693ff596744b21dc35c283883b2034a8b58ei0',
            ticker: 'aacv',
        });
        
        expect(data.code).toBe(1001);
    });

    it('OneStopTransfer success', async () => {
        const api = new OneStopTransfer(url, privKey, pubKey);
        const data = await api.request({
            requestId: '2132134',
            ticker: 'aacv',
            amount: '100',
            chainSymbol: 'BTC_TEST',
            from: 'mzkW8wgqUfgc6qPd2wypDkotRUjzL4VECh',
            to: 'mzkW8wgqUfgc6qPd2wypDkotRUjzL4VECh',
        });
        expect(data.code).toBe(1001);
    });

    it('QueryInscribeTransfers success', async () => {
        const api = new QueryInscribeTransfers(url, privKey, pubKey);
        const data = await api.request({
            ticker: 'aacv',
            chainSymbol: 'BTC_TEST',
            address: 'mzkW8wgqUfgc6qPd2wypDkotRUjzL4VECh',
        });
        expect(data.msg).toBe('ok');
    });

    it('PageBalanceSummary success', async () => {
        const api = new PageBalanceSummary(url, privKey, pubKey);
        const data = await api.request({
            address: 'mzkW8wgqUfgc6qPd2wypDkotRUjzL4VECh',
            chainSymbol: 'BTC_TEST',
            start: 0,
            limit: 10,
        });
        expect(data.msg).toBe('ok');
    });

    it('AddressBalance success', async () => {
        const api = new AddressBalance(url, privKey, pubKey);
        const data = await api.request({
            chainSymbol: 'BTC_TEST',
            address: 'mzkW8wgqUfgc6qPd2wypDkotRUjzL4VECh',
        });
        expect(data.msg).toBe('ok');
    });
});
