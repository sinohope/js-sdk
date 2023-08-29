import { ApiBase } from '../api_base.js';

export class GetVaults extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/wallet/get_vaults',
            method: 'post',
            url,
            privKey,
            pubKey,
        });
    }

    checkParam(data) {
        return data;
    }
}
