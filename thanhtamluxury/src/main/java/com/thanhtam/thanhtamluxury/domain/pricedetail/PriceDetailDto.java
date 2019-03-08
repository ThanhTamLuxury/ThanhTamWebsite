package com.thanhtam.thanhtamluxury.domain.pricedetail;

import com.thanhtam.thanhtamluxury.common.Mapper;

import java.time.LocalDate;

public class PriceDetailDto implements Mapper<PriceDetail> {
    private Integer id;
    private LocalDate applyDate;
    private double price;
    private Integer serviceItemId;

    //<editor-fold desc="Constructors and getter, setter">
    public PriceDetailDto() {
    }

    public PriceDetailDto(Integer id, LocalDate applyDate, double price, Integer serviceItemId) {
        this.id = id;
        this.applyDate = applyDate;
        this.price = price;
        this.serviceItemId = serviceItemId;
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

    public Integer getServiceItemId() {
        return serviceItemId;
    }

    public void setServiceItemId(Integer serviceItemId) {
        this.serviceItemId = serviceItemId;
    }
    //</editor-fold>
}
