import { ApiBase } from '../api_base.js';

export class GetVaults extends ApiBase{
    constructor(url, requestKey) {
        super({
            target: '/v1/waas/mpc/wallet/get_vaults',
            method: 'post',
            url,
            key: requestKey
        });
    }

    checkParam(data) {
        return data;
    }
}
