package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItemDto;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItemService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/imageitem")
public class ImageItemApi {
    private ImageItemService imageItemService;

    @GetMapping("/all")
    public List<ImageItemDto> getAll(){
        return imageItemService.getAll();
    }
}
