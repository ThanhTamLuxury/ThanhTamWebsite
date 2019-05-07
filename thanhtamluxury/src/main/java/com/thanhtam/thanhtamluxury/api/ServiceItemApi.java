package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.common.PageDto;
import com.thanhtam.thanhtamluxury.domain.serviceitem.*;
import io.swagger.annotations.ApiOperation;
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
		return serviceItemService.getTop4(serviceType);
	}

	@PostMapping("/{serviceType}")
	public ServiceItemDto createNewService(@PathVariable String serviceType, @RequestBody ServiceItemDto dto){
		return serviceItemService.create(serviceType, dto);
	}

	@PutMapping("/update-info")
	public ServiceInfoDto updateOnlyInfo(@RequestBody ServiceInfoDto infoDto){
		return serviceItemService.updateOnlyInfo(infoDto);
	}

	@PutMapping("/update-price")
	public ServicePriceDto updateOnlyPrice(@RequestBody ServicePriceDto priceDto){
		return serviceItemService.updateOnlyPrice(priceDto);
	}

	@GetMapping("/all/outside-page")
	public PageDto<ServiceItemSmallDto> getOutsideInfo(@RequestParam String serviceType, @RequestParam int size, @RequestParam int page){
		return serviceItemService.getAllSmall(serviceType, size, page);
	}

	@DeleteMapping("{id}")
	public void deleteService(@PathVariable("id") Integer id){
		serviceItemService.deleteService(id);
	}

	@ApiOperation("Multiple delete service item by list of ids")
	@DeleteMapping
	public void multipleDeleteService(@RequestBody List<Integer> ids) {serviceItemService.multipleDeleteService(ids);}

	@GetMapping("/price-info")
	public PageDto<ServicePriceDto> getPriceInfo(@RequestParam String serviceType, @RequestParam int size, @RequestParam int page) {
		return serviceItemService.getPriceInfoInPricePage(serviceType, size, page);
	}

	@GetMapping("search")
	public PageDto<ServiceItemSmallDto> searchServiceByName(@RequestParam String serviceType, @RequestParam String searchValue,
															@RequestParam int size, @RequestParam int page) {
		return serviceItemService.searchServiceByName(serviceType, searchValue, size, page);
	}

}
