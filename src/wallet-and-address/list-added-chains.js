import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class ListAddedChains extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/wallet/list_added_chains',
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
             * 钱包id
             */
            // @NotNull
            walletId: Joi.string().required(),
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
