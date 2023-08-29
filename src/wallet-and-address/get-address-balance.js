import { ApiBase } from '../api_base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class GetAddressBalance extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/wallet/get_address_balance',
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
             * 链名称 简称 链标识 具有唯一性
             */
            chainSymbol: Joi.string().required(),

            /**
             * 币名称 简称 币标识 具有唯一性
             */
            assetId: Joi.string().required(),
            /**
             * 地址
             */
            address: Joi.string().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
