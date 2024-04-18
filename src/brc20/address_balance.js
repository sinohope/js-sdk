import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class AddressBalance extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/brc20/address_balance',
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
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
