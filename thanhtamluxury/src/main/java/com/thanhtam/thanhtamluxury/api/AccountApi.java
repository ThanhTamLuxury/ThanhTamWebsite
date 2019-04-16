package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.domain.user.Account;
import com.thanhtam.thanhtamluxury.domain.user.AccountChangePasswordDto;
import com.thanhtam.thanhtamluxury.domain.user.AccountService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("/change-password")
    public void changePassword(@RequestBody AccountChangePasswordDto dto) {
        accountService.changePassword(dto);
    }
}
