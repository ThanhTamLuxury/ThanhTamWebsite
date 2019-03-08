package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.thanhtam.thanhtamluxury.common.Mapper;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItem;
import com.thanhtam.thanhtamluxury.domain.pricedetail.PriceDetail;

import java.util.ArrayList;
import java.util.List;

public class ServiceItemDto implements Mapper<ServiceItem> {

    private Integer id;
    private String name;
    private String type;
    private double price;
    private String priceDescription;
    private String shortDescription;
    private String description;
    private String slug;
    private String serviceType;
    private boolean isActive;
    private String mainImage;
    private String location;
    private List<ImageItem> imageItems = new ArrayList<>();
    private List<PriceDetail> priceDetails = new ArrayList<>();

    //<editor-fold desc="Constructors and getter, setter">
    public ServiceItemDto() {
    }

    public ServiceItemDto(Integer id, String name, String type, double price, String priceDescription, String shortDescription, String description, String slug, String serviceType, boolean isActive, String mainImage, String location, List<ImageItem> imageItems, List<PriceDetail> priceDetails) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.priceDescription = priceDescription;
        this.shortDescription = shortDescription;
        this.description = description;
        this.slug = slug;
        this.serviceType = serviceType;
        this.isActive = isActive;
        this.mainImage = mainImage;
        this.location = location;
        this.imageItems = imageItems;
        this.priceDetails = priceDetails;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getPriceDescription() {
        return priceDescription;
    }

    public void setPriceDescription(String priceDescription) {
        this.priceDescription = priceDescription;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getServiceType() {
        return serviceType;
    }

    public void setServiceType(String serviceType) {
        this.serviceType = serviceType;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public String getMainImage() {
        return mainImage;
    }

    public void setMainImage(String mainImage) {
        this.mainImage = mainImage;
    }
    //</editor-fold>

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<ImageItem> getImageItems() {
        return imageItems;
    }

    public void setImageItems(List<ImageItem> imageItems) {
        this.imageItems = imageItems;
    }

    public List<PriceDetail> getPriceDetails() {
        return priceDetails;
    }

    public void setPriceDetails(List<PriceDetail> priceDetails) {
        this.priceDetails = priceDetails;
    }
}
