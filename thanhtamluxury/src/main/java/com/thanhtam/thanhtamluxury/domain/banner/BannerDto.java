package com.thanhtam.thanhtamluxury.domain.banner;

import com.thanhtam.thanhtamluxury.common.Mapper;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BannerDto implements Mapper<Banner> {
    private int id;
    private String path;
}
