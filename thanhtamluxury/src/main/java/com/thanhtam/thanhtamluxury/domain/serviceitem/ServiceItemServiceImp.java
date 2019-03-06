package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.thanhtam.thanhtamluxury.common.Constant;
import com.thanhtam.thanhtamluxury.common.ThanhTamException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ServiceItemServiceImp implements ServiceItemService {

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

	@Override
	public ServiceItemDto create(ServiceItemDto serviceItemDto) {
		ServiceItem serviceItem = serviceItemDto.toMappedClass();
		serviceItem.getImageItems()
				.forEach(imageItem -> imageItem.setServiceItem(serviceItem));
		serviceItem.getPriceDetails()
				.forEach(priceDetail -> priceDetail.setServiceItem(serviceItem));
		return serviceItemRepo.save(serviceItem).toMappedClass();
	}


}
