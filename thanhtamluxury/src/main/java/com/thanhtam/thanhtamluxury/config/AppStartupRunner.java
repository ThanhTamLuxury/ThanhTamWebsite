package com.thanhtam.thanhtamluxury.config;

import com.thanhtam.thanhtamluxury.domain.user.Account;
import com.thanhtam.thanhtamluxury.domain.user.AccountRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class AppStartupRunner implements CommandLineRunner {

    @Autowired
    private AccountRepository accountRepo;

    @Override
    public void run(String... args) throws Exception {
        Account account = new Account("admin", "admin");
        accountRepo.save(account);
    }
}
