import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class ListWallets extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/wallet/list_wallets',
            method: 'post',
            url,
            privKey,
            pubKey,
        });
        this.validate = schemaValidate(this.scheam());
    }
    scheam() {
        return Joi.object({
            vaultId: Joi.string().required(),
            /**
             * 当前页码，首页为0,默认0
             */
            pageIndex: Joi.number().default(0).required(),
            /***
             * 每页数据条数（不得小于1,不得大于50）
             */
            pageSize: Joi.number().default(10).min(1).max(50).required(),
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
