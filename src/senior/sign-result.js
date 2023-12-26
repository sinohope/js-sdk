import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class SignResult extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/sign_result',
            method: 'post',
            url,
            privKey,
            pubKey,
        });
        this.validate = schemaValidate(this.scheam());
    }
    scheam() {
        return Joi.object({
            /**
             * 选填，与sinoId至少传1个
             */

            requestId:  Joi.string().allow(null, '').optional(),
            /**
             * 选填，与requestId至少传1个
             */

            sinoId:  Joi.string().allow(null, '').optional(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
