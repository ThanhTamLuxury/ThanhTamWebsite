package com.thanhtam.thanhtamluxury.domain.banner;

import com.thanhtam.thanhtamluxury.common.Constant;
import com.thanhtam.thanhtamluxury.common.ThanhTamException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

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

	@Override
	public BannerDto update(BannerDto dto) {
		if(bannerRepo.existsById(dto.getId())){
			return bannerRepo.save(dto.toMappedClass()).toMappedClass();
		}
		else throw new ThanhTamException(HttpStatus.NOT_FOUND, Constant.BANNER_ID_NOT_FOUND + dto.getId());
	}

	@Override
	public BannerDto create(BannerDto dto) {
		return bannerRepo.save(dto.toMappedClass()).toMappedClass();
	}

	@Override
	@Transactional
	public List<BannerDto> createMany(List<BannerDto> dtos) {
		List<Banner> banners = dtos.stream().map(BannerDto::toMappedClass).collect(Collectors.toList());

		//remvove all banner
		bannerRepo.deleteAll();

		return bannerRepo.saveAll(banners).stream().map(Banner::toMappedClass).collect(Collectors.toList());
	}

	@Override
	public void deleteBanner(Integer id) {
		if(bannerRepo.existsById(id)){
			bannerRepo.deleteById(id);
		}else throw new ThanhTamException(HttpStatus.NOT_FOUND, Constant.BANNER_ID_NOT_FOUND + id);
	}
}
