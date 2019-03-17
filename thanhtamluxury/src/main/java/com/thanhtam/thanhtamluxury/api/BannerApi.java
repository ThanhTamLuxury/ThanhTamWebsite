package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.domain.banner.BannerDto;
import com.thanhtam.thanhtamluxury.domain.banner.BannerService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
