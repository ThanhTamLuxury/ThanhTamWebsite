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
    private String mainImage;
    private String location;

    @JsonProperty("video_src")
    private String videoSrv;

}
