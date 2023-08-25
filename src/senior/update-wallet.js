import { ApiBase } from '../api_base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class UpdateWallet extends ApiBase {
    constructor(url, requestKey) {
        super({
            target: '/v1/waas/mpc/wallet/advance/update_wallet',
            method: 'post',
            url,
            key: requestKey,
        });
        this.validate = schemaValidate(this.scheam());
    }

    scheam() {
        return Joi.object({
            /**
             * 钱包id
             * <p> 当指定了以后就是根据钱包开关,否则就是金库级别 <p/>
             */
            // @NotNull
            walletId: Joi.string().required(),

            /**
             * 高级功能开关 (关：0，开：1)
             * <p> 开了以后支持的功能: 根据指定的路径创建地址 ,原始数据签名 <p/>
             */
            // @NotNull
            advancedEnabled: Joi.number().min(0).max(1).required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
