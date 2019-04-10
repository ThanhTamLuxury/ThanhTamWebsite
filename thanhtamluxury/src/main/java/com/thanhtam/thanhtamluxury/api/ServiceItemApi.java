package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.common.PageDto;
import com.thanhtam.thanhtamluxury.common.UploadFileUtil;
import com.thanhtam.thanhtamluxury.common.UploadModel;
import com.thanhtam.thanhtamluxury.common.UploadModel2;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItemDto;
import com.thanhtam.thanhtamluxury.domain.serviceitem.*;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItemSmallDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("api/service")
@AllArgsConstructor
public class ServiceItemApi {

	private ServiceItemService serviceItemService;

	@GetMapping("/{id}/{slug}")
	public ServiceItemDto getByIdAndSlug(@PathVariable Integer id, @PathVariable String slug){
		return serviceItemService.findByIdAndSlug(id, slug);
	}

	@GetMapping("/top")
	public List<ServiceItemSmallDto> getTopForMenu(@RequestParam String serviceType) {
		return serviceItemService.getTop3(serviceType);
	}

	@PutMapping("/uploadImage")
	public String testUpload(@RequestParam("file") MultipartFile file, @RequestBody UploadModel2 uploadModel2){
		UploadModel um = new UploadModel(uploadModel2.getRootName(), uploadModel2.getUrl(), file);
		return UploadFileUtil.uploadSingleFile(um);
	}

	@PostMapping("/{serviceType}")
	public ServiceItemDto createNewService(@PathVariable String serviceType, @RequestBody ServiceItemCreateDto dto){
		return serviceItemService.create(serviceType, dto);
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

}
