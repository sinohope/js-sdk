This project is packed for Sinohope WaaS API. The original version is forked from https://github.com/sinohope/js-sdk
# @sinohope/js-sdk

## Installation
```
npm i @sinohope/js-sdk
```

## Usage

```js
import { ListMpcRequests, Status } from '../index.js';

async function main() {
    const url =
        'the url of mpc node server;
    const privKey =
        'asn1 hex private key';
    const pubKey =
        'asn1 hex public key';
    let api = new ListMpcRequests(url, privKey, pubKey);
    let data = await api.request({
        sinoId: null,
        pageIndex: 1,
        pageSize: 50,
    });
    console.log({ data });

    api = new Status(url, privKey, pubKey);
    data = await api.request();
    console.log({ data });
}

main();

```

## LICENSE

This library is free and open-source software released under the MIT license.