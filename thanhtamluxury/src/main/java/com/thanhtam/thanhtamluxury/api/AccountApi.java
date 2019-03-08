package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.domain.user.Account;
import com.thanhtam.thanhtamluxury.domain.user.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/account")
public class AccountApi {

    @Autowired
    private AccountService accountService;

    @GetMapping("/all")
    public List<Account> getAll() {
        return accountService.getAll();
    }
}
