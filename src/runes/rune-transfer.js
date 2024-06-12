import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class RuneTransfer extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/runes/transfer',
            method: 'post',
            url,
            privKey,
            pubKey,
        });
        this.validate = schemaValidate(this.scheam());
    }
    scheam() {
        return Joi.object({
            requestId: Joi.string().required(),
            chainSymbol: Joi.string().required(),
            from: Joi.string().required(),
            to: Joi.string().required(),
            runeId: Joi.string().required(),
            amount: Joi.string().required(),
            feeRate: Joi.number().required(),
            note: Joi.string().optional(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
