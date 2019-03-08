package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItemDto;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItemService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/imageitem")
public class ImageItemApi {

    @Autowired
    private ImageItemService imageItemService;

    @GetMapping("/all")
    public List<ImageItemDto> getAll(){
        return imageItemService.getAll();
    }
}
