package com.thanhtam.thanhtamluxury.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thanhtam.thanhtamluxury.domain.location.LocationDto;
import com.thanhtam.thanhtamluxury.domain.location.LocationService;

@RestController
@RequestMapping("api/location")
public class LocationApi {
	
	@Autowired
	private LocationService locationService;
	
	@GetMapping("/first")
	public LocationDto getTop() {
		return locationService.getTop();
	}
}
