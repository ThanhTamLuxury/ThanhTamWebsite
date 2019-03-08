package com.thanhtam.thanhtamluxury.domain.banner;

import com.thanhtam.thanhtamluxury.common.Mapper;

public class BannerDto implements Mapper<Banner> {
    private Integer id;
    private String path;

    //<editor-fold desc="Constructors and getter, setter">
    public BannerDto() {
    }

    public BannerDto(Integer id, String path) {
        this.id = id;
        this.path = path;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
    //</editor-fold>
}
