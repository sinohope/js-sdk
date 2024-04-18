import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class InscribeTransferById extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/brc20/inscribe_transfer_by_id',
            method: 'post',
            url,
            privKey,
            pubKey,
        });
        this.validate = schemaValidate(this.scheam());
    }

    scheam() {
        return Joi.object({
            // requestId string required
            // 请求方交易的requestId
            requestId: Joi.string().required(),

            // chainSymbol string required
            // 链标识
            chainSymbol: Joi.string().required(),

            // from string required
            // from 地址
            from: Joi.string().required(),

            // to string
            // to 地址
            to: Joi.string().required(),

            // amount string required
            // 铭刻可转账铭文的数量
            inscriptionId: Joi.string().required(),

            // ticker string required
            // 铭文名称
            ticker: Joi.string().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
