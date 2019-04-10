package com.thanhtam.thanhtamluxury.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

public @Getter
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
