import { ApiBase } from '../api_base.js';

export class GetSupportedChains extends ApiBase {
    constructor(url, requestKey) {
        super({
            target: '/v1/waas/common/get_supported_chains',
            method: 'post',
            url,
            key: requestKey,
        });
    }

    checkParam(data) {
        return data;
    }
}
