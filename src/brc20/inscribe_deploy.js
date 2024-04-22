import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class InscribeDeploy extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/brc20/inscribe_deploy',
            method: 'post',
            url,
            privKey,
            pubKey,
        });
        this.validate = schemaValidate(this.scheam());
    }

    scheam() {
        return Joi.object({
            // 请求方交易的requestId
            requestId: Joi.string().required(),

            // 铭文名称
            ticker: Joi.string().required(),

            // 发行总量
            totalSupply: Joi.string().required(),

            // 每次铸造数量上限
            limitPerMint: Joi.string().required(),

            // 币种精度，选填，默认18
            decimals: Joi.string().optional(),

            // 链标识
            chainSymbol: Joi.string().required(),

            // from 地址
            from: Joi.string().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
