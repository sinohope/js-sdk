import { ApiBase } from '../api_base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class TransferRiskControlSwitch extends ApiBase {
    constructor(url, privateKey) {
        super({
            target: '/v1/waas/mpc/wallet/transfer_risk_control_switch',
            method: 'post',
            url,
            key: privateKey,
        });
        this.validate = schemaValidate(this.scheam());
    }

    scheam() {
        return Joi.object({
            /**
             * 金库id
             */
            vaultId: Joi.string().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
