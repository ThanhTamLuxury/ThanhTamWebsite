package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.common.PageDto;
import com.thanhtam.thanhtamluxury.domain.serviceitem.*;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/service")
@AllArgsConstructor
public class ServiceItemApi {

	private ServiceItemService serviceItemService;

	@GetMapping("/{id}")
	public ServiceItemDto getById(@PathVariable Integer id){
		ServiceItemDto dto = serviceItemService.findById(id);
		return dto;
	}

	@GetMapping("/top")
	public List<ServiceItemSmallDto> getTopForMenu(@RequestParam String serviceType) {
		return serviceItemService.getTop3(serviceType);
	}

	@PostMapping("/{serviceType}")
	public ServiceItemDto createNewService(@PathVariable String serviceType, @RequestBody ServiceItemDto dto){
		return serviceItemService.create(serviceType, dto);
	}

//	@PutMapping("/update-imageitems/{id}")
//	public ServiceItemDto updateImageItems(@PathVariable Integer id, @RequestBody List<ImageItemDto> imageItemDtos){
//		return serviceItemService.updateImageItems(id, imageItemDtos);
//	}
//
//	@PutMapping("/update-pricedetails/{id}")
//	public ServiceItemDto updatePriceDetails(@PathVariable Integer id, @RequestBody List<PriceDetailDto> priceDetailDtos){
//		return serviceItemService.updatePriceDetail(id, priceDetailDtos);
//	}

	@PutMapping("/update-info/{id}")
	public ServiceItemInfoDto updateOnlyInfo(@PathVariable Integer id, @RequestBody ServiceItemInfoDto infoDto){
		return serviceItemService.updateOnlyInfo(id, infoDto);
	}

	@GetMapping("/all/outside-page")
	public PageDto<ServiceItemSmallDto> getOutsideInfo(@RequestParam String serviceType, @RequestParam int size, @RequestParam int page){
		return serviceItemService.getAllSmall(serviceType, size, page);
	}

	@DeleteMapping("{id}")
	public void deleteService(@PathVariable("id") Integer id){
		serviceItemService.deleteService(id);
	}

	@PutMapping("{id}")
	public ServiceItemDto updateService(@PathVariable("id") Integer id, @RequestBody ServiceItemDto serviceItemDto){
		return serviceItemService.updateService(id, serviceItemDto);
	}

	@GetMapping("/price-info")
	public PageDto<ServicePriceInfo> getPriceInfo(@RequestParam String serviceType, @RequestParam int size, @RequestParam int page) {
		return serviceItemService.getPriceInfoInPricePage(serviceType, size, page);
	}
}
