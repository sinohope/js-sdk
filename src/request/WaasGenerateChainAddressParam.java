package com.sinohope.request;

import lombok.Data;

import javax.validation.constraints.NotNull;

/**
 * @author yanghaiyu
 * @date 2023/07/19
 **/
@Data
public class WaasGenerateChainAddressParam {
    @NotNull
    private String requestId;
    /**
     * 钱包id
     */
    @NotNull
    private String walletId = "413497079388421";
    /**
     * 创建多少个,不传默认为1
     */
    private Integer count = 1;
    /**
     * 链名称 简称 链标识 具有唯一性
     */
    @NotNull
    private String chainSymbol = "ETH";
}
