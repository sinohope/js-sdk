import { ApiBase } from '../api_base.js';
import Joi from 'joi';
import { schemaValidate } from '../schema-validate.js';

export class GenAddressByPath extends ApiBase {
    constructor(url, requestKey) {
        super({
            target: '/v1/waas/mpc/wallet/advance/gen_address_by_path',
            method: 'post',
            url,
            key: requestKey,
        });
        this.validate = schemaValidate(this.scheam());
    }

    scheam() {
        return Joi.object({
            /**
             * 用于区分同一个钱包的同一个cointype 下的不同地址
             */
            // @NotNull
            index: Joi.number().required(),
            /**
             * 算法类型(0: "ECDSA:secp256k1", 1: "EdDSA:ed25519")
             *
             */
            // @NotNull
            algorithmType: Joi.number().required(),
            /**
             * 参考slip-44 https://github.com/satoshilabs/slips/blob/master/slip-0044.md 中定义的coin type常量，使用none-hardened 的版本。根据业界常规做法，对于所有 eth-like 公链，可公钥以太坊的 coin type 60
             */
            // @NotNull
            coinType: Joi.number().required(),
            /**
             * 钱包id
             */
            // @NotNull
            walletId: Joi.string().required(),
        });
    }

    checkParam(data) {
        const fixData = { ...data };
        this.validate(fixData);
        return fixData;
    }
}
