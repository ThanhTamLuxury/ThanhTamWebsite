package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.thanhtam.thanhtamluxury.common.*;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItem;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItemService;
import com.thanhtam.thanhtamluxury.domain.pricedetail.PriceDetail;
import com.thanhtam.thanhtamluxury.domain.pricedetail.PriceDetailRepository;

import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ServiceItemServiceImp implements ServiceItemService {

	private ServiceItemRepository serviceItemRepo;

	private PriceDetailRepository priceDetailRepository;

	private ImageItemService imageItemService;

	@Override
	public List<ServiceItemSmallDto> getTop3(String serviceType) {
		try {
			return serviceItemRepo.getTop3(ServiceType.valueOf(serviceType).toString())
					.stream().map(serviceItem -> serviceItem.toMappedClass(ServiceItemSmallDto.class))
					.collect(Collectors.toList());
		} catch (IllegalArgumentException e) {
			throw new ThanhTamException(HttpStatus.BAD_REQUEST, Constant.INVALID_SERVICE_ITEM_TYPE + serviceType);
		}
	}
	@Override
	public ServiceItemDto create(String serviceType, ServiceItemDto serviceItemDto) {
		try {
			ServiceItem serviceItem = serviceItemDto.toMappedClass();
			serviceItem.setServiceType(ServiceType.valueOf(serviceType).toString());
			serviceItem.getImageItems()
					.forEach(imageItem -> imageItem.setServiceItem(serviceItem));
			serviceItem.getPriceDetails()
					.forEach(priceDetail -> priceDetail.setServiceItem(serviceItem));
			return serviceItemRepo.save(serviceItem).toMappedClass();
		} catch (IllegalArgumentException e) {
			throw new ThanhTamException(HttpStatus.BAD_REQUEST, Constant.INVALID_SERVICE_ITEM_TYPE + serviceType);
		}
	}

	private ServiceItemDto updateImageItems(Integer id, List<ImageItem> imageItemDtos) {
		ServiceItem serviceItem = serviceItemRepo.findById(id)
				.orElseThrow(() -> new ThanhTamException(HttpStatus.NOT_FOUND, Constant.SERVICE_ITEM_ID_NOT_FOUND + id));

		serviceItem.getImageItems().clear();
		imageItemDtos.forEach(priceDetail -> priceDetail.setServiceItem(serviceItem));
		serviceItem.getImageItems().addAll(imageItemDtos);
		return serviceItemRepo.save(serviceItem).toMappedClass();
	}

	private ServiceItemDto updatePriceDetail(Integer id, List<PriceDetail> priceDetailDtos) {
		ServiceItem serviceItem = serviceItemRepo.findById(id)
				.orElseThrow(() -> new ThanhTamException(HttpStatus.NOT_FOUND, Constant.SERVICE_ITEM_ID_NOT_FOUND + id));

		serviceItem.removeAllPriceDetail();
		serviceItem.addAllPriceDetail(priceDetailDtos);
		return serviceItemRepo.save(serviceItem).toMappedClass();
	}

	@Override
	public ServiceItemInfoDto updateOnlyInfo(Integer id, ServiceItemInfoDto dto){
		ServiceItem serviceItem = serviceItemRepo.findById(id)
				.orElseThrow(() -> new ThanhTamException(HttpStatus.NOT_FOUND, Constant.SERVICE_ITEM_ID_NOT_FOUND + id));
		BeanUtils.copyProperties(dto, serviceItem);
		serviceItemRepo.save(serviceItem);
		return dto;
	}

	@Override
	public PageDto<ServiceItemSmallDto> getAllSmall(String serviceType, int size, int page) {
		PageDto<ServiceItemSmallDto> response = new PageDto<>();
		try {
			String strServiceType = ServiceType.valueOf(serviceType).toString();

			//get services entity first
			List<ServiceItem> serviceEntities = serviceItemRepo.findAllByServiceType(strServiceType, PageRequest.of(page, size));
			LocalDate today = LocalDate.now();
			serviceEntities.forEach(service ->{
				Double currentPrice = priceDetailRepository.findCurrentPriceById(service.getId(), today);
				if(currentPrice != null){
					service.setPrice(currentPrice);
				}
			});

			List<ServiceItemSmallDto> services = serviceEntities.stream()
					.map(item -> item.toMappedClass(ServiceItemSmallDto.class))
					.collect(Collectors.toList());
			Long totalItem = serviceItemRepo.countAllByServiceType(strServiceType);
			response.setTotalItem(totalItem);
			response.setTotalPage(totalItem / size + (totalItem % size == 0 ? 0 : 1));
			response.setContent(services);
			response.setPage(page);
			response.setSize(size);
		} catch (IllegalArgumentException e) {
			response.setContent(new ArrayList<>());
			throw new ThanhTamException(HttpStatus.BAD_REQUEST, Constant.INVALID_SERVICE_ITEM_TYPE + serviceType);
		}
		return response;
	}

	@Override
	public ServiceItemDto findById(Integer id) {
		return serviceItemRepo.findById(id)
				.orElseThrow(() -> new ThanhTamException(HttpStatus.NOT_FOUND, Constant.SERVICE_ITEM_ID_NOT_FOUND + id))
				.toMappedClass();
	}

	@Override
	public ServiceItemDto findByIdAndSlug(Integer id, String slug) {
		return serviceItemRepo.findByIdAndSlug(id, slug)
				.orElseThrow(() -> new ThanhTamException(HttpStatus.NOT_FOUND, Constant.SERVICE_ITEM_NOT_FOUND + id + ", "+ slug))
				.toMappedClass();
	}

	@Override
	public void deleteService(Integer id) {
		ServiceItem serviceItem = this.serviceItemRepo.findById(id)
				.orElseThrow(() -> new ThanhTamException(HttpStatus.NOT_FOUND, Constant.SERVICE_ITEM_ID_NOT_FOUND + id));

		serviceItem.removeAllPriceDetail();
		serviceItem.removeAllImages();

		serviceItemRepo.save(serviceItem);

		serviceItemRepo.delete(serviceItem);
	}

	@Override
	@Transactional
	public void multipleDeleteService(List<Integer> ids) {
		String serviceIdNotExisted = "";
		for (Integer id: ids) {
			Optional<ServiceItem> service = serviceItemRepo.findById(id);
			if(!service.isPresent()) {
				serviceIdNotExisted += id + ", ";
			}
		}
		if(!serviceIdNotExisted.isEmpty()) {
			//Remove last comma
			serviceIdNotExisted = serviceIdNotExisted.substring(0, serviceIdNotExisted.lastIndexOf(","));
			throw new ThanhTamException(HttpStatus.NOT_FOUND, Constant.SERVICE_ITEM_IDS_NOT_EXISTED + serviceIdNotExisted);
		}
		for (Integer id: ids) {
			deleteService(id);
		}
	}

	@Override
	@Transactional
	public ServiceItemDto updateService(Integer id, ServiceItemDto dto) {
		ServiceItem serviceItem = this.serviceItemRepo.findById(id)
				.orElseThrow(() -> new ThanhTamException(HttpStatus.NOT_FOUND, Constant.SERVICE_ITEM_ID_NOT_FOUND + id));

		//copy properties
		ServiceItemInfoDto infoDto = new ServiceItemInfoDto();
		BeanUtils.copyProperties(dto, infoDto);
		BeanUtils.copyProperties(infoDto, serviceItem);

		updateImageItems(id, dto.getImageItems());
		updatePriceDetail(id, dto.getPriceDetails());
		return serviceItemRepo.save(serviceItem).toMappedClass();
	}

	@Override
	public PageDto<ServicePriceInfo> getPriceInfoInPricePage(String serviceType, int size, int page) {
		PageDto<ServicePriceInfo> response = new PageDto<>();
		try {
			String strServiceType = ServiceType.valueOf(serviceType).toString();

			//get services entity first
			List<ServiceItem> serviceEntities = serviceItemRepo.findAllByServiceType(strServiceType, PageRequest.of(page, size));
			LocalDate today = LocalDate.now();
			serviceEntities.forEach(service ->{
				Double currentPrice = priceDetailRepository.findCurrentPriceById(service.getId(), today);
				if(currentPrice != null){
					service.setPrice(currentPrice);
				}
			});

			List<ServicePriceInfo> services = serviceEntities.stream()
					.map(item -> item.toMappedClass(ServicePriceInfo.class))
					.collect(Collectors.toList());

			Long totalItem = serviceItemRepo.countAllByServiceType(strServiceType);
			response.setTotalItem(totalItem);
			response.setTotalPage(totalItem / size + (totalItem % size == 0 ? 0 : 1));
			response.setContent(services);
			response.setPage(page);
			response.setSize(size);
		} catch (IllegalArgumentException e) {
			response.setContent(new ArrayList<>());
			throw new ThanhTamException(HttpStatus.BAD_REQUEST, Constant.INVALID_SERVICE_ITEM_TYPE + serviceType);
		}
		return response;
	}

	@Override
	public PageDto<ServiceItemSmallDto> searchServiceByName(String serviceType, String searchValue, int size, int page) {
		PageDto<ServiceItemSmallDto> response = new PageDto<>();
		try {

			var services = serviceItemRepo.searchServiceByName(ServiceType.valueOf(serviceType).toString(), "%"+searchValue+"%", PageRequest.of(page, size))
					.stream().map(serviceItem -> serviceItem.toMappedClass(ServiceItemSmallDto.class))
					.collect(Collectors.toList());

			long totalItem = services.size();

			response.setTotalItem(totalItem);
			response.setTotalPage(totalItem / size + (totalItem % size == 0 ? 0 : 1));
			response.setContent(services);
			response.setPage(page);
			response.setSize(size);
		} catch (IllegalArgumentException e) {
			response.setContent(new ArrayList<>());
			throw new ThanhTamException(HttpStatus.BAD_REQUEST, Constant.INVALID_SERVICE_ITEM_TYPE + serviceType);
		}
		return response;
	}
}






















