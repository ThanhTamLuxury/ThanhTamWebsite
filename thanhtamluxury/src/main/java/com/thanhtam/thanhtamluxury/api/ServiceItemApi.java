package com.thanhtam.thanhtamluxury.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.thanhtam.thanhtamluxury.common.Constant;
import com.thanhtam.thanhtamluxury.common.ThanhTamException;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItemMenuDTO;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItemService;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceType;

@RestController
@RequestMapping("api/serviceitem")
public class ServiceItemApi {
	@Autowired
	private ServiceItemService serviceItemservice;
	
	@GetMapping("/top")
	public List<ServiceItemMenuDTO> getTopForMenu(@RequestParam(name = "serviceType", required = true) String serviceType) {
		try {
			return serviceItemservice.getTopForMenu(ServiceType.valueOf(serviceType).toString());
		} catch (IllegalArgumentException e) {
			throw new ThanhTamException(HttpStatus.BAD_REQUEST, Constant.INVALID_SERVICE_ITEM_TYPE + serviceType);
		}
	}
}
