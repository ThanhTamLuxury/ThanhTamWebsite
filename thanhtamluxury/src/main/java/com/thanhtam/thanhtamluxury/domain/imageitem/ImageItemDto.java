package com.thanhtam.thanhtamluxury.domain.imageitem;

import com.thanhtam.thanhtamluxury.common.Mapper;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ImageItemDto implements Mapper<ImageItem> {
    private int id;
    private String path;
}
