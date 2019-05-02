package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.domain.location.LocationDto;
import com.thanhtam.thanhtamluxury.domain.location.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/location")
public class LocationApi {
	
	@Autowired
	private LocationService locationService;
	
	@GetMapping("/first")
	public LocationDto getTop() {
		return locationService.getTop();
	}

	@PostMapping
	public LocationDto updateLocation(@RequestBody LocationDto dto){
		return this.locationService.updateLocation(dto);
	}
}
