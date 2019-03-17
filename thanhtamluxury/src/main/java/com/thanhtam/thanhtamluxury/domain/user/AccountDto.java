package com.thanhtam.thanhtamluxury.domain.user;

import com.thanhtam.thanhtamluxury.common.Mapper;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AccountDto implements Mapper<Account> {

    private String username;
    private String password;
}
