package com.thanhtam.thanhtamluxury.domain.imageitem;

import com.thanhtam.thanhtamluxury.common.Mapper;

public class ImageItemDto implements Mapper<ImageItem> {

    private Integer id;
    private String path;
    private String serviceItemId;

    //<editor-fold desc="Constructors and getter, setter">
    public ImageItemDto() {
    }

    public ImageItemDto(Integer id, String path, String serviceItemId) {
        this.id = id;
        this.path = path;
        this.serviceItemId = serviceItemId;
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

    public String getServiceItemId() {
        return serviceItemId;
    }

    public void setServiceItemId(String serviceItemId) {
        this.serviceItemId = serviceItemId;
    }
    //</editor-fold>
}
