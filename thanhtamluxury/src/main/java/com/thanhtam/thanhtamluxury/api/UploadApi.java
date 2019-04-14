package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.common.ThanhTamException;
import com.thanhtam.thanhtamluxury.utils.uploadfile.FileStorageService;
import com.thanhtam.thanhtamluxury.utils.uploadfile.UploadFileResponse;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/upload")
@AllArgsConstructor
public class UploadApi {

    private FileStorageService fileStorageService;

    @PostMapping("/uploadFile")
    public UploadFileResponse uploadFile(@RequestParam("file") MultipartFile file) {
        String oldFileName = file.getOriginalFilename();
        String fileDownloadUri = null;
        boolean success = true;

        try{
            String newFileName = fileStorageService.storeFile(file);
            fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path("/images/")
                    .path(newFileName)
                    .toUriString();

        }catch (ThanhTamException ex){
            success = false;
        }
        return new UploadFileResponse(oldFileName, fileDownloadUri,
                file.getContentType(), file.getSize(), success);
    }

    @PostMapping("/uploadMultipleFiles")
    public List<UploadFileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
        return Arrays.stream(files)
                .map(this::uploadFile)
                .collect(Collectors.toList());
    }
}
