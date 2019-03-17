package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.thanhtam.thanhtamluxury.common.Mapper;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItem;
import com.thanhtam.thanhtamluxury.domain.pricedetail.PriceDetail;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceItemDto implements Mapper<ServiceItem> {

    private Integer id;
    private String name;
    private String type;
    private double price;
    private String priceDescription;
    private String shortDescription;
    private String description;
    private String slug;
    private String serviceType;
    private boolean isActive;

    @Setter(AccessLevel.NONE)
    private String mainImage;

    @JsonProperty("video_src")
    @Setter(AccessLevel.NONE)
    private String videoSrc;
    private String location;
    private List<ImageItem> imageItems = new ArrayList<>();
    private List<PriceDetail> priceDetails = new ArrayList<>();

    public void setMainImage(String mainImage) {
        this.mainImage = mainImage;
        this.videoSrc = mainImage;
    }
}
