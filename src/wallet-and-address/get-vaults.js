import { ApiBase } from '../api-base.js';

export class GetVaults extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/common/get_vaults',
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
