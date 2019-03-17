package com.thanhtam.thanhtamluxury.domain.imageitem;

import com.thanhtam.thanhtamluxury.common.Mapper;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ImageItemDto implements Mapper<ImageItem> {
    private Integer id;
    private String path;
    private String serviceItemId;
}
