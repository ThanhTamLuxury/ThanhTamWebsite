package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.thanhtam.thanhtamluxury.common.Mapper;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItem;
import com.thanhtam.thanhtamluxury.domain.pricedetail.PriceDetail;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ServiceItem implements Mapper<ServiceItemDto> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String type;
    private float price;
    private String priceDescription;
    private String shortDescription;
    private String description;
    private String slug;
    private String serviceType;
    private boolean isActive;
    private String mainImage;
    private String location;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "serviceItem")
    private List<ImageItem> imageItems;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "serviceItem")
    private List<PriceDetail> priceDetails;

}
