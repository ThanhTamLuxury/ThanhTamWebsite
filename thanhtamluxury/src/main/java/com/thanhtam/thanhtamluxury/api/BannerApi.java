package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.domain.banner.BannerDto;
import com.thanhtam.thanhtamluxury.domain.banner.BannerService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/banner")
public class BannerApi {

	private BannerService bannerService;
	
	@GetMapping
	public List<BannerDto> getAll() {
		return bannerService.getAll();
	}

	@PutMapping()
	public BannerDto updateBanner(@RequestBody BannerDto dto) {
		return bannerService.update(dto);
	}

	@PostMapping()
	public BannerDto createBanner(@RequestBody BannerDto dto) {
		return bannerService.create(dto);
	}

	@PostMapping("/many")
	public List<BannerDto> createBanners(@RequestBody List<BannerDto> dtos) {
		return bannerService.createMany(dtos);
	}

	@DeleteMapping("{bannerId}")
	public void deleteBanner(@PathVariable Integer bannerId){
		bannerService.deleteBanner(bannerId);
	}
}
