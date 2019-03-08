package com.thanhtam.thanhtamluxury.domain.imageitem;

import com.thanhtam.thanhtamluxury.common.Mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ImageItemServiceImp implements ImageItemService {

    @Autowired
    private ImageItemRepository imageItemRepo;

    @Override
    public List<ImageItemDto> getAll() {
        return imageItemRepo.findAll()
                .stream()
                .map(Mapper::toMappedClass)
                .collect(Collectors.toList());
    }
}
