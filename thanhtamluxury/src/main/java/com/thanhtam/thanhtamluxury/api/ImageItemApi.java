package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItemDto;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItemService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api/imageitem")
public class ImageItemApi {
    private ImageItemService imageItemService;

    @GetMapping("/all")
    public List<ImageItemDto> getAll(){
        return imageItemService.getAll();
    }


    @DeleteMapping("clean")
    public Map<String, Object> cleanImageInServer(){
        return imageItemService.cleanImage();
    }
}
