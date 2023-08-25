import { ApiBase } from '../api_base.js';

export class Status extends ApiBase {
    constructor(url, requestKey) {
        super({
            target: '/v1/waas/mpc/mpcnode/status',
            method: 'post',
            url,
            key: requestKey,
        });
    }

    checkParam(data) {
        return data;
    }
}
