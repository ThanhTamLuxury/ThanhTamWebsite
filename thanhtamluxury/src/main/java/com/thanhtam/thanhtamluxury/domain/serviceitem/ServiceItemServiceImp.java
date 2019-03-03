package com.thanhtam.thanhtamluxury.domain.serviceitem;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.thanhtam.thanhtamluxury.common.Constant;
import com.thanhtam.thanhtamluxury.common.ThanhTamException;

@Service
public class ServiceItemServiceImp implements ServiceItemService {

	@Autowired
	private ServiceItemRepository serviceItemRepo;

	@Override
	public List<ServiceItemDto> getTop3(String serviceType) {
		try {
			return serviceItemRepo.getTop3(ServiceType.valueOf(serviceType).toString())
					.stream().map(ServiceItem::toMappedClass)
					.collect(Collectors.toList());
		} catch (IllegalArgumentException e) {
			throw new ThanhTamException(HttpStatus.BAD_REQUEST, Constant.INVALID_SERVICE_ITEM_TYPE + serviceType);
		}
	}
	
	
}
