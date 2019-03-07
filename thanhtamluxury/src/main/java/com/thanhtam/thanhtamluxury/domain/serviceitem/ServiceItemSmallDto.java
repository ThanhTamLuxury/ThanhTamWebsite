package com.thanhtam.thanhtamluxury.domain.serviceitem;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceItemSmallDto {
    private Integer id;
    private String name;
    private String slug;
    private String mainImage;
}
