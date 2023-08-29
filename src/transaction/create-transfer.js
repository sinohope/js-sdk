import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class CreateTransfer extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/transaction/create_transfer',
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
             * 钱包id
             */
            // @Positive
            walletId: Joi.string().optional(),

            /**
             * 请求方交易的requestId
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

            /**
             * from 地址
             */
            // @NotNull
            from: Joi.string().required(),

            /**
             * to地址
             */
            // @NotNull
            to: Joi.string().required(),

            /**
             * memo
             */
            toTag: Joi.string().optional(),

            /**
             * 金额
             */
            // @NotNull
            amount: Joi.string().required(),

            /**
             * 手续费 对于 UTXO 类的非EVM兼容链的交易,自设置fee, 如参数为 UTXO 资产转账提供，表示每字节的手续费
             */
            // @NotNull
            fee: Joi.string().required(),

            /**
             * 交易gasPrice，燃料价格，ETH 账号模型适用，单位为 wei
             */
            // @NotNull
            gasPrice: Joi.string().required(),

            /**
             * 交易gasLimit，燃料上限，ETH 账号模型适用
             */
            // @NotNull
            gasLimit: Joi.string().required(),

            /**
             * 备注：用于用户自己需要的一些备注信息
             */
            remark: Joi.string().optional(),

            /**
             * 金库id
             */
            vaultId: Joi.string().optional(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
