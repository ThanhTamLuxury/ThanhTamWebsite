package com.thanhtam.thanhtamluxury;

import com.thanhtam.thanhtamluxury.utils.uploadfile.FileStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
@EnableConfigurationProperties({
        FileStorageProperties.class
})
public class ThanhtamluxuryApplication {

    public static void main(String[] args) {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        System.setProperty("timestamp", String.valueOf(dateFormat.format(new Date())));
        SpringApplication.run(ThanhtamluxuryApplication.class, args);
    }

}


