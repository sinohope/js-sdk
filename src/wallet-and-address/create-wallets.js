import { ApiBase } from '../api-base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class CreateWallets extends ApiBase {
    constructor(url, privKey, pubKey) {
        super({
            target: '/v1/waas/mpc/wallet/create_wallets',
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
             * 创建多少个 默认值为 1
             */
            count: Joi.number().optional(),
            vaultId: Joi.string().required(),
            /**
             * 钱包信息
             * 如果不为空 count值必须 walletInfos的数量一致
             */
            walletInfos: Joi.array()
                .items(
                    Joi.object({
                        /**
                         * 钱包名称
                         * 为空的话用默认值: wallet+随机值
                         * 不为空时：部门下钱包名称不能给重复
                         */
                        walletName: Joi.string().required(),
                        /**
                         * 高级功能开关 (关：0，开：1)
                         * <p> 开了以后支持的功能: 根据指定的路径创建地址 ,原始数据签名 <p/>
                         */
                        advancedEnabled: Joi.number().valid(0, 1),
                    })
                )
                .min(1),
            requestId: Joi.string().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
