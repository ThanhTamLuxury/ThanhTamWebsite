package com.thanhtam.thanhtamluxury.domain.serviceitem;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceItemServiceImp implements ServiceItemService {

	@Autowired
	private ServiceItemRepository serviceItemRepo;
	
	@Override
	public List<ServiceItemMenuDTO> getTopForMenu(String serviceType) {
		return serviceItemRepo.getTopForMenu(serviceType)
				.stream()
				.map(menu -> {
					ServiceItemMenuDTO menuDTO = new ServiceItemMenuDTO();
					menuDTO.setId(menu.getId());
					menuDTO.setName(menu.getName());
					menuDTO.setSlug(menu.getSlug());
					return menuDTO;
				})
				.collect(Collectors.toList());
	}
}
