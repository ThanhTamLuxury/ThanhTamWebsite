package com.thanhtam.thanhtamluxury.common;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.modelmapper.ModelMapper;

public interface Mapper<M> {
    @JsonIgnore
    default Class<M> getDefaultMappedClass() {
        String className = getClass().getName();
        String suffix = "Dto";
        String mappedClassName;
        Class<M> mappedClass = null;
        boolean isDto = className.endsWith(suffix);
        if (isDto) {
            mappedClassName = className.substring(0, className.length() - 3);
        } else {
            mappedClassName = className + suffix;
        }
        try {
            mappedClass = (Class<M>) Class.forName(mappedClassName);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return mappedClass;
    }

    @JsonIgnore
    default <T> T toMappedClass(Class<T> type) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(Mapper.this, type);
    }

    @JsonIgnore
    default M toMappedClass() {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(Mapper.this, getDefaultMappedClass());
    }

}
