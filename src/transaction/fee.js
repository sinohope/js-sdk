import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class Fee extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/transaction/fee',
            method: 'post',
            url,
            privKey,
            pubKey,
        });
        this.validate = schemaValidate(this.scheam());
    }

    scheam() {
        return Joi.object({
            // 交易类型 必填 TRANSFER ：转账 CONTRACT_CALL ：web3合约调用
            operationType: Joi.string().required(),
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
             * 资产id
             * 资产id，如果交易类型为TRANSFER必填。
             */
            // @NotNull
            assetId: Joi.string().allow(null, '').optional(),
            /**
             * 链标识
             */
            // @NotNull
            chainSymbol: Joi.string().required(),
            /**
             * 金额
             */
            // 转账金额 如果所属链为btc like，则amount必传。
            amount: Joi.string().allow(null, '').optional(),
            /**
             * inputData
             * 如果交易类型为CONTRACT_CALL合约调用时，inputData必填
             */
            inputData: Joi.string().allow(null, '').optional(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
