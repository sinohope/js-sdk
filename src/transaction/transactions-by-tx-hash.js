import { ApiBase } from '../api_base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class TransactionsByTxHash extends ApiBase {
    constructor(url, requestKey) {
        super({
            target: '/v1/waas/mpc/transaction/transactions_by_tx_hash',
            method: 'post',
            url,
            key: requestKey,
        });
        this.validate = schemaValidate(this.scheam());
    }

    scheam() {
        return Joi.object({
            /**
             * 通过交易txHash，查询获取已确认交易记录列表
             */
            // @NotNull
            txHash: Joi.string().required(),

            /**
             * 链标识
             */
            // @NotNull
            chainSymbol: Joi.string().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
