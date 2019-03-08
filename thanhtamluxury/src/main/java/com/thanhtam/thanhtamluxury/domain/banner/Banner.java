package com.thanhtam.thanhtamluxury.domain.banner;

import com.thanhtam.thanhtamluxury.common.Mapper;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Banner implements Mapper<BannerDto> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String path;

    //<editor-fold desc="Constructors and getter, setter">
    public Banner() {
    }

    public Banner(String path) {
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
