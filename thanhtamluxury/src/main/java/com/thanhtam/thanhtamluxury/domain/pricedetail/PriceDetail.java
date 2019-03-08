package com.thanhtam.thanhtamluxury.domain.pricedetail;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.thanhtam.thanhtamluxury.common.Mapper;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItem;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class PriceDetail implements Mapper<PriceDetailDto> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private LocalDate applyDate;
    private double price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "serviceItemId")
    @JsonBackReference
    private ServiceItem serviceItem;

    //<editor-fold desc="Constructors and getter, setter">
    public PriceDetail() {
    }

    public PriceDetail(LocalDate applyDate, double price, ServiceItem serviceItem) {
        this.applyDate = applyDate;
        this.price = price;
        this.serviceItem = serviceItem;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDate getApplyDate() {
        return applyDate;
    }

    public void setApplyDate(LocalDate applyDate) {
        this.applyDate = applyDate;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public ServiceItem getServiceItem() {
        return serviceItem;
    }

    public void setServiceItem(ServiceItem serviceItem) {
        this.serviceItem = serviceItem;
    }
    //</editor-fold>
}
