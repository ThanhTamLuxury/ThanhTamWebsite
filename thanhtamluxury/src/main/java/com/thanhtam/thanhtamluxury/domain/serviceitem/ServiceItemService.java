package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.thanhtam.thanhtamluxury.common.PageDto;

import java.util.List;

public interface ServiceItemService {
	List<ServiceItemSmallDto> getTop4(String serviceType);

    ServiceItemDto create(String serviceType, ServiceItemDto serviceItemDto);

    ServiceInfoDto updateOnlyInfo(ServiceInfoDto infoDto);

    PageDto<ServiceItemSmallDto> getAllSmall(String serviceType, int size, int page);

    ServiceItemDto findById(Integer id);

    void deleteService(Integer id);

    void multipleDeleteService(List<Integer> ids);

    PageDto<ServicePriceDto> getPriceInfoInPricePage(String serviceType, int size, int page);

    PageDto<ServiceItemSmallDto> searchServiceByName(String serviceType,  String searchValue, int size,  int page);

    ServicePriceDto updateOnlyPrice(ServicePriceDto priceDto);
}
