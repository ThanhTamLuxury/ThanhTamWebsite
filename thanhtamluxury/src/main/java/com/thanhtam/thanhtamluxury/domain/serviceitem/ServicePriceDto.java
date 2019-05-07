package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.thanhtam.thanhtamluxury.common.Mapper;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItem;
import com.thanhtam.thanhtamluxury.domain.pricedetail.PriceDetail;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ServicePriceDto implements Mapper<ServiceItem> {

    private Integer id;
    private String name;
    private double price;
    private String description;
    private String priceDescription;
    private List<PriceDetail> priceDetails = new ArrayList<>();
}
