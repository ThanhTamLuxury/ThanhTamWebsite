package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItemDto;

import java.util.List;

public interface ServiceItemService {
	List<ServiceItemDto> getTop3(String serviceType);

    ServiceItemDto create(ServiceItemDto serviceItemDto);

    ServiceItemDto updateImageItems(Integer id, List<ImageItemDto> imageItemDtos);

    ServiceItemInfoDto updateOnlyInfo(Integer id, ServiceItemInfoDto infoDto);

    List<ServiceItemSmallDto> getAllOutsidePageInfo(String serviceType);

    List<ServiceItemDto> findAllByServiceType(String serviceType);
}
