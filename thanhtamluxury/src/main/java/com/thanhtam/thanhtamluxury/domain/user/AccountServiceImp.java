package com.thanhtam.thanhtamluxury.domain.user;

import com.thanhtam.thanhtamluxury.common.Constant;
import com.thanhtam.thanhtamluxury.common.ThanhTamException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@AllArgsConstructor
public class AccountServiceImp implements AccountService {

    private AccountRepository accountRepository;

    @Override
    public List<Account> getAll() {
        return accountRepository.findAll();
    }

    @Override
    public void changePassword(AccountChangePasswordDto dto) {
        Account account = accountRepository.findById(dto.getUsername())
                            .orElseThrow(() -> new ThanhTamException(HttpStatus.NOT_FOUND, Constant.USERNAME_NOT_FOUND + dto.getUsername()));
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        if(encoder.matches(dto.getOldPassword(), account.getPassword())) {
            if(!Objects.isNull(dto.getNewPassword()) && !dto.getNewPassword().isEmpty()) {
                if(encoder.matches(dto.getNewPassword(), account.getPassword())) {
                    throw new ThanhTamException(HttpStatus.BAD_REQUEST, Constant.NEW_PASSWORD_MUST_BE_DIFFERENT);
                }
                account.setPassword(encoder.encode(dto.getNewPassword()));
                accountRepository.save(account);
            }
        } else {
            throw new ThanhTamException(HttpStatus.BAD_REQUEST, Constant.WRONG_OLD_PASSWORD);
        }
    }
}
