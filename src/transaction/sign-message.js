import { ApiBase } from '../api_base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class SignMessage extends ApiBase{
    constructor(url, requestKey) {
        super({
            target: '/v1/waas/mpc/web3/sign_message',
            method: 'post',
            url,
            key: requestKey
        });
        this.validate = schemaValidate(this.scheam());
    }

    scheam() {
        return Joi.object({
            /**
             * 请求方交易的requestId
             */
            // @NotNull
            requestId: Joi.string().required(),

            /**
             * 链
             */
            // @NotNull
            chainSymbol: Joi.string().required(),

            /**
             * 资产id
             */
            // @NotNull
            assetId: Joi.string().required(),

            /**
             * bip32、bip44的推导路径
             */
            // @NotNull
            hdPath: Joi.string().required(),

            /**
             *  支持签名算法: （personal_sign、signTypedData、eth_signTypedData_v3、eth_signTypedData_v4）
             */
            // @NotNull
            signAlgorithm: Joi.string().required(),

            /**
             * 待签名的字符串信息
             */
            // @NotNull
            message: Joi.string().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
