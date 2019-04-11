package com.thanhtam.thanhtamluxury.utils.uploadfile;

import com.thanhtam.thanhtamluxury.common.ThanhTamException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class FileStorageService {
    private final Path fileStorageLocation;

    @Autowired
    public FileStorageService(FileStorageProperties fileStorageProperties) {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new ThanhTamException(HttpStatus.INTERNAL_SERVER_ERROR, "Could not create the directory where the uploaded files will be stored.");
        }
    }

    public String storeFile(MultipartFile file) {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new ThanhTamException(HttpStatus.INTERNAL_SERVER_ERROR, "Sorry! Filename contains invalid path sequence " + fileName);
            }
            // calculate filename
            int lastIndexOFDot = fileName.lastIndexOf(".");
            String newFileName = fileName.substring(0, lastIndexOFDot) + "_" + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss")) + fileName.substring(lastIndexOFDot);

            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = this.fileStorageLocation.resolve(newFileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            return newFileName;
        } catch (IOException ex) {
            throw new ThanhTamException(HttpStatus.INTERNAL_SERVER_ERROR, "Could not store file " + fileName + ". Please try again!");
        }
    }
}
