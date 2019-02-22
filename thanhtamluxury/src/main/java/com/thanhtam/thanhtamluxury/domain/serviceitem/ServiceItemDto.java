package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.thanhtam.thanhtamluxury.common.Mapper;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ServiceItemDto implements Mapper<ServiceItem> {

    private int id;
    private String name;
    private String type;
    private float price;
    private String priceDescription;
    private String shortDescription;
    private String description;
    private String slug;
    private String serviceType;
}
