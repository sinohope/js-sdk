import axios from 'axios';
import {
    createSign,
    generateKeyPairSync,
    createPrivateKey,
    createPublicKey,
    // createVerify,
} from 'crypto';

export class ApiBase {
    constructor({ url = '', target = '', method = 'post', privKey, pubKey }) {
        this._method = method;
        this._url = url;
        this._target = target;
        this._priv_key = privKey;
        this._pub_key = pubKey;
        this._priv_key_hex = privKey;
        this._pub_key_hex = pubKey;
        this._signData = null;
        this._signTime = null;
        if (privKey && pubKey) {
            this.setKeyPair();
        } else {
            this.genKeyPair();
        }
    }

    setKey(privKey, pubKey) {
        this._priv_key_hex = privKey;
        this._pub_key_hex = pubKey;
        this.setKeyPair();
    }

    setKeyPair() {
        const privateKey = createPrivateKey({
            format: 'der',
            type: 'pkcs8',
            encoding: 'hex',
            key: this._priv_key_hex,
        });
        this._priv_key = privateKey;

        const publicKey = createPublicKey({
            format: 'der',
            type: 'spki',
            encoding: 'hex',
            key: this._pub_key_hex,
        });
        this._pub_key = publicKey;
    }

    genKeyPair() {
        const { privateKey, publicKey } = generateKeyPairSync('ec', {
            namedCurve: 'prime256v1',
        });
        this._priv_key = privateKey;
        this._pub_key = publicKey;
        this._priv_key_hex = privateKey
            .export({
                format: 'der',
                type: 'pkcs8',
            })
            .toString('hex');
        this._pub_key_hex = publicKey
            .export({
                format: 'der',
                type: 'spki',
            })
            .toString('hex');
    }

    setUrl(url) {
        this._url = url;
    }

    setMethod(method) {
        this._method = method === 'get' ? 'get' : 'post';
    }

    setTarget(target) {
        this._target = target;
    }

    checkParam() {
        throw new Error('must overwite the checkParam fun.');
    }

    generateSignMetaData(data) {
        this._signTime = Math.floor(Date.now()).toString();
        const version = '1.0.0';
        const dataStr = JSON.stringify(data);
        this._signData = `data${dataStr}path${this._target}timestamp${this._signTime}version${version}${this._pub_key_hex}`;
    }

    sign(msg) {
        const sign = createSign('SHA256');
        sign.write(msg);
        sign.end();
        const signature = sign.sign(this._priv_key, 'hex');

        // const verify = createVerify('SHA256');
        // verify.write(msg);
        // verify.end();
        // console.log('verify', verify.verify(this._pub_key, signature, 'hex'));
        return signature;
    }

    async _post(data) {
        this.generateSignMetaData(data);
        // console.log('signData', this._signData);
        const sig = this.sign(this._signData);
        // console.log('sig', sig);
        let resp;
        try {
            // console.log(`${this._url}${this._target}`);
            // console.log({ data, headers: {
            //     'Content-Type': 'application/json',
            //     charset: 'utf-8',
            //     'BIZ-API-KEY': this._pub_key_hex,
            //     'BIZ-API-NONCE': this._signTime,
            //     'BIZ-API-SIGNATURE': sig,
            // } });
            resp = await axios.post(`${this._url}${this._target}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    charset: 'utf-8',
                    'BIZ-API-KEY': this._pub_key_hex,
                    'BIZ-API-NONCE': this._signTime,
                    'BIZ-API-SIGNATURE': sig,
                },
            });
        } catch (e) {
            throw new Error(`axios post error. ${e.message}`);
        }

        if (resp.status !== 200) {
            throw new Error(
                `request ${this._url}${this._target} return status ${resp.status}`
            );
        }
        return resp.data;
    }

    async request(data) {
        if (this._method === 'post') {
            if (!data) {
                data = {};
            }
            const fixData = await this.checkParam(data);
            const ret = await this._post(fixData);
            return ret;
        }
    }
}
