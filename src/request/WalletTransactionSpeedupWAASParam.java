package com.sinohope.request;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class WalletTransactionSpeedupWAASParam {

    /**
     * 请求方交易的requestId
     */
    @NotNull
    private String requestId="123234";
    /**
     * 交易gasLimit，燃料上限，ETH 账号模型适用
     */
    @NotNull
    private String gasLimit="21000";
    /**
     * 交易gasPrice，燃料价格，ETH 账号模型适用，单位为 wei
     */
    @NotNull
    private String gasPrice="1300000";
    /**
     * 手续费 对于 UTXO 类的非EVM兼容链的交易,自设置fee, 如参数为 UTXO 资产转账提供，表示每字节的手续费
     */
    @NotNull
    private String fee="344000";

//    /**
//     * 加速交易类型 0：普通交易，1：接口加速 1559
//     */
//    @NotNull
//    private String speedupType="0";

    /**
     * 链标识
     */
    @NotNull
    private String chainSymbol="ETH";
    /**
     * 资产id
     */
    @NotNull
    private String assetId="USDC_ETH";

}
