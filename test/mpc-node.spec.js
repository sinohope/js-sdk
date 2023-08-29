/* eslint-disable max-len */
import { ListMpcRequests } from '../src/index.js';

describe('mpc-node api test', () => {
    it('ListMpcRequests success', async () => {
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
        // expect(data).toEqual(1);
    });
});
