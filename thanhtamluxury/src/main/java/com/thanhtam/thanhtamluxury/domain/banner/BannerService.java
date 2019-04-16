package com.thanhtam.thanhtamluxury.domain.banner;

import java.util.List;

public interface BannerService {
	List<BannerDto> getAll();

    BannerDto update(BannerDto dto);

    BannerDto create(BannerDto dto);

    List<BannerDto> createMany(List<BannerDto> dtos);
}
