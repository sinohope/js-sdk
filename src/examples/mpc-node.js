import { ListMpcRequests } from '../index.js';

async function main() {
    const url = 'http://127.0.0.1:8080';
    const api = new ListMpcRequests(url);
    const data = await api.request({
        businessExecType: 1,
        businessExecStatus: 0,
        sinoId: '123',
        pageIndex: 0,
        pageSize: 50,
    });
    console.log({ data });
}

main();