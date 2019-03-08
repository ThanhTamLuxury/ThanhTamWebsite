package com.thanhtam.thanhtamluxury.domain.imageitem;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.thanhtam.thanhtamluxury.common.Mapper;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItem;

import javax.persistence.*;

@Entity
public class ImageItem implements Mapper<ImageItemDto> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String path;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "serviceItemId")
    @JsonBackReference
    private ServiceItem serviceItem;

    //<editor-fold desc="Constructors and getter, setter">
    public ImageItem() {
    }

    public ImageItem(String path, ServiceItem serviceItem) {
        this.path = path;
        this.serviceItem = serviceItem;
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

    public ServiceItem getServiceItem() {
        return serviceItem;
    }

    public void setServiceItem(ServiceItem serviceItem) {
        this.serviceItem = serviceItem;
    }
    //</editor-fold>
}
