package com.thanhtam.thanhtamluxury.domain.serviceitem;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.thanhtam.thanhtamluxury.common.Mapper;
import com.thanhtam.thanhtamluxury.domain.imageitem.ImageItem;
import com.thanhtam.thanhtamluxury.domain.pricedetail.PriceDetail;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
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
    @JsonIgnore
    ServiceItem fromServiceItemCreate(ServiceItemCreateDto dto){
        setName(dto.getName());
        setServiceType(dto.getServiceType());
        setActive(dto.isActive());
        setDescription(dto.getDescription());
        setShortDescription(dto.getShortDescription());
        setSlug(dto.getSlug());
        setLocation(dto.getLocation());
        return this;
    }

}
