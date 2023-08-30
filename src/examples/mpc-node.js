import { ListMpcRequests } from '../index.js';


async function main() {
    const url = 'http://shenyu-bootstrap-c.basic-service.dev3.newhuoapps.com/mpc-uc';
    const api = new ListMpcRequests(
        url,
        /* privKey */ '308193020100301306072a8648ce3d020106082a8648ce3d0301070479307702010104206b73de8d3bb167392d8bb2a782801082cf02eca41dca0c718621850ee1413b75a00a06082a8648ce3d030107a1440342000432e5c48d5fdbc6e1e8db0c996173b7b684aadc584d022008c50b4fd76da9b22ac63fdeeebf82ba31da1e6dfba008f8399333f4f8f0e8a865a0eea28fd4668f7b',
        /* pubKey */ '3059301306072a8648ce3d020106082a8648ce3d0301070342000432e5c48d5fdbc6e1e8db0c996173b7b684aadc584d022008c50b4fd76da9b22ac63fdeeebf82ba31da1e6dfba008f8399333f4f8f0e8a865a0eea28fd4668f7b'
    );
    const data = await api.request({
        businessExecType: 1,
        businessExecStatus: 1,
        sinoId: null,
        pageIndex: 1,
        pageSize: 50,
    });
    console.log({ data });
}

main();
