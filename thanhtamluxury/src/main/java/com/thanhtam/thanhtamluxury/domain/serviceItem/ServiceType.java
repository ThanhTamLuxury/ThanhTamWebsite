package com.thanhtam.thanhtamluxury.domain.serviceItem;

public enum ServiceType {

    ALBUM("Album"),
    WEDDING_DRESS("Wedding dress"),
    WEDDING_VIDEO("Wedding video"),
    FULL_WEDDING_DAY("Full wedding day");

    private final String text;

    ServiceType(String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
