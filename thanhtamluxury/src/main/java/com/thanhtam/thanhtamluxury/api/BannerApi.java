package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.domain.banner.BannerDto;
import com.thanhtam.thanhtamluxury.domain.banner.BannerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/banner")
public class BannerApi {

	@Autowired
	private BannerService bannerService;
	
	@GetMapping
	public List<BannerDto> getAll() {
		return bannerService.getAll();
	}
}
