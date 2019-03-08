package com.thanhtam.thanhtamluxury.domain.header;

import com.thanhtam.thanhtamluxury.common.Mapper;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Header implements Mapper<HeaderDto> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String to;
    private Boolean exact;

    //<editor-fold desc="Constructors and getter, setter">
    public Header() {
    }

    public Header(String name, String to, Boolean exact) {
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
