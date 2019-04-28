package com.thanhtam.thanhtamluxury.domain.imageitem;

import java.util.List;
import java.util.Map;

public interface ImageItemService {
    List<ImageItemDto> getAll();

    Map<String, Object> cleanImageFileInServer();
}
