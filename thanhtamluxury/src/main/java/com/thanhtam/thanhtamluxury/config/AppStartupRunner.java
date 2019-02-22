package com.thanhtam.thanhtamluxury.config;

import com.thanhtam.thanhtamluxury.domain.user.Account;
import com.thanhtam.thanhtamluxury.domain.user.AccountRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class AppStartupRunner implements CommandLineRunner {

    private AccountRepository accountRepo;

    @Override
    public void run(String... args) throws Exception {
        Account account = new Account("admin", "admin");
        accountRepo.save(account);
    }
}
