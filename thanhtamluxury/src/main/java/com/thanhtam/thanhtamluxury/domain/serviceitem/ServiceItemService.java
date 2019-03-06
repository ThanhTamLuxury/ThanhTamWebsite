package com.thanhtam.thanhtamluxury.domain.serviceitem;

import java.util.List;

import com.thanhtam.thanhtamluxury.common.PageDto;

public interface ServiceItemService {
	public List<ServiceItemDto> getTop3(String serviceType);
	
	public PageDto<ServiceItemDto> getAll(String serviceType, int page, int size);
}
