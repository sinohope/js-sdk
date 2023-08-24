package com.sinohope.request;

import lombok.Data;

import javax.validation.constraints.NotNull;

/**
 * @author yanghaiyu
 * @date 2023/07/19
 **/
@Data
public class WaasGetAddressBalanceParam {
    /**
     * 链名称 简称 链标识 具有唯一性
     */
    private String chainSymbol = "ETH";

    /**
     * 币名称 简称 币标识 具有唯一性
     */
    private String assetId = "USDT_ETH";
    /**
     * 地址
     */
    private String address = "0x4dac0911bbb5f363e04c425d84a84a98355285fb359ca212701528bf9f4164d4";


}
