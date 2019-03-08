package com.thanhtam.thanhtamluxury.domain.banner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BannerServiceImp implements BannerService {

	@Autowired
	private BannerRepository bannerRepo;
	
	@Override
	public List<BannerDto> getAll() {
		return bannerRepo.findAll()
				.stream()
				.map(Banner::toMappedClass)
				.collect(Collectors.toList());
	}
}
