import { ApiBase } from '../api_base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class CancelTransaction extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/transaction/cancel_transaction',
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
             * 请求方的requestId
             */
            // @NotNull
            requestId: Joi.string().required(),
            /**
             * 链标识
             */
            // @NotNull
            chainSymbol: Joi.string().required(),
            /**
             * 资产id
             */
            // @NotNull
            assetId: Joi.string().required(),

            // @NotNull
            gasLimit: Joi.string().required(),
            /**
             * 交易gasPrice，燃料价格，ETH 账号模型适用，单位为 wei
             */
            // @NotNull
            gasPrice: Joi.string().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
