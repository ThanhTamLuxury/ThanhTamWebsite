package com.thanhtam.thanhtamluxury.domain.serviceitem;

import java.util.List;

public interface ServiceItemService {
	public List<ServiceItemMenuDTO> getTopForMenu(String serviceType);
}
