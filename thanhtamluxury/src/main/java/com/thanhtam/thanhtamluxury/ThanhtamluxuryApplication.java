package com.thanhtam.thanhtamluxury;

import com.thanhtam.thanhtamluxury.utils.uploadfile.FileStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
        FileStorageProperties.class
})
public class ThanhtamluxuryApplication {

    public static void main(String[] args) {
        SpringApplication.run(ThanhtamluxuryApplication.class, args);
    }

}


