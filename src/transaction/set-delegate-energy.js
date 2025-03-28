import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class SetDelegateEnergy extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/api/config/set_delegate_energy',
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
             * 结算 地址
             */
            // @NotNull
            settlementAddress: Joi.string().required(),
            /**
             * 链标识 TRON
             */
            // @NotNull
            chainSymbol: Joi.string().required(),
            /**
             * 是否开启能量租赁：0-关闭；1-开启
             */
            // 转账金额 如果所属链为btc like，则amount必传。
            isEnabled: Joi.integer().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
