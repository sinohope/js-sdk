package com.sinohope.request;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class WalletTransactionCancelWAASParam {

    /**
     * 请求方的requestId
     */
    @NotNull
    private String requestId="64534";
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

    @NotNull
    private String gasLimit="21000";
    /**
     * 交易gasPrice，燃料价格，ETH 账号模型适用，单位为 wei
     */
    @NotNull
    private String gasPrice="1300000";

}
