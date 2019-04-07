package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItem;
import com.thanhtam.thanhtamluxury.domain.pricedetail.PriceDetail;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceItemCreateDto {

    private String name;
    private String type;
    private String shortDescription;
    private String description;
    private String slug;
    private String serviceType;
    private boolean isActive;

    @Setter(AccessLevel.NONE)
    private MultipartFile mainImage;

    @JsonProperty("video_src")
    @Setter(AccessLevel.NONE)
    private String videoSrc;
    private String location;
    private List<MultipartFile> imageItems = new ArrayList<>();
}
