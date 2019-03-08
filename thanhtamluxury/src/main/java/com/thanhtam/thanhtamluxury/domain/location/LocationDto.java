package com.thanhtam.thanhtamluxury.domain.location;

import com.thanhtam.thanhtamluxury.common.Mapper;

public class LocationDto implements Mapper<Location> {
    private Integer id;
    private String address;
    private String phone;
    private String email;
    private String googleLocation;

    //<editor-fold desc="Constructors and getter, setter">
    public LocationDto() {
    }

    public LocationDto(Integer id, String address, String phone, String email, String googleLocation) {
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.googleLocation = googleLocation;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGoogleLocation() {
        return googleLocation;
    }

    public void setGoogleLocation(String googleLocation) {
        this.googleLocation = googleLocation;
    }
    //</editor-fold>
}
