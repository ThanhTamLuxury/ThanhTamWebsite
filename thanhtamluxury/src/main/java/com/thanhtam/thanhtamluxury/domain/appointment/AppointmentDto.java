package com.thanhtam.thanhtamluxury.domain.appointment;


import com.thanhtam.thanhtamluxury.common.Mapper;

public class AppointmentDto implements Mapper<Appointment> {

    private Integer id;
    private String name;
    private String address;
    private String email;
    private String phone;
    private String note;
    private boolean isNew;

    //<editor-fold desc="Constructors and getter, setter">
    public AppointmentDto() {
    }

    public AppointmentDto(Integer id, String name, String address, String email, String phone, String note, boolean isNew) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.note = note;
        this.isNew = isNew;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public boolean isNew() {
        return isNew;
    }

    public void setNew(boolean aNew) {
        isNew = aNew;
    }
    //</editor-fold>
}
