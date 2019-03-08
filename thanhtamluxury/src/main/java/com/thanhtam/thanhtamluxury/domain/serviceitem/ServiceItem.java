package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.thanhtam.thanhtamluxury.common.Mapper;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItem;
import com.thanhtam.thanhtamluxury.domain.pricedetail.PriceDetail;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class ServiceItem implements Mapper<ServiceItemDto> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @OneToMany(
            fetch = FetchType.LAZY,
            mappedBy = "serviceItem",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    @JsonManagedReference
    private List<ImageItem> imageItems = new ArrayList<>();

    @OneToMany(
            fetch = FetchType.LAZY,
            mappedBy = "serviceItem",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    @JsonManagedReference
    private List<PriceDetail> priceDetails = new ArrayList<>();

    //<editor-fold desc="Constructors and getter, setter">
    public ServiceItem() {
    }

    public ServiceItem(String name, String type, double price, String priceDescription, String shortDescription, String description, String slug, String serviceType, boolean isActive, String mainImage, String location, List<ImageItem> imageItems, List<PriceDetail> priceDetails) {
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
    //</editor-fold>

    @JsonIgnore
    ServiceItem addImage(ImageItem imageItem){
        imageItem.setServiceItem(this);
        imageItems.add(imageItem);
        return this;
    }

    @JsonIgnore
    ServiceItem removeImage(ImageItem imageItem){
        imageItem.setServiceItem(null);
        imageItems.remove(imageItem);
        return this;
    }

    @JsonIgnore
    ServiceItem removeAllImages(){
        imageItems.forEach(imageItem -> imageItem.setServiceItem(null));
        imageItems.clear();
        return this;
    }

    @JsonIgnore
    ServiceItem addAllImages(List<ImageItem> newImageList){
        newImageList.forEach(imageItem -> imageItem.setServiceItem(this));
        imageItems.addAll(newImageList);
        return this;
    }

    @JsonIgnore
    ServiceItem addPriceDetail(PriceDetail priceDetail){
        priceDetail.setServiceItem(this);
        priceDetails.add(priceDetail);
        return this;
    }

    @JsonIgnore
    ServiceItem removePriceDetail(PriceDetail priceDetail){
        priceDetail.setServiceItem(null);
        priceDetails.remove(priceDetail);
        return this;
    }

    @JsonIgnore
    ServiceItem removeAllPriceDetail(){
        priceDetails.forEach(priceDetail -> priceDetail.setServiceItem(null));
        priceDetails.clear();
        return this;
    }

    @JsonIgnore
    ServiceItem addAllPriceDetail(List<PriceDetail> newPriceDetail){
        newPriceDetail.forEach(priceDetail -> priceDetail.setServiceItem(this));
        priceDetails.addAll(newPriceDetail);
        return this;
    }

}
