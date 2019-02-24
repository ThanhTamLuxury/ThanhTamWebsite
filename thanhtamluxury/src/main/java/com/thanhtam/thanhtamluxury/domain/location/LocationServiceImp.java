package com.thanhtam.thanhtamluxury.domain.location;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LocationServiceImp implements LocationService {
	
	@Autowired
	private LocationRepository locationRepo;
	
	@Override
	public LocationDto getTop() {
		return locationRepo.getTop().toMappedClass();
	}
}
