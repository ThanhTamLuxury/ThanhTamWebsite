package com.thanhtam.thanhtamluxury.domain.serviceitem;

public class ServiceItemSmallDto {
    private Integer id;
    private String name;
    private String slug;
    private String mainImage;

    //<editor-fold desc="Constructors and getter, setter">
    public ServiceItemSmallDto() {
    }

    public ServiceItemSmallDto(Integer id, String name, String slug, String mainImage) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.mainImage = mainImage;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getMainImage() {
        return mainImage;
    }

    public void setMainImage(String mainImage) {
        this.mainImage = mainImage;
    }
    //</editor-fold>
}
