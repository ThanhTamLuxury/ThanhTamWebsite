package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItemDto;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItemService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/serviceitem")
@AllArgsConstructor
public class ServiceItemApi {

	private ServiceItemService serviceItemService;
	
	@GetMapping("/top")
	public List<ServiceItemDto> getTopForMenu(@RequestParam String serviceType) {
		return serviceItemService.getTop3(serviceType);
	}

	@PostMapping
	public ServiceItemDto create(@RequestBody ServiceItemDto serviceItemDto){
		return serviceItemService.create(serviceItemDto);
	}

}
