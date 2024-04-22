import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class QueryInscribeTransfers extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/brc20/query_inscribe_transfers',
            method: 'post',
            url,
            privKey,
            pubKey,
        });
        this.validate = schemaValidate(this.scheam());
    }

    scheam() {
        return Joi.object({
            // ticker string required
            // 铭文名称
            ticker: Joi.string().required(),

            // chainSymbol string required
            // 链标识
            chainSymbol: Joi.string().required(),

            // address string required
            // 查询的地址
            address: Joi.string().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
