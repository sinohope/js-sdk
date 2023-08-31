This project is an JS SDK for Sinohope WaaS API. 
# @sinohope/js-sdk

## Installation
```
npm i @sinohope/js-sdk
```

## Usage

```js
import { ListMpcRequests, Status } from '@sinohope/js-sdk';

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

This library is free and open-source software released under the LGPL-3.0 license.