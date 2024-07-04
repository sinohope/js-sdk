import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class BabylonStakingTimeLockPathTx extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/staking/spending_time_lock_path_tx',
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
            oriSinoId: Joi.string().optional(),
            oriRequestId: Joi.string().required(),
            feeRate: Joi.string().required(),
            note: Joi.string().allow(null, '').optional(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
