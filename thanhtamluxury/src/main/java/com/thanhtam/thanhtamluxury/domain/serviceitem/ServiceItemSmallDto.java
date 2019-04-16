package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceItemSmallDto {
    private Integer id;
    private String name;
    private String slug;

    @Setter(AccessLevel.NONE)
    private String mainImage;
    private String location;
    private double price;

    @JsonProperty("video_src")
    @Setter(AccessLevel.NONE)
    private String videoSrv;

    public void setMainImage(String mainImage){
        this.mainImage = mainImage;
        this.videoSrv = mainImage;
    }
}
