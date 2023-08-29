import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class GetSupportedCoins extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/common/get_supported_coins',
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
             * 部门id
             */
            vaultId: Joi.string().required(),
            /**
             * 链名称 简称 链标识 具有唯一性
             */
            chainSymbol: Joi.string().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        if (!fixData.count) {
            fixData.count = 1;
        }
        this.validate(fixData);
        return fixData;
    }
}
