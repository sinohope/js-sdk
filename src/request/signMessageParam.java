package com.sinohope.request;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class signMessageParam {

    /**
     * 请求方交易的requestId
     */
    @NotNull
    private String requestId="4242342";

    /**
     * 链
     */
    @NotNull
    private String chainSymbol="ETH";

    /**
     * 资产id
     */
    @NotNull
    private String assetId="USDC_ETH";

    /**
     * bip32、bip44的推导路径
     */
    @NotNull
    private String hdPath="m/1/1/60/0";

    /**
     *  支持签名算法: （personal_sign、signTypedData、eth_signTypedData_v3、eth_signTypedData_v4）
     */
    @NotNull
    private String signAlgorithm="personal_sign";

    /**
     * 待签名的字符串信息
     */
    @NotNull
    private String message="232313c429aeda8bf786cf092224dddadbc0813f9f230b";
}
