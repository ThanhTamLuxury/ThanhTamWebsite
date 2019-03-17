package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceItemInfoDto {
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
    private String location;

    @Setter(AccessLevel.NONE)
    @JsonProperty("video_src")
    private String videoSrc;

    public void setMainImage(String mainImage) {
        this.mainImage = mainImage;
        this.videoSrc = mainImage;
    }
}
