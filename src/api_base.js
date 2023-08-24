import axios from 'axios';

export class ApiBase {
    constructor({ 
        url = '', 
        target = '',
        method = 'post',
        key = '',
    }) {
        this._method = method;
        this._url = url;
        this._target = target;
        this._key = key;
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
    }

    checkParam() {
        throw new Error('must overwite the checkParam fun.');
    }

    async request(data) {
        const fixData = this.checkParam(data);
        axios.request(fixData);
    }
}