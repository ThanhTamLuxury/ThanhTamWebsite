package com.thanhtam.thanhtamluxury.domain.header;

import com.thanhtam.thanhtamluxury.common.Mapper;

public class HeaderDto implements Mapper<Header> {
    private Integer id;
    private String name;
    private String to;
    private Boolean exact;

    //<editor-fold desc="Constructors and getter, setter">
    public HeaderDto() {
    }

    public HeaderDto(Integer id, String name, String to, Boolean exact) {
        this.id = id;
        this.name = name;
        this.to = to;
        this.exact = exact;
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

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public Boolean getExact() {
        return exact;
    }

    public void setExact(Boolean exact) {
        this.exact = exact;
    }
    //</editor-fold>
}
