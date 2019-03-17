package com.thanhtam.thanhtamluxury.api;

<<<<<<< HEAD
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.thanhtam.thanhtamluxury.common.PageDto;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItemDto;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItemService;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceType;
=======
import com.thanhtam.thanhtamluxury.common.PageDto;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItemDto;
import com.thanhtam.thanhtamluxury.domain.serviceitem.*;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItemSmallDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
>>>>>>> origin/master

@RestController
@RequestMapping("api/service")
@AllArgsConstructor
public class ServiceItemApi {

	private ServiceItemService serviceItemService;

	@GetMapping("/all")
	public List<ServiceItemDto> getAll(@RequestParam String serviceType) {
		return serviceItemService.findAllByServiceType(serviceType);
	}

	@GetMapping("/{id}")
	public ServiceItemDto getById(@PathVariable Integer id){
		return serviceItemService.findById(id);
	}

	@GetMapping("/top")
	public List<ServiceItemSmallDto> getTopForMenu(@RequestParam String serviceType) {
		return serviceItemService.getTop3(serviceType);
	}
<<<<<<< HEAD
	
	@GetMapping("/all")
	public PageDto<ServiceItemDto> getAll(@RequestParam(name = "serviceType", required = true) String serviceType,
			@RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "10") int size) {
		return serviceItemService.getAll(serviceType, page, size);
	}
=======

	@PostMapping("/video")
	public ServiceItemDto createNewVideo(@RequestBody ServiceItemDto serviceItemDto){
		return serviceItemService.create(ServiceType.WEDDING_VIDEO.toString(), serviceItemDto);
	}

	@PostMapping("/dress")
	public ServiceItemDto createNewDress(@RequestBody ServiceItemDto serviceItemDto){
		return serviceItemService.create(ServiceType.WEDDING_DRESS.toString(), serviceItemDto);
	}

	@PostMapping("/album")
	public ServiceItemDto createNewAlbum(@RequestBody ServiceItemDto serviceItemDto){
		return serviceItemService.create(ServiceType.ALBUM.toString(), serviceItemDto);
	}

	@PutMapping("/update-imageitems/{id}")
	public ServiceItemDto updateImageItems(@PathVariable Integer id, @RequestBody List<ImageItemDto> imageItemDtos){
		return serviceItemService.updateImageItems(id, imageItemDtos);
	}

	@PutMapping("/update-info/{id}")
	public ServiceItemInfoDto updateOnlyInfo(@PathVariable Integer id, @RequestBody ServiceItemInfoDto infoDto){
		return serviceItemService.updateOnlyInfo(id, infoDto);
	}

	@GetMapping("/all/outside-page")
	public PageDto<ServiceItemSmallDto> getOutsideInfo(@RequestParam String serviceType, @RequestParam int size, @RequestParam int page){
		return serviceItemService.getAllSmall(serviceType, size, page);
	}

>>>>>>> origin/master
}
