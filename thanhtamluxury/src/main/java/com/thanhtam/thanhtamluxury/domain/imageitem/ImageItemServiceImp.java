package com.thanhtam.thanhtamluxury.domain.imageitem;

import com.thanhtam.thanhtamluxury.common.Mapper;
import com.thanhtam.thanhtamluxury.utils.uploadfile.FileStorageService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.File;
import java.nio.file.Files;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ImageItemServiceImp implements ImageItemService {

    private ImageItemRepository imageItemRepo;
    private FileStorageService fileStorageService;

    @Override
    public List<ImageItemDto> getAll() {
        return imageItemRepo.findAll()
                .stream()
                .map(Mapper::toMappedClass)
                .collect(Collectors.toList());
    }

    @Override
    public Map<String, Object> cleanImage() {
        Map<String, Object> response = new HashMap<>();

        List<ImageItem> images = imageItemRepo.findAll();
        File[] files = fileStorageService.getAllFileInUploadDirectory();

        List<ImageItem> invalidImages = fileStorageService.getInvalidImage(images);

        //remove all images
        imageItemRepo.deleteInBatch(invalidImages);

        //remove invalid file
        List<File> invalidFiles = fileStorageService.getInvalidFilesInServer(files, images);

        List<String> fileNames = invalidFiles.stream().map(file -> file.getName())
                                                .collect(Collectors.toList());
        invalidFiles.forEach(file -> file.delete());

        response.put("removeImageItem", invalidImages);
        response.put("removeFiles", fileNames);
        response.put("totalRemove", invalidFiles.size() + invalidImages.size());


        return response;
    }
}
