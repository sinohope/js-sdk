import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class ListMpcRequests extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/mpcnode/list_mpc_requests',
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
             * 业务执行类型（KeyGen 类型请求：1，signTx 类型请求：2，signMessage 类型请求：3，signRawData 类型请求：4）
             */
            businessExecType: Joi.number().min(1).max(4).optional(),
            /**
             * 业务执行状态 (进行中：0，成功：1，失败：2）
             */
            businessExecStatus: Joi.number().min(0).max(2).optional(),
            /**
             * sinoId,不传按照分页查询
             */
            sinoId: Joi.string().allow('', null).optional(),
            /**
             * 当前页码，首页为1,默认1
             */
            pageIndex: Joi.number().default(1).required(),
            /***
             * 每页数据条数（不得小于1,不得大于50）
             */
            pageSize: Joi.number().default(50).min(1).max(50).required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        if (fixData.pageIndex) {
            fixData.pageIndex = Number(fixData.pageIndex);
        } else {
            fixData.pageIndex = 1;
        }
        if (fixData.pageSize) {
            fixData.pageSize = Number(fixData.pageSize);
        } else {
            fixData.pageSize = 50;
        }
        this.validate(fixData);
        return fixData;
    }
}
