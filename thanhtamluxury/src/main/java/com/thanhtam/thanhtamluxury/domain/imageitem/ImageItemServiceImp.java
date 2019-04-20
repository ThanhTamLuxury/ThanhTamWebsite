package com.thanhtam.thanhtamluxury.domain.imageitem;

import com.thanhtam.thanhtamluxury.common.Mapper;
import com.thanhtam.thanhtamluxury.domain.banner.Banner;
import com.thanhtam.thanhtamluxury.domain.banner.BannerRepository;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItem;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItemRepository;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceType;
import com.thanhtam.thanhtamluxury.utils.uploadfile.FileStorageService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.File;
import java.nio.file.Files;
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

    //check mainImage, banner, image item
    @Override
    public Map<String, Object> cleanImage() {
        Map<String, Object> response = new HashMap<>();
        List<String> totalImageUrls = new ArrayList<>();

//check mainImage record not in server
        List<ServiceItem> serviceItems = serviceItemRepository.findAllByServiceType(ServiceType.ALBUM.toString());
        serviceItems.addAll( serviceItemRepository.findAllByServiceType(ServiceType.WEDDING_DRESS.toString()) );
        List<String> mainImageUrls = serviceItems.stream().filter(serviceItem -> serviceItem.getMainImage() != null
                                                                                && !serviceItem.getMainImage().isEmpty())
                .map(service -> service.getMainImage())
                .collect(Collectors.toList());
        List<String> invalidMainImageUrls = fileStorageService.getInvalidImage(mainImageUrls);
        response.put("invalidMainImage", invalidMainImageUrls);
        response.put("totalInvalidMainImage", invalidMainImageUrls.size());



//check banner record not in server
        List<Banner> banners = bannerRepository.findAll();
        List<String> bannerUrls = banners.stream().map(bannerUrl -> bannerUrl.getPath()).collect(Collectors.toList());
        List<String> invalidBannerUrls = fileStorageService.getInvalidImage(bannerUrls);

        List<Banner> invalidBanners = banners.stream().filter(banner -> {
            boolean exist =  invalidBannerUrls.stream().anyMatch(bannerUrl -> bannerUrl.equalsIgnoreCase(banner.getPath()));
            if(exist){
                return  true;
            }
            return false;
        }).collect(Collectors.toList());

        response.put("removeBanner", invalidBanners);
        response.put("totalBanner", invalidBanners.size());

//check image item record not in server
        List<ImageItem> images = imageItemRepo.findAll();
        List<String> imageUrls = images.stream().map(image -> image.getPath()).collect(Collectors.toList());
        List<String> invalidImageUrls = fileStorageService.getInvalidImage(imageUrls);

        List<ImageItem> invalidImages = images.stream().filter(image -> {
            boolean exist =  invalidImageUrls.stream().anyMatch(imageUrl -> imageUrl.equalsIgnoreCase(image.getPath()));
            if(exist){
                return  true;
            }
            return false;
        }).collect(Collectors.toList());

        response.put("removeImageItem", invalidImages);
        response.put("totalImageItem", invalidImages.size());


//check image in server not in database
        totalImageUrls.addAll(imageUrls);
        totalImageUrls.addAll(bannerUrls);
        totalImageUrls.addAll(mainImageUrls);

        File[] files = fileStorageService.getAllFileInUploadDirectory();
        List<File> invalidFiles = fileStorageService.getInvalidFilesInServer(files, totalImageUrls);

        List<String> fileNames = invalidFiles.stream().map(file -> file.getName())
                                                .collect(Collectors.toList());
//remove
        imageItemRepo.deleteInBatch(invalidImages);
        bannerRepository.deleteInBatch(invalidBanners);
        invalidFiles.forEach(file -> file.delete());

        response.put("removeFiles", fileNames);
        response.put("totalFiles", fileNames.size());

        response.put("totalRemove", invalidFiles.size() + invalidImages.size() + invalidBanners.size());

        return response;
    }
}
