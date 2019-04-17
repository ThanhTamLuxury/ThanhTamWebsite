package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.common.Constant;
import com.thanhtam.thanhtamluxury.common.ThanhTamException;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.NoSuchFileException;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("api/log")
public class LogApi {

    private Logger logger = LoggerFactory.getLogger(LogApi.class);

    @Value("${spring.application.name}")
    private String PREFIX_FILE_NAME;

    @Value("${logging.file}")
    private String FILE_NAME;

    @ApiOperation("Get log file of today")
    @GetMapping
    public String getTodayLogFile() {
        StringBuilder logContent = new StringBuilder();

        if(! Files.exists(Paths.get(FILE_NAME))){
            try{
                Files.createFile(Paths.get(FILE_NAME));
            }catch (IOException ex){
                throw new ThanhTamException(HttpStatus.NOT_FOUND, Constant.FILE_NAME_NOT_FOUND + FILE_NAME);
            }
        }

        try(BufferedReader br = Files.newBufferedReader(Paths.get(FILE_NAME))) {
            //Read line by line
            String line = "";
            while((line = br.readLine()) != null) {
                logContent.append(line).append("\n");
            }
        } catch(IOException e) {
            logger.error("IOException: ", e);
            throw new ThanhTamException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
        return logContent.toString();
    }

    @ApiOperation("Get log file of a specified date. Note: date format must be yyyy-MM-dd (Ex:2019-04-30)")
    @GetMapping("/{date}")
    public String getLogFileOf(@PathVariable("date") String date) {
        StringBuilder logContent = new StringBuilder();
        String filePath = "logs/" + PREFIX_FILE_NAME + "_" + date + ".log";

        if(! Files.exists(Paths.get(filePath))){
            try{
                Files.createFile(Paths.get(filePath));
            }catch (IOException ex){
                throw new ThanhTamException(HttpStatus.NOT_FOUND, Constant.FILE_NAME_NOT_FOUND + filePath);
            }
        }

        try(BufferedReader br = Files.newBufferedReader(Paths.get(filePath))) {
            //Read line by line
            String line = "";
            while((line = br.readLine()) != null) {
                logContent.append(line).append("\n");
            }
        } catch (NoSuchFileException nsfe) {
            throw new ThanhTamException(HttpStatus.NOT_FOUND, Constant.FILE_NAME_NOT_FOUND + filePath);
        } catch(IOException e) {
            throw new ThanhTamException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
        return logContent.toString();
    }
}
