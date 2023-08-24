package com.sinohope.request;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Data
public class WalletTransactionSendWAASParam {


    /**
     * 钱包id
     */
    @Positive
    private String walletId="52321312";

    /**
     * 请求方交易的requestId
     */
    @NotNull
    private String requestId="2132134";

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
    private String from="0xc429aeda8bf786cf092224dddadbc0813f9f230b";

    /**
     * to地址
     */
    @NotNull
    private String to="0x546A62c54F50D57D30478C8C275360f20239A23E";

    /**
     * memo
     */
    private String toTag="32143";

    /**
     * 金额
     */
    @NotNull
    private String amount="1200000000000000";

    /**
     * 手续费 对于 UTXO 类的非EVM兼容链的交易,自设置fee, 如参数为 UTXO 资产转账提供，表示每字节的手续费
     */
    @NotNull
    private String fee="1000000";

    /**
     * 交易gasPrice，燃料价格，ETH 账号模型适用，单位为 wei
     */
    @NotNull
    private String gasPrice="13250000";

    /**
     * 交易gasLimit，燃料上限，ETH 账号模型适用
     */
    @NotNull
    private String gasLimit="21000";

    /**
     * 备注：用于用户自己需要的一些备注信息
     */
    private String remark="用户交易信息备注";

    /**
     * 金库id
     */
    private String vaultId;

}
