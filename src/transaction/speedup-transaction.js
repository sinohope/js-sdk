import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class SpeedupTransaction extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/transaction/speedup_transaction',
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
             * 请求方交易的requestId
             */
            // @NotNull
            requestId: Joi.string().required(),
            /**
             * 交易gasLimit，燃料上限，ETH 账号模型适用
             */
            // @NotNull
            gasLimi: Joi.string().required(),
            /**
             * 交易gasPrice，燃料价格，ETH 账号模型适用，单位为 wei
             */
            // @NotNull
            gasPrice: Joi.string().required(),
            /**
             * 手续费 对于 UTXO 类的非EVM兼容链的交易,自设置fee, 如参数为 UTXO 资产转账提供，表示每字节的手续费
             */
            // @NotNull
            fee: Joi.string().required(),

            //    /**
            //     * 加速交易类型 0：普通交易，1：接口加速 1559
            //     */
            //    @NotNull
            //    private String speedupType="0";

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
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
