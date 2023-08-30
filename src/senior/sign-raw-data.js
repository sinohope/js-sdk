import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class SignRawData extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/wallet/advance/sign_raw_data',
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
             * 签名数据
             */
            // @NotNull
            rawData: Joi.string().required(),
            /**
             * 唯一id
             * <p> 用户自己生成的请求唯一id, 用于重试<p/>
             */
            // @NotNull

            requestId: Joi.string().required(),
            /**
             * 钱包id
             */
            // @NotNull

            walletId: Joi.string().required(),
            /**
             * 地址对应的path
             * <p>eth 示例 m/1/1/60/0 <p/>
             */
            // @NotNull

            hdPath: Joi.string().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
