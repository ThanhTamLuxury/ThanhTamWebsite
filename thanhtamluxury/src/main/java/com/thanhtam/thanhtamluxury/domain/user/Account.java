package com.thanhtam.thanhtamluxury.domain.user;

import com.thanhtam.thanhtamluxury.common.Mapper;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Account implements Mapper<AccountDto> {

    @Id
    private String username;
    private String password;

    //<editor-fold desc="Constructors and getter, setter">
    public Account() {
    }

    public Account(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    //</editor-fold>
}
