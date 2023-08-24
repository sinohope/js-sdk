import { ApiBase } from '../api_base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class TransactionsBySinoIds extends ApiBase{
    constructor(url, requestKey) {
        super({
            target: '/v1/waas/mpc/transaction/transactions_by_sinoIds',
            method: 'post',
            url,
            key: requestKey
        });
        this.validate = schemaValidate(this.scheam());
    }

    scheam() {
        return Joi.object({
            /**
             * 通过sinoId查询获取已确认交易记录列表，sinoid是sinohope唯一标识交易id，以逗号分割，不能为空且不能大于50个
             */
            // @NotNull
            sinoIds: Joi.string().required(),

        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
