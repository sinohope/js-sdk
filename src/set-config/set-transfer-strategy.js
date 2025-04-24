import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class SetTransferStrategy extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/api/config/set_transfer_strategy',
            method: 'post',
            url,
            privKey,
            pubKey,
        });
        this.validate = schemaValidate(this.scheam());
    }

    scheam() {
        return Joi.object({
            //指定地址，逗号分割
            fromAddress: Joi.string().optional(),
            //assetId 指定token
            assetId: Joi.string().optional(),
            //指定to地址，逗号分割
            toAddress: Joi.string().optional(),
            //交易限制规则
            limits: Joi.list().optional(),
            //命中结果：0-去审批交易（如果配置命中结果为审批交易，需要启动交易审批）；1-禁止交易发起
            hitResult: Joi.integer().required(),
            //金库id
            vaultId: Joi.string().required(),
            //状态：0-关闭；1-开启
            state: Joi.integer().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
