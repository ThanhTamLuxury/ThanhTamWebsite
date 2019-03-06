package com.thanhtam.thanhtamluxury.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.thanhtam.thanhtamluxury.common.PageDto;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItemDto;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItemService;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceType;

@RestController
@RequestMapping("api/serviceitem")
public class ServiceItemApi {
	@Autowired
	private ServiceItemService serviceItemService;
	
	@GetMapping("/top")
	public List<ServiceItemDto> getTopForMenu(@RequestParam(name = "serviceType", required = true) String serviceType) {
		return serviceItemService.getTop3(serviceType);
	}
	
	@GetMapping("/all")
	public PageDto<ServiceItemDto> getAll(@RequestParam(name = "serviceType", required = true) String serviceType,
			@RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "10") int size) {
		return serviceItemService.getAll(serviceType, page, size);
	}
}
