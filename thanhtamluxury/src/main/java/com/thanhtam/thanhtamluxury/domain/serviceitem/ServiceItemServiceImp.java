package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.thanhtam.thanhtamluxury.common.Constant;
import com.thanhtam.thanhtamluxury.common.Mapper;
import com.thanhtam.thanhtamluxury.common.ThanhTamException;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItem;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItemDto;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
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

	@Override
	public ServiceItemDto updateImageItems(Integer id, List<ImageItemDto> imageItemDtos) {
		List<ImageItem> newImages = imageItemDtos.stream().map(Mapper::toMappedClass).collect(Collectors.toList());
		ServiceItem serviceItem = serviceItemRepo.findById(id)
				.orElseThrow(() -> new ThanhTamException(HttpStatus.NOT_FOUND, Constant.APPOINTMENT_ID_NOT_FOUND));
		serviceItem.removeAllImages();
		serviceItem.addAllImages(newImages);
		return serviceItemRepo.save(serviceItem).toMappedClass();
	}

	@Override
	public ServiceItemInfoDto updateOnlyInfo(Integer id, ServiceItemInfoDto dto){
		ServiceItem serviceItem = serviceItemRepo.findById(id)
				.orElseThrow(() -> new ThanhTamException(HttpStatus.NOT_FOUND, Constant.SERVICE_ITEM_ID_NOT_FOUND));
		BeanUtils.copyProperties(dto, serviceItem);
		serviceItemRepo.save(serviceItem);
		return dto;
	}

	@Override
	public List<ServiceItemSmallDto> getAllOutsidePageInfo(String serviceType, int size, int page) {
		return serviceItemRepo.findAllByServiceType(serviceType, PageRequest.of(page, size))
				.stream()
				.map(item -> item.toMappedClass(ServiceItemSmallDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public List<ServiceItemDto> findAllByServiceType(String serviceType) {
		return serviceItemRepo.findAllByServiceType(serviceType)
				.stream()
				.map(Mapper::toMappedClass)
				.collect(Collectors.toList());
	}

	@Override
	public ServiceItemDto findById(Integer id) {
		return serviceItemRepo.findById(id)
				.orElseThrow(() -> new ThanhTamException(HttpStatus.NOT_FOUND, Constant.SERVICE_ITEM_ID_NOT_FOUND))
				.toMappedClass();
	}


}
