import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class ListTransactions extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/transaction/list_transactions',
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
             * 当前页码，首页为0,默认0
             */
            pageIndex: Joi.number().default(0).required(),
            /***
             * 每页数据条数（不得小于1,不得大于50）
             */
            pageSize: Joi.number().default(10).min(1).max(50).required(),
            /**
             * 链地址
             */
            //    @NotNull
            address: Joi.string().required(),
            /**
             * sinoId生成的交易id
             */
            sinoIds: Joi.string().optional(),
            /**
             * 请求方交易的requestId
             */

            requestIds: Joi.string().optional(),
            /**
             * 交易hash
             */
            txHash: Joi.string().optional(),
            /**
             * 链标识
             */
            //    @NotNull
            chainSymbol: Joi.string().required(),
            /**
             * 资产id
             */
            assetId: Joi.string().optional(),

            /**
             * 根据更新时间查询,开始时间 传了开始时间,开始结束也得带上
             * 格式 "2022-02-02 00:00:00"
             */
            startUpdateTime: Joi.string().isoDate().optional(),

            /**
             * 根据更新时间查询,结束时间  传了结束时间,开始时间也得带上
             * 格式 "2022-02-02 00:00:00"
             */
            endUpdateTime: Joi.string().isoDate().optional(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        if (fixData.pageIndex) {
            fixData.pageIndex = Number(fixData.pageIndex);
        } else {
            fixData.pageIndex = 0;
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
