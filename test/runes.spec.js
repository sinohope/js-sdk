/* eslint-disable max-len */
import { RunePageBalanceSummary, RuneQueryBalance, RuneTransfer } from '../src/index.js';

const url =
    'https://api-sandbox-qa1.newhuoapps.com/';
const privKey =
    '308193020100301306072a8648ce3d020106082a8648ce3d030107047930770201010420d59deed8651f9dc130ce12c7ce9ddbda1129a2dc0d57c6e42596188c041a9aa8a00a06082a8648ce3d030107a1440342000421627f551985a685e00188665a6a2f4fa80d5569fd53b31471785aad62fc9b2e23e8a9ba8a3d03b90d2c8fa5fad26fb2a05a9e7477a1ee5e4228bd85bd660309';
const pubKey =
    '3059301306072a8648ce3d020106082a8648ce3d0301070342000421627f551985a685e00188665a6a2f4fa80d5569fd53b31471785aad62fc9b2e23e8a9ba8a3d03b90d2c8fa5fad26fb2a05a9e7477a1ee5e4228bd85bd660309';

describe('mpc-node api test', () => {
    it('RunePageBalanceSummary success', async () => {
        const api = new RunePageBalanceSummary(url, privKey, pubKey);
        const data = await api.request({
            'chainSymbol': 'BTC_TEST',
            'start': 0,
            'limit': 0,
            'address': 'mzkW8wgqUfgc6qPd2wypDkotRUjzL4VECh',
        });
        expect(data.msg).toBe('ok');
    });

    it('RuneQueryBalance success', async () => {
        const api = new RuneQueryBalance(url, privKey, pubKey);
        const data = await api.request({
            'chainSymbol': 'BTC_TEST',
            'address': 'mzkW8wgqUfgc6qPd2wypDkotRUjzL4VECh',
            'runeId': '2584333:39'
        });
        expect(data.msg).toBe('ok');
    });

    it('RuneTransfer success', async () => {
        const api = new RuneTransfer(url, privKey, pubKey);
        const data = await api.request({
            'requestId': 'string',
            'chainSymbol': 'BTC_TEST',
            'from': 'mzkW8wgqUfgc6qPd2wypDkotRUjzL4VECh',
            'to': 'string',
            'runeId': 'string',
            'amount': 'string',
            'feeRate': 1,
            'note': 'string'
        });
        expect(data.msg).toBe('wallet asset not find');
    });
});
