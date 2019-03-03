package com.thanhtam.thanhtamluxury.domain.banner;

import java.util.List;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class BannerServiceImp implements BannerService {

	private BannerRepository bannerRepo;
	
	@Override
	public List<BannerDto> getAll() {
		return bannerRepo.findAll()
				.stream()
				.map(Banner::toMappedClass)
				.collect(Collectors.toList());
	}
}
