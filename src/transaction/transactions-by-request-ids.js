import { ApiBase } from '../api_base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class TransactionsByRequestIds extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/transaction/transactions_by_request_ids',
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
             * 通过requestIds查询获取已确认交易记录列表，requestId以逗号分割，不能为空且不能大于50个
             */
            // @NotNull
            requestIds: Joi.string().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
