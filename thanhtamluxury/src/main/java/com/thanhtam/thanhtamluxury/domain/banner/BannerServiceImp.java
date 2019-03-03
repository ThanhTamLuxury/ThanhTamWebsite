package com.thanhtam.thanhtamluxury.domain.banner;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
