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
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class UploadFileUtil {

    private static String UPLOADED_FOLDER = "D://uploadImages//";

    public String uploadSingleFile(UploadModel uploadModel){
        return saveUploadedFiles(Arrays.asList(uploadModel)).stream()
                .findFirst()
                .orElse(null);
    }

    public List<String> uploadMultipleFiles(List<UploadModel> uploadModels){
        return saveUploadedFiles(uploadModels);
    }

    private List<String> saveUploadedFiles(List<UploadModel> uploadModelFiles){

        List<String> nameAfterUploaded = new ArrayList<>();

        for (UploadModel uploadModel: uploadModelFiles){
            if (!uploadModel.checkValid()){
                continue;
            }
            try {
                String fileName = uploadModel.getRootName() + "_" + LocalDateTime.now().toString();
                byte[] bytes = uploadModel.getUploadFile().getBytes();
                Path path = Paths.get(UPLOADED_FOLDER + fileName);
                Files.write(path, bytes);
                nameAfterUploaded.add(fileName);
            } catch (Exception e) {
                continue;
            }
        }
        return nameAfterUploaded;
    }
}

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
class UploadModel {
    private String rootName;
    private String url;
    private MultipartFile uploadFile;

    public boolean checkValid(){
        return rootName != null && !uploadFile.isEmpty();
    }
}
