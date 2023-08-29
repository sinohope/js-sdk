import { ApiBase } from '../api-base.js';

export class Status extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/mpcnode/status',
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
