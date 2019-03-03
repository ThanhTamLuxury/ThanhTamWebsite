package com.thanhtam.thanhtamluxury.domain.serviceitem;

import java.util.List;

public interface ServiceItemService {
	public List<ServiceItemDto> getTop3(String serviceType);
}
