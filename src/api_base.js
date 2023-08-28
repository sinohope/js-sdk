import axios from 'axios';
import { randomBytes, createHash } from 'crypto';
import secp256r1 from 'secp256r1';

export class ApiBase {
    constructor({ url = '', target = '', method = 'post', key = '' }) {
        this._method = method;
        this._url = url;
        this._target = target;
        this._key = key;
        this._signData = null;
        this._signTime = null;
        if (key) {
            this.setKeyPair();
        } else {
            this.genKeyPair();
        }
    }

    setKeyPair() {
        this._key = Buffer.from(this._key, 'hex');
        this._publicKey = secp256r1.publicKeyCreate().toString('hex');
    }

    genKeyPair() {
        let privKey;
        do {
            privKey = randomBytes(32);
        } while (!secp256r1.privateKeyVerify(privKey));
        this._key = privKey;
        this._publicKey = secp256r1.publicKeyCreate(this._key).toString('hex');
        console.log(privKey.toString('hex'), this._publicKey);
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

    setKey(key) {
        this._key = key;
        this.setKeyPair();
    }

    checkParam() {
        throw new Error('must overwite the checkParam fun.');
    }

    generateSignMetaData(data) {
        this._signTime = Math.floor(Date.now()).toString();
        const version = '1.0.0';
        const dataStr = JSON.stringify(data);
        this._signData = `data${dataStr}path${this._target}timestamp${this._signTime}version${version}${this._publicKey}`;
    }

    hash(object) {
        return createHash('sha256')
            .update(typeof object === 'string' ? object : JSON.stringify(object))
            .digest('hex');
    }
    sign(msg) {
        const sigObj = secp256r1.sign(Buffer.from(this.hash(msg), 'hex'), this._key);
        return sigObj.signature;
    }

    async _post(data) {
        this.generateSignMetaData(data);
        console.log(22222111, this._signData);
        const sig = this.sign(this._signData).toString('hex');
        console.log(22222, sig);
        let resp;
        try{
            resp = await axios.post(`${this._url}${this._target}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    charset: 'utf-8',
                    'BIZ-API-KEY': this._publicKey,
                    'BIZ-API-NONCE': this._signTime,
                    'BIZ-API-SIGNATURE': sig,
                },
            });
        }catch(e) {
            throw new Error(`axios post error. ${e.message}`);
        }
        
        if (resp.status !== 200) {
            throw Error(
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
