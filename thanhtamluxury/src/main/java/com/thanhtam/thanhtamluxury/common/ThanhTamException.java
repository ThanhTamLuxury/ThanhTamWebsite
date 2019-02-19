package com.thanhtam.thanhtamluxury.common;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class ThanhTamException extends ResponseStatusException {

    public ThanhTamException(HttpStatus status, String errorMessage) {
        super(status, errorMessage);
    }
}
