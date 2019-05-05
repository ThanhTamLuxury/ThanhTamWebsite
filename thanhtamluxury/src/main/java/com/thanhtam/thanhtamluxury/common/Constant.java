package com.thanhtam.thanhtamluxury.common;

import lombok.experimental.UtilityClass;

@UtilityClass
public class Constant {
    // error
    public final String APPOINTMENT_ID_NOT_FOUND = "Cannot find appointment with id: ";

    public final String INVALID_SERVICE_ITEM_TYPE = "ISIT | Invalid service item type: ";

    public final String SERVICE_ITEM_ID_NOT_FOUND = "SINF | Cannot find service item with id: ";

    public final String SERVICE_ITEM_IDS_NOT_EXISTED = "SINE | Service item ids are not existed: ";

    public final String SERVICE_ITEM_NOT_FOUND = "SINF | Cannot find service item with id and slug: ";

    public final String FILE_UPlOAD_NOT_VALID = "FUNV | Root name is null or multipart file is not valid";

    public final String BANNER_ID_NOT_FOUND = "BNF | Cannot find banner with id: ";

    public final String USERNAME_NOT_FOUND = "UNF | Cannot find account with username: ";

    public final String WRONG_OLD_PASSWORD = "WOP | Wrong old password";

    public final String NEW_PASSWORD_MUST_BE_DIFFERENT = "NPMD | New password must be different with old password";

    public final String FILE_NAME_NOT_FOUND = "FNF | Cannot find file with name ";
}
