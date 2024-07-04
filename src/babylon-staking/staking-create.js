import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class BabylonStakingCreate extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/staking/create',
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
            feeRate: Joi.string().required(),
            note: Joi.string().allow(null, '').optional(),
            stakingAmount: Joi.string().required(),
            stakingTime: Joi.string().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
