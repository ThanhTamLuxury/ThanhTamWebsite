package com.thanhtam.thanhtamluxury.domain.imageitem;

import com.thanhtam.thanhtamluxury.common.Mapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ImageItemServiceImp implements ImageItemService {

    private ImageItemRepository imageItemRepo;

    @Override
    public List<ImageItemDto> getAll() {
        return imageItemRepo.findAll()
                .stream()
                .map(Mapper::toMappedClass)
                .collect(Collectors.toList());
    }
}
