package com.thanhtam.thanhtamluxury.domain.serviceitem;

import java.util.List;

public interface ServiceItemService {
	List<ServiceItemDto> getTop3(String serviceType);

    ServiceItemDto create(ServiceItemDto serviceItemDto);
}
