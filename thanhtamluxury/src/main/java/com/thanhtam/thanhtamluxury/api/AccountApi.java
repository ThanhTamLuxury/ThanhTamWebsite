package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.domain.user.Account;
import com.thanhtam.thanhtamluxury.domain.user.AccountService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/account")
@ControllerAdvice
public class AccountApi {

    private AccountService accountService;

    @GetMapping("/all")
    public List<Account> getAll() {
        return accountService.getAll();
    }
}
