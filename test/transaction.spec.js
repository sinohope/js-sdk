/* eslint-disable max-len */
import {
    CreateTransfer,
    CreateTransaction,
    SpeedupTransaction,
    CancelTransaction,
    ListTransactions,
    TransactionsByRequestIds,
    TransactionsBySinoIds,
    TransactionsByTxHash,
    SignMessage,
    Fee,

} from '../src/index.js';

const url =
    'http://shenyu-bootstrap-c.basic-service.dev3.newhuoapps.com/mpc-uc';
const privKey =
    '308193020100301306072a8648ce3d020106082a8648ce3d0301070479307702010104206b73de8d3bb167392d8bb2a782801082cf02eca41dca0c718621850ee1413b75a00a06082a8648ce3d030107a1440342000432e5c48d5fdbc6e1e8db0c996173b7b684aadc584d022008c50b4fd76da9b22ac63fdeeebf82ba31da1e6dfba008f8399333f4f8f0e8a865a0eea28fd4668f7b';
const pubKey =
    '3059301306072a8648ce3d020106082a8648ce3d0301070342000432e5c48d5fdbc6e1e8db0c996173b7b684aadc584d022008c50b4fd76da9b22ac63fdeeebf82ba31da1e6dfba008f8399333f4f8f0e8a865a0eea28fd4668f7b';

describe('transaction api test', () => {
    it('CreateTransfer success', async () => {
        const api = new CreateTransfer(url, privKey, pubKey);
        const data = await api.request({
            vaultId: '450632968208222',
            walletId: '52321312',
            requestId: '2132134',
            chainSymbol: 'ETH',
            assetId: 'USDC_ETH',
            from: '0xc429aeda8bf786cf092224dddadbc0813f9f230b',
            to: '0x546A62c54F50D57D30478C8C275360f20239A23E',
            toTag: '32143',
            amount: '1200000000000000',
            fee: '1000000',
            fee_rate: '1',
            gasPrice: '13250000',
            gasLimit: '21000',
            remark: '用户信息备注',
        });
        console.log('CreateTransfer:', data);
        expect(data.code).not.toBe(200);
    });

    it('CreateTransaction success', async () => {
        const api = new CreateTransaction(url, privKey, pubKey);
        const data = await api.request({
            vaultId: '450632968208222',
            walletId: '435663',
            requestId: '3423434',
            chainSymbol: 'ETH',
            assetId: 'USDC_ETH',
            from: 'd3912f1a067d3fd45a705de4f224a1f41e07081d',
            to: '88a0315ec02224e1ed487193f4d650c5b57051e1',
            toTag: '23133',
            amount: '200000000000',
            fee: '12000',
            fee_rate: '1',
            gasPrice: '2300000',
            gasLimit: '21000',
            inputdata:
                '0x000000000000000000000000000000000000000000000000000b4a02a73d00000000000000000000000000000000000000000000001478334d4aa26fb416e61300000000000000000000000000000000000000000000411bf70fe348f5f3a6d30000000000000000000000000000000000000000001478334d3f586d0cd9e61300000000000000000000000000000000000000000000411bf71b2d4b9d30a6d3',
            remark: '用户交易信息备注',
        });
        console.log('CreateTransaction:', data);
        expect(data.code).not.toBe(200);
    });

    it('SpeedupTransaction success', async () => {
        const api = new SpeedupTransaction(url, privKey, pubKey);
        const data = await api.request({
            requestId: '123234,45345,324234',
            gasLimit: '21000',
            gasPrice: '1300000',
            fee: '344000',
            chainSymbol: 'ETH',
            assetId: 'USDC_ETH',
            sinoId: '1',
        });
        console.log('SpeedupTransaction:', data);
        expect(data.code).not.toBe(200);
    });

    it('CancelTransaction success', async () => {
        const api = new CancelTransaction(url, privKey, pubKey);
        const data = await api.request({
            requestId: '64534',
            chainSymbol: 'ETH',
            assetId: 'USDC_ETH',
            sinoId: '1',
        });
        console.log('CancelTransaction:', data);
        expect(data.code).not.toBe(200);
    });

    it('ListTransactions success', async () => {
        const api = new ListTransactions(url, privKey, pubKey);
        const data = await api.request({
            address: '0x4b67ec7fb5804dc645d584a715792f7ca76caace',
            sinoId: '1,2',
            requestId: '433352715218629,433352715218629',
            txHash: '4c32136443dc0d0eb7584f0d991fb1a4602323b97f6f1a064de3db19e95d2f16',
            chainSymbol: 'ETH',
            assetId: 'USDC_ETH',
            pageIndex: 1,
            pageSize: 10,
            startUpdateTime: '2022-02-02 00:00:00',
            endUpdateTime: '2022-03-02 00:00:00',
        });
        console.log('ListTransactions:', data);
        expect(data.code).not.toBe(200);
    });

    it('TransactionsByRequestIds success', async () => {
        const api = new TransactionsByRequestIds(url, privKey, pubKey);
        const data = await api.request({
            requestIds: '433352715218629,433352715218629',
        });
        console.log('TransactionsByRequestIds:', data);
        expect(data.code).not.toBe(200);
    });

    it('TransactionsBySinoIds success', async () => {
        const api = new TransactionsBySinoIds(url, privKey, pubKey);
        const data = await api.request({
            sinoIds: '1,2,3,4',
        });
        console.log('TransactionsBySinoIds:', data);
        expect(data.code).not.toBe(200);
    });

    it('TransactionsByTxHash success', async () => {
        const api = new TransactionsByTxHash(url, privKey, pubKey);
        const data = await api.request({
            txHash: '4c32136443dc0d0eb7584f0d991fb1a4602323b97f6f1a064de3db19e95d2f16',
            chainSymbol: 'ETH',
        });
        console.log('TransactionsByTxHash:', data);
        expect(data.code).not.toBe(200);
    });

    it('SignMessage success', async () => {
        const api = new SignMessage(url, privKey, pubKey);
        const data = await api.request({
            requestId: '4242342,324234',
            chainSymbol: 'ETH',
            hdPath: 'm/1/1/60/0',
            signAlgorithm: 'personal_sign',
            message: '232313c429aeda8bf786cf092224dddadbc0813f9f230b',
        });
        console.log('SignMessage:', data);
        expect(data.code).not.toBe(200);
    });
    it('Fee success', async () => {
        const api = new Fee(url, privKey, pubKey);
        const data = await api.request({
            operationType: 'CONTRACT_CALL',
            from: '0xcec96d6b9a0ba75f1dcb882454ad582f273b2842',
            to: '0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad',
            assetId: 'ETH_GOERLI',
            chainSymbol: 'GOERLI',
            amount: '123',
            inputData: '0xf86407850271d94900825208943fc91a3afd70395cd496c647d5a6cc9d4b2b7fad80802da0a635c2bf652f4eb9980c27544320376759c22ad70b7d67c21adc1fcfd5b11eeca0068a8a2610c3e36940368172d6a80dc7eac3f090e616aec23c27eccaf581e550'
        });
        console.log('Fee:', data);
        expect(data.code).not.toBe(200);
    });
});
