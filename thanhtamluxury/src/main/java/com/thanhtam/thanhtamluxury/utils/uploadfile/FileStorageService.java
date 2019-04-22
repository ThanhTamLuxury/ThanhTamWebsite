package com.thanhtam.thanhtamluxury.utils.uploadfile;

import com.thanhtam.thanhtamluxury.common.ThanhTamException;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.List;
import java.util.stream.Collectors;

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
            String newFileName = UUID.randomUUID() + "_" + Calendar.getInstance().getTimeInMillis() + fileName.substring(lastIndexOFDot);

            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = this.fileStorageLocation.resolve(newFileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            return newFileName;
        } catch (IOException ex) {
            throw new ThanhTamException(HttpStatus.INTERNAL_SERVER_ERROR, "Could not store file " + fileName + ". Please try again!");
        }
    }

    public File[] getAllFileInUploadDirectory(){
        return  new File(fileStorageLocation.toString()).listFiles();
    }

    /***
     * Get invalid images, the image path in database but not exist in server
     * @param imageUrls
     * @return
     */
    public List<String> getInvalidImage(List<String> imageUrls){

        List<String> invalidImageUrls = new ArrayList<>(imageUrls.size());

        for (String imageUrl : imageUrls) {

            int indexOfLastDot = imageUrl.lastIndexOf("/");
            String fileName = imageUrl.substring(indexOfLastDot + 1);
            Path targetLocation = this.fileStorageLocation.resolve(fileName);

            if(! Files.exists(targetLocation)){
                invalidImageUrls.add(imageUrl);
            }
        }
        return invalidImageUrls;
    }

    /***
     * Invalid file is the file that is not in database
     * @param files
     * @param urls
     * @return
     */
    public List<File> getInvalidFilesInServer(File[] files, List<String> urls){
        List<File> invalidFiles = new ArrayList<>();

        for (File file : files) {
            String filename = file.getName();
            boolean exist = urls.stream().anyMatch(url -> url.contains(filename));
            if(! exist){
                invalidFiles.add(file);
            }
        }

        return invalidFiles;

    }
}
