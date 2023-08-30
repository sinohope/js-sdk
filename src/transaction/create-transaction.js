import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class CreateTransaction extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/transaction/create_transaction',
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
             * 金库id
             */
            vaultId: Joi.string().required(),
            /**
             * 钱包id
             */
            // @Positive
            walletId: Joi.string().required(),

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
             * 交易的memo
             */
            toTag: Joi.string().allow(null, '').optional(),

            /**
             * 金额
             */
            // @NotNull
            amount: Joi.string().required(),

            /**
             * 手续费 对于 UTXO 类的非EVM兼容链的交易,自设置fee, 如参数为 UTXO 资产转账提供，表示每字节的手续费
             */
            // @NotNull
            fee: Joi.string().allow(null, '').optional(),

            /**
             * gasprice
             */
            // @NotNull
            gasPrice: Joi.string().allow(null, '').optional(),

            /**
             * gaslimit
             */
            // @NotNull
            gasLimit: Joi.string().allow(null, '').optional(),

            /**
             * 备注：用于用户自己需要的一些备注信息
             */
            remark: Joi.string().allow(null, '').optional(),
            /**
             * 以太坊交易data
             */
            // @NotNull
            inputData: Joi.string().allow(null, '').optional(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
