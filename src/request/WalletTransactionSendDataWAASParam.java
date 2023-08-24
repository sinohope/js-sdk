package com.sinohope.request;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Data
public class WalletTransactionSendDataWAASParam {


    /**
     * 钱包id
     */
    @Positive
    private String walletId="435663";

    /**
     * 请求方交易的requestId
     */
    @NotNull
    private String requestId="3423434";

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

    /**
     * from 地址
     */
    @NotNull
    private String from="d3912f1a067d3fd45a705de4f224a1f41e07081d";

    /**
     * to地址
     */
    @NotNull
    private String to="88a0315ec02224e1ed487193f4d650c5b57051e1";

    /**
     * 交易的memo
     */
    private String toTag="23133";

    /**
     * 金额
     */
    @NotNull
    private String amount="200000000000";

    /**
     * 手续费 对于 UTXO 类的非EVM兼容链的交易,自设置fee, 如参数为 UTXO 资产转账提供，表示每字节的手续费
     */
    @NotNull
    private String fee="12000";

    /**
     * gasprice
     */
    @NotNull
    private String gasPrice="2300000";

    /**
     * gaslimit
     */
    @NotNull
    private String gasLimit="21000";


    /**
     * 备注：用于用户自己需要的一些备注信息
     */
    private String remark="用户交易信息备注";

    /**
     * 以太坊交易data
     */
    @NotNull
    private String inputData="0x000000000000000000000000000000000000000000000000000b4a02a73d00000000000000000000000000000000000000000000001478334d4aa26fb416e61300000000000000000000000000000000000000000000411bf70fe348f5f3a6d30000000000000000000000000000000000000000001478334d3f586d0cd9e61300000000000000000000000000000000000000000000411bf71b2d4b9d30a6d3";

    /**
     * 金库id
     */
    private String vaultId;
}
