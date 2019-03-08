package com.thanhtam.thanhtamluxury.domain.user;

import com.thanhtam.thanhtamluxury.common.Mapper;

public class AccountDto implements Mapper<Account> {

    private String username;
    private String password;

    //<editor-fold desc="Constructors and getter, setter">
    public AccountDto() {
    }

    public AccountDto(String username, String password) {
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
