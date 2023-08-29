import { ApiBase } from '../api_base.js';

export class GetSupportedChains extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/common/get_supported_chains',
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
