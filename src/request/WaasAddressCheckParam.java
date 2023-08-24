package com.sinohope.request;

import lombok.Data;

import javax.validation.constraints.NotNull;

/**
 * @author yanghaiyu
 * @date 2023/07/19
 **/
@Data
public class WaasAddressCheckParam {
    /**
     * 币种代号 币标识 具有唯一性
     */
    @NotNull
    private String assetId = "USDT_ETH";
    /**
     * 地址
     */
    @NotNull
    private String address = "0x67d0F791D950CdC25Ac44bA249328022f4df93b6";

}
