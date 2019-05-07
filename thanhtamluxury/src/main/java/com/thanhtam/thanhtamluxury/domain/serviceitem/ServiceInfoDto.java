package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItem;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceInfoDto {
    private Integer id;
    private String name;
    private String shortDescription;
    private String description;
    private String slug;
    private String mainImage;
    private String location;
    private List<ImageItem> imageItems = new ArrayList<>();
}
