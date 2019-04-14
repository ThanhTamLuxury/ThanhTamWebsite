package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.common.PageDto;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItemDto;
import com.thanhtam.thanhtamluxury.domain.serviceitem.*;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItemSmallDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

	@PutMapping("/update-imageitems/{id}")
	public ServiceItemDto updateImageItems(@PathVariable Integer id, @RequestBody List<ImageItemDto> imageItemDtos){
		return serviceItemService.updateImageItems(id, imageItemDtos);
	}

	@PutMapping("/update-info/{id}")
	public ServiceItemInfoDto updateOnlyInfo(@PathVariable Integer id, @RequestBody ServiceItemInfoDto infoDto){
		return serviceItemService.updateOnlyInfo(id, infoDto);
	}

	@GetMapping("/all/outside-page")
	public PageDto<ServiceItemSmallDto> getOutsideInfo(@RequestParam String serviceType, @RequestParam int size, @RequestParam int page){
		return serviceItemService.getAllSmall(serviceType, size, page);
	}
}
