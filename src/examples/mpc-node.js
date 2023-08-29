import { ListMpcRequests } from '../index.js';

async function main() {
    const url = 'http://mpc-exchange-demo.mpc.qa1.newhuoapps.com';
    const api = new ListMpcRequests(
        url, 
        /* privKey */'308193020100301306072a8648ce3d020106082a8648ce3d030107047930770201010420cfa9637373c5ad9ecbeeac35564a20ad3051fca8b8c733523eff4f430b001f24a00a06082a8648ce3d030107a1440342000480d600505298005b4ea8daed87e0377dbb5fea05fc7103239b8210599de1d0272f8d6c4cd2978661383c472707386e8ad3d81fd4e716f7bec53897c8d53617e7', 
        /* pubKey */'3059301306072a8648ce3d020106082a8648ce3d0301070342000480d600505298005b4ea8daed87e0377dbb5fea05fc7103239b8210599de1d0272f8d6c4cd2978661383c472707386e8ad3d81fd4e716f7bec53897c8d53617e7');
    const data = await api.request({
        businessExecType: 1,
        businessExecStatus: 1,
        pageIndex: 0,
        pageSize: 50,
    });
    console.log({ data });
}

main();
