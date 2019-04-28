package com.thanhtam.thanhtamluxury.domain.imageitem;

import com.thanhtam.thanhtamluxury.common.Mapper;
import com.thanhtam.thanhtamluxury.domain.banner.BannerRepository;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItem;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItemRepository;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceType;
import com.thanhtam.thanhtamluxury.utils.uploadfile.FileStorageService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.*;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ImageItemServiceImp implements ImageItemService {

    private ImageItemRepository imageItemRepo;
    private BannerRepository bannerRepository;
    private FileStorageService fileStorageService;
    private ServiceItemRepository serviceItemRepository;

    @Override
    public List<ImageItemDto> getAll() {
        return imageItemRepo.findAll()
                .stream()
                .map(Mapper::toMappedClass)
                .collect(Collectors.toList());
    }

    @Override
    public Map<String, Object> cleanImageFileInServer() {
        Map<String, Object> response = new HashMap<>();
        List<String> totalImageUrls = new ArrayList<>();

        totalImageUrls.addAll(getAllImageItemUrls());
        totalImageUrls.addAll(getMainImageUrls());

        File[] files = fileStorageService.getAllFileInUploadDirectory();
        List<File> invalidFiles = fileStorageService.getInvalidFilesInServer(files, totalImageUrls);

        invalidFiles.forEach(file -> file.delete());

        response.put("removeFile", invalidFiles.stream().map(f -> f.getAbsolutePath()));
        response.put("total", invalidFiles.size());
        return response;
    }

    private Map<String, Object> cleanImageItemInDatabase(){
        Map<String, Object> response = new HashMap<>();

        //check image item record not in server
        List<ImageItem> images = imageItemRepo.findAll();
        List<String> invalidImageUrls = getInvalidImageUrls(images);

        List<ImageItem> invalidImages = images.stream().filter(image -> {
            boolean exist =  invalidImageUrls.stream().anyMatch(imageUrl -> imageUrl.equalsIgnoreCase(image.getPath()));
            if(exist){
                return  true;
            }
            return false;
        }).collect(Collectors.toList());

        imageItemRepo.deleteInBatch(invalidImages);

        response.put("image item in database", invalidImages);
        response.put("total", invalidImages.size());

        return response;
    }

    //--private method--//
    private List<String> getInvalidImageUrls(List<ImageItem> images){
        List<String> imageUrls = images.stream().map(image -> image.getPath()).collect(Collectors.toList());
        List<String> invalidImageUrls = fileStorageService.getInvalidImage(imageUrls);
        return invalidImageUrls;
    }

    private List<String> getAllImageItemUrls(){
        List<ImageItem> images = this.imageItemRepo.findAll();
        return images.stream().map(i -> i.getPath()).collect(Collectors.toList());
    }

    private List<String> getMainImageUrls(){
        List<ServiceItem> serviceItems = serviceItemRepository.findAllByServiceType(ServiceType.ALBUM.toString());
        serviceItems.addAll( serviceItemRepository.findAllByServiceType(ServiceType.WEDDING_DRESS.toString()) );
        List<String> mainImageUrls = serviceItems.stream().map(s -> s.getMainImage()).collect(Collectors.toList());
        return mainImageUrls;
    }


}
