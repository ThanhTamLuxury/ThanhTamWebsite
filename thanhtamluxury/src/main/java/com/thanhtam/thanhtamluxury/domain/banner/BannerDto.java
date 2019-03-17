package com.thanhtam.thanhtamluxury.domain.banner;

import com.thanhtam.thanhtamluxury.common.Mapper;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BannerDto implements Mapper<Banner> {
    private Integer id;
    private String path;
}
