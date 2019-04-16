package com.thanhtam.thanhtamluxury.domain.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AccountChangePasswordDto {

    private String username;

    private String oldPassword;

    private String newPassword;
}
