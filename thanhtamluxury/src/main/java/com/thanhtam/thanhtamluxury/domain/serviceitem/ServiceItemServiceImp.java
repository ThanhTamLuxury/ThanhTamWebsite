package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.thanhtam.thanhtamluxury.common.Constant;
import com.thanhtam.thanhtamluxury.common.PageDto;
import com.thanhtam.thanhtamluxury.common.ThanhTamException;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItem;
import com.thanhtam.thanhtamluxury.domain.pricedetail.PriceDetail;
import com.thanhtam.thanhtamluxury.domain.pricedetail.PriceDetailRepository;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ServiceItemServiceImp implements ServiceItemService {

	private ServiceItemRepository serviceItemRepo;

	private PriceDetailRepository priceDetailRepository;

	@Value("${file.default-main-image}")
	private String defaultMainImageUrl;

	public ServiceItemServiceImp(ServiceItemRepository serviceItemRepo, PriceDetailRepository priceDetailRepository){
		this.serviceItemRepo = serviceItemRepo;
		this.priceDetailRepository = priceDetailRepository;
	}

	@Override
	public List<ServiceItemSmallDto> getTop4(String serviceType) {
		try {
			return serviceItemRepo.getTop4(ServiceType.valueOf(serviceType).toString())
					.stream().map(serviceItem -> serviceItem.toMappedClass(ServiceItemSmallDto.class))
					.collect(Collectors.toList());
		} catch (IllegalArgumentException e) {
			throw new ThanhTamException(HttpStatus.BAD_REQUEST, Constant.INVALID_SERVICE_ITEM_TYPE + serviceType);
		}
	}

	@Override
	@Transactional
	public ServiceItemDto create(String serviceType, ServiceItemDto serviceItemDto) {
		try {
			ServiceItem serviceItem = serviceItemDto.toMappedClass();
			serviceItem.setServiceType(ServiceType.valueOf(serviceType).toString());

			validateMainImageUrl(serviceItem);

			serviceItem.setActive(true);
			serviceItem.getImageItems()
					.forEach(imageItem -> imageItem.setServiceItem(serviceItem));
			serviceItem.getPriceDetails()
					.forEach(priceDetail -> priceDetail.setServiceItem(serviceItem));
			return serviceItemRepo.save(serviceItem).toMappedClass();
		} catch (IllegalArgumentException e) {
			throw new ThanhTamException(HttpStatus.BAD_REQUEST, Constant.INVALID_SERVICE_ITEM_TYPE + serviceType);
		}
	}

	@Override
	public PageDto<ServiceItemSmallDto> getAllSmall(String serviceType, int size, int page) {
		PageDto<ServiceItemSmallDto> response = new PageDto<>();
		try {
			String strServiceType = ServiceType.valueOf(serviceType).toString();

			//get services entity first
			List<ServiceItem> serviceEntities = serviceItemRepo.findAllByServiceType(strServiceType, PageRequest.of(page, size, Sort.by("id").descending()));
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

	@ApiOperation("Delete service permanently in the database")
	@Override
	@Transactional
	public void deleteService(Integer id) {
		ServiceItem serviceItem = this.serviceItemRepo.findById(id)
				.orElseThrow(() -> new ThanhTamException(HttpStatus.NOT_FOUND, Constant.SERVICE_ITEM_ID_NOT_FOUND + id));

		serviceItem.removeAllPriceDetail();
		serviceItem.removeAllImages();

		serviceItemRepo.save(serviceItem);

		serviceItemRepo.delete(serviceItem);
	}

	@ApiOperation("Delete multiple service permanently in the database")
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
	public PageDto<ServicePriceDto> getPriceInfoInPricePage(String serviceType, int size, int page) {
		PageDto<ServicePriceDto> response = new PageDto<>();
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

			List<ServicePriceDto> services = serviceEntities.stream()
					.map(item -> item.toMappedClass(ServicePriceDto.class))
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

	@Override
	public ServiceInfoDto updateOnlyInfo(ServiceInfoDto dto){
		ServiceItem serviceItem = serviceItemRepo.findById(dto.getId())
				.orElseThrow(() -> new ThanhTamException(HttpStatus.NOT_FOUND, Constant.SERVICE_ITEM_ID_NOT_FOUND + dto.getId()));
		serviceItem.removeAllImages();
		serviceItem.addAllImages(dto.getImageItems());
		BeanUtils.copyProperties(dto, serviceItem, "imageItems");
		validateMainImageUrl(serviceItem);
		serviceItemRepo.save(serviceItem);
		return dto;
	}

	@Override
	public ServicePriceDto updateOnlyPrice(ServicePriceDto priceDto) {
		ServiceItem serviceItem = serviceItemRepo.findById(priceDto.getId())
				.orElseThrow(() -> new ThanhTamException(HttpStatus.NOT_FOUND, Constant.SERVICE_ITEM_ID_NOT_FOUND + priceDto.getId()));
		serviceItem.removeAllPriceDetail();
		serviceItem.addAllPriceDetail(priceDto.getPriceDetails());
		BeanUtils.copyProperties(priceDto, serviceItem, "priceDetails");
		validateMainImageUrl(serviceItem);
		serviceItemRepo.save(serviceItem);
		return priceDto;
	}

	private void validateMainImageUrl(ServiceItem serviceItem){
		String filename = serviceItem.getMainImage();
		if(filename == null || filename.isEmpty()){
			serviceItem.setMainImage(defaultMainImageUrl);
		}
	}
}






















