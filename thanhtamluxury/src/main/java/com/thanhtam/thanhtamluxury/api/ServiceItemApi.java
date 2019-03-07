package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItemDto;
import com.thanhtam.thanhtamluxury.domain.serviceitem.*;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItemSmallDto;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/serviceitem")
@AllArgsConstructor
public class ServiceItemApi {

	private ServiceItemService serviceItemService;

	@GetMapping("/all")
	public List<ServiceItemDto> getAll(@RequestParam String serviceType) {
		return serviceItemService.findAllByServiceType(serviceType);
	}

	@GetMapping("/{id}")
	public ServiceItemDto getById(@PathVariable Integer id){
		return serviceItemService.findById(id);
	}

	@GetMapping("/top")
	public List<ServiceItemDto> getTopForMenu(@RequestParam String serviceType) {
		return serviceItemService.getTop3(serviceType);
	}

	@PostMapping
	public ServiceItemDto create(@RequestBody ServiceItemDto serviceItemDto){
		return serviceItemService.create(serviceItemDto);
	}

	@PutMapping("/update-imageitems/{id}")
	public ServiceItemDto updateImageItems(@PathVariable Integer id, @RequestBody List<ImageItemDto> imageItemDtos){
		return serviceItemService.updateImageItems(id, imageItemDtos);
	}

	@PutMapping("/update-info/{id}")
	public ServiceItemInfoDto updateOnlyInfo(@PathVariable Integer id, @RequestBody ServiceItemInfoDto infoDto){
		return serviceItemService.updateOnlyInfo(id, infoDto);
	}

	@GetMapping("/all/outside-page")
	public List<ServiceItemSmallDto> getOutsideInfo(@RequestParam String serviceType, @RequestParam int size, @RequestParam int page){
		return serviceItemService.getAllOutsidePageInfo(serviceType, size, page);
	}

}
