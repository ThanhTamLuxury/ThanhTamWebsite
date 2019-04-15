package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.thanhtam.thanhtamluxury.common.PageDto;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItemDto;

import java.util.List;

import com.thanhtam.thanhtamluxury.common.PageDto;

public interface ServiceItemService {
	List<ServiceItemSmallDto> getTop3(String serviceType);

    ServiceItemDto create(String serviceType, ServiceItemDto serviceItemDto);

    ServiceItemDto updateImageItems(Integer id, List<ImageItemDto> imageItemDtos);

    ServiceItemInfoDto updateOnlyInfo(Integer id, ServiceItemInfoDto infoDto);

    PageDto<ServiceItemSmallDto> getAllSmall(String serviceType, int size, int page);

    ServiceItemDto findById(Integer id);

    ServiceItemDto findByIdAndSlug(Integer id, String slug);

    void deleteService(Integer id);

    ServiceItemDto updateService(ServiceItemDto dto);
}
