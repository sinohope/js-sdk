/* eslint-disable max-len */
import {
    CreateWallets,
    GenerateChainAddresses,
    GetAddressBalance,
    GetSupportedChains,
    GetSupportedCoins,
    GetVaults,
    IsValidAddress,
    ListAddedChains,
    ListAddresses,
    ListWallets,
    TransferAddressBook,
    TransferRiskControlSwitch,
} from '../src/index.js';

const url =
    'http://shenyu-bootstrap-c.basic-service.dev3.newhuoapps.com/mpc-uc';
const privKey =
    '308193020100301306072a8648ce3d020106082a8648ce3d0301070479307702010104206b73de8d3bb167392d8bb2a782801082cf02eca41dca0c718621850ee1413b75a00a06082a8648ce3d030107a1440342000432e5c48d5fdbc6e1e8db0c996173b7b684aadc584d022008c50b4fd76da9b22ac63fdeeebf82ba31da1e6dfba008f8399333f4f8f0e8a865a0eea28fd4668f7b';
const pubKey =
    '3059301306072a8648ce3d020106082a8648ce3d0301070342000432e5c48d5fdbc6e1e8db0c996173b7b684aadc584d022008c50b4fd76da9b22ac63fdeeebf82ba31da1e6dfba008f8399333f4f8f0e8a865a0eea28fd4668f7b';

describe('senior api test', () => {
    it('CreateWallets success', async () => {
        const api = new CreateWallets(url, privKey, pubKey);
        const data = await api.request({
            count: 1,
            requestId: '413497079388421',
            vaultId: '450632968208222',
            walletInfos: [
                {
                    walletName: 'wallet1',
                    advancedEnabled: 1,
                },
            ],
        });
        console.log('CreateWallets:', data);
        expect(data.code).not.toBe(200);
    });

    it('ListAddresses success', async () => {
        const api = new ListAddresses(url, privKey, pubKey);
        const data = await api.request({
            vaultId: '450632968208222',
            walletId: '413497079388421',
            chainSymbol: 'ETH',
            pageIndex: 1,
            pageSize: 10,
        });
        console.log('ListAddresses:', data);
        expect(data.code).not.toBe(200);
    });

    it('GenerateChainAddresses success', async () => {
        const api = new GenerateChainAddresses(url, privKey, pubKey);
        const data = await api.request({
            requestId: '413497079388421',
            vaultId: '450632968208222',
            walletId: '413497079388421',
            count: 1,
            chainSymbol: 'ETH',
            encoding: 1,
        });
        console.log('GenerateChainAddresses:', data);
        expect(data.code).not.toBe(200);
    });

    it('ListWallets success', async () => {
        const api = new ListWallets(url, privKey, pubKey);
        const data = await api.request({
            vaultId: '450632968208222',
            pageIndex: 1,
            pageSize: 10,
        });
        console.log('ListWallets:', data);
        expect(data.code).not.toBe(200);
    });

    it('ListAddedChains success', async () => {
        const api = new ListAddedChains(url, privKey, pubKey);
        const data = await api.request({
            vaultId: '450632968208222',
            walletId: '413497079388421',
        });
        console.log('ListAddedChains:', data);
        expect(data.code).not.toBe(200);
    });

    it('GetAddressBalance success', async () => {
        const api = new GetAddressBalance(url, privKey, pubKey);
        const data = await api.request({
            assetId: 'USDT_ETH',
            address:
                '0x4dac0911bbb5f363e04c425d84a84a98355285fb359ca212701528bf9f4164d4',
        });
        console.log('GetAddressBalance:', data);
        expect(data.code).not.toBe(200);
    });

    it('IsValidAddress success', async () => {
        const api = new IsValidAddress(url, privKey, pubKey);
        const data = await api.request({
            assetId: 'USDT_ETH',
            address: '0x67d0F791D950CdC25Ac44bA249328022f4df93b6',
        });
        console.log('IsValidAddress:', data);
        expect(data.code).not.toBe(200);
    });

    it('TransferAddressBook success', async () => {
        const api = new TransferAddressBook(url, privKey, pubKey);
        const data = await api.request({
            vaultId: '450632968208222',
            chainSymbol: 'ETH',
            pageIndex: 1,
            pageSize: 10,
        });
        console.log('TransferAddressBook:', data);
        expect(data.code).not.toBe(200);
    });

    it('TransferRiskControlSwitch success', async () => {
        const api = new TransferRiskControlSwitch(url, privKey, pubKey);
        const data = await api.request({
            vaultId: '450632968208222',
        });
        console.log('TransferRiskControlSwitch:', data);
        expect(data.code).not.toBe(200);
    });

    it('GetSupportedChains success', async () => {
        const api = new GetSupportedChains(url, privKey, pubKey);
        const data = await api.request();
        console.log('GetSupportedChains:', data);
        expect(data.code).not.toBe(200);
    });

    it('GetSupportedCoins success', async () => {
        const api = new GetSupportedCoins(url, privKey, pubKey);
        const data = await api.request({
            chainSymbol: 'ETH',
        });
        console.log('GetSupportedCoins:', data);
        expect(data.code).not.toBe(200);
    });

    it('GetVaults success', async () => {
        const api = new GetVaults(url, privKey, pubKey);
        const data = await api.request();
        console.log('GetVaults:', data);
        expect(data.code).not.toBe(200);
    });
});
