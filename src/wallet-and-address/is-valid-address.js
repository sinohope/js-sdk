import { ApiBase } from '../api_base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class IsValidAddress extends ApiBase {
    constructor(url, requestKey) {
        super({
            target: '/v1/waas/mpc/is_valid_address',
            method: 'post',
            url,
            key: requestKey,
        });
        this.validate = schemaValidate(this.scheam());
    }

    scheam() {
        return Joi.object({
            /**
             * 币种代号 币标识 具有唯一性
             */
            // @NotNull
            assetId: Joi.string().required(),

            /**
             * 地址
             */
            // @NotNull
            address: Joi.string().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
