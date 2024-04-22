import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class PageBalanceSummary extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/brc20/page_balance_summary',
            method: 'post',
            url,
            privKey,
            pubKey,
        });
        this.validate = schemaValidate(this.scheam());
    }

    scheam() {
        return Joi.object({
            // chainSymbol string required
            // 链标识
            chainSymbol: Joi.string().required(),

            // address string required
            // 查询的地址
            address: Joi.string().required(),

            // start integer required
            start: Joi.number().required(),

            // limit integer required
            limit: Joi.number().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
