package com.thanhtam.thanhtamluxury.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class UploadFileUtil {

    private static String UPLOADED_FOLDER = "D://uploadImages//";

    public static String uploadSingleFile(UploadModel uploadModel){
        return saveUploadedFiles(Collections.singletonList(uploadModel)).stream()
                .findFirst()
                .orElse(null);
    }

    public static List<String> uploadMultipleFiles(List<UploadModel> uploadModels){
        return saveUploadedFiles(uploadModels);
    }

    private static List<String> saveUploadedFiles(List<UploadModel> uploadModelFiles){

        List<String> nameAfterUploaded = new ArrayList<>();

        for (UploadModel uploadModel: uploadModelFiles){
            if (!uploadModel.checkValid()){
                continue;
            }
            try {
                MultipartFile file = uploadModel.getUploadFile();
                String fileName = uploadModel.getRootName() + "_" + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
                byte[] bytes = uploadModel.getUploadFile().getBytes();
                String extensionFile = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
                Path path = Paths.get(UPLOADED_FOLDER + fileName + extensionFile);
                Files.write(path, bytes);
                nameAfterUploaded.add(fileName);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return nameAfterUploaded;
    }
}
