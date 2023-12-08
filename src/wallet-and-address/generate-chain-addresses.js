import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class GenerateChainAddresses extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/wallet/generate_chain_addresses',
            method: 'post',
            url,
            privKey,
            pubKey,
        });
        this.validate = schemaValidate(this.scheam());
    }

    scheam() {
        return Joi.object({
            // @NotNull
            requestId: Joi.string().required(),
            /**
             * vaultId string required
             * 金库id
             */
            vaultId: Joi.string().required(),
            /**
             * 钱包id
             */
            // @NotNull
            walletId: Joi.string().required(),
            /**
             * 创建多少个,不传默认为1
             */
            count: Joi.number().optional(),
            /**
             * 链名称 简称 链标识 具有唯一性
             */
            // @NotNull
            chainSymbol: Joi.string().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        if (!fixData.count) {
            fixData.count = 1;
        }
        this.validate(fixData);
        return fixData;
    }
}
