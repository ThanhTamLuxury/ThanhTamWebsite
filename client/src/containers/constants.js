
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN = 'LOG_IN';
export const FAILED_LOGIN = 'FAILED_LOGIN';
export const IS_ADDING_SERVICE = 'IS_ADDING_SERVICE';


// ServicesListItem Page
export const PAGE_RESET = 'PAGE_RESET';
export const ADD_SERVICE = 'ADD_SERVICE';
export const UPDATE_SERVICE = 'UPDATE_SERVICE';
export const UPLOAD_FILE = 'UPLOAD_FILE';
export const UPLOAD_MULTIPLE_FILES = 'UPLOAD_MULTIPLE_FILES';
export const PAGE_LOADING = 'PAGE_LOADING';
export const DELETE_SERVICES = 'DELETE_SERVICES';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const UPDATE_ABOUT_US = 'UPDATE_ABOUT_US';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';



//ServiceType
export const SERVICE_ADMIN = 'SERVICE_ADMIN'
export const SERVICE_ALBUM = 'ALBUM'
export const SERVICE_WEDDING_DRESS = 'WEDDING_DRESS'
export const SERVICE_WEDDING_VIDEO = 'WEDDING_VIDEO'
// Price 
export const SERVICE_FULL_WEDDING_DAY = 'FULL_WEDDING_DAY'


export const FETCH_ABOUTUS = 'FETCH_ABOUTUS'
export const FETCH_SERVICES = 'FETCH_SERVICES_ADMIN';
export const FETCH_SERVICEBYID = 'FETCH_SERVICEBYID_ADMIN';
export const FETCH_BANNERS = 'FETCH_BANNERS';




export const MSG_NO_SELECTED_DELETED = 'Vui lòng chọn mục muốn xóa !'
export const MSG_CONFIRM_DELETED = 'Bạn có thật sự muốn xóa ?'
export const MSG_CONFIRM_DELETED_TITLE = 'Bạn có thật sự muốn xóa ?'
export const MSG_CONFIRM_DELETED_TEXT = 'Bạn sẽ không thể lấy lại được thông tin sau khi xóa !'
export const MSG_NOT_FOUND_SERVICEITEM = 'Không có thông tin !'
export const MSG_WRONG_USERNAME = 'Tên tài khoản không tồn tại !'
export const MSG_WRONG_OLD_PASSWORD = 'Mật khẩu cũ không chính xác !'
export const MSG_SIMILAR_OLD_PASSOWRD = 'Mật khẩu mới trùng với mật khẩu cũ !'
export const MSG_REQUEST_LOGIN = 'Vui lòng đăng nhập lại !'
export const MSG_PASSWORD_LENGTH = 'Mật khẩu mới phải từ 5 ký tự trở lên'
export const MSG_ERROR_LOGIN = 'Sai tên đăng nhập hoặc mật khẩu'


export const getCheckValidateMessage = (serviceName , msgCode)=>{
    switch(msgCode){
        case 'REQUIRED':
            return serviceName+' không được để trống';
        default:
            return '';
    }
}







// Action in page

export const ON_CHANGE_MENU = 'ON_CHANGE_MENU'
export const ON_ADDNEW = 'ON_ADDNEW'
export const ON_EDIT = 'ON_EDIT'
export const ON_VIEW_PRICE = 'ON_VIEW_PRICE'

// Youtube prefix
export const YOUTUBE_PREFIX = 'https://www.youtube.com/watch?v='


// tabCode
export const NOT_FOUND = 'NOT_FOUND'

// Change to edit tab

export const TAB_ALBUM_EDIT = 'ALBUM_EDIT'
export const TAB_WEDDING_DRESS_EDIT = 'WEDDING_DRESS_EDIT'
export const TAB_WEDDING_VIDEO_EDIT = 'WEDDING_VIDEO_EDIT'
export const TAB_FULL_WEDDING_DAY_EDIT = 'FULL_WEDDING_DAY_EDIT'
export const TAB_BANNER_EDIT = 'BANNER_EDIT'
export const TAB_PASSWORD_EDIT = 'TAB_PASSWORD_EDIT'



// Change to add new tab
export const TAB_ALBUM_ADD = 'ALBUM_ADD'
export const TAB_WEDDING_DRESS_ADD = 'WEDDING_DRESS_ADD'
export const TAB_WEDDING_VIDEO_ADD = 'WEDDING_VIDEO_ADD'
export const TAB_FULL_WEDDING_DAY_ADD = 'FULL_WEDDING_DAY_ADD'

//Price list
export const TAB_ALBUM_PRICE = 'ALBUM_PRICE'
export const TAB_WEDDING_VIDEO_PRICE = 'WEDDING_VIDEO_PRICE'
export const TAB_FULL_WEDDING_DAY_PRICE = 'FULL_WEDDING_DAY_PRICE'




export const ALBUM_PRICE = 'ALBUM_PRICE'
export const WEDDING_VIDEO_PRICE = 'WEDDING_VIDEO_PRICE'
export const FULL_WEDDING_DAY_PRICE = 'FULL_WEDDING_DAY_PRICE'

// Tabcode - Edit
export const SERVICE_EDIT_ALBUM = 'ALBUM_EDIT'
export const SERVICE_EDIT_DRESS = 'WEDDING_DRESS_EDIT'
export const WEDDING_VIDEO_EDIT = 'WEDDING_VIDEO_EDIT'
export const PRICE_INCLUSIVE_EDIT = 'PRICE_INCLUSIVE_EDIT'

export const SERVICE_ADDNEW_ALBUM = 'SERVICE_ADDNEW_ALBUM'
export const SERVICE_ADDNEW_DRESS = 'SERVICE_ADDNEW_DRESS'
export const SERVICE_ADDNEW_VIDEO = 'SERVICE_ADDNEW_VIDEO'
export const SERVICE_ADDNEW_PRICELIST = 'SERVICE_ADDNEW_PRICELIST'
export const SERVICE_ADDNEW_PRICE_ALBUM = 'SERVICE_ADDNEW_PRICE_ALBUM'
export const SERVICE_ADDNEW_PRICE_VIDEO = 'SERVICE_ADDNEW_PRICE_VIDEO'
export const SERVICE_ADDNEW_PRICE_INCLUSIVE = 'SERVICE_ADDNEW_PRICE_INCLUSIVE'
export const SERVICE_ADDNEW_OTHERS = 'SERVICE_ADDNEW_OTHERS'


export const SERVICE_EDIT_PRICE_ALBUM = 'WEDDING_DRESS_EDIT'
export const SERVICE_EDIT_PRICE_VIDEO = 'WEDDING_DRESS_EDIT'
export const SERVICE_EDIT_PRICE_INCLUSIVE = 'WEDDING_DRESS_EDIT'
export const SERVICE_EDIT_OTHERS = 'WEDDING_DRESS_EDIT'



// Response
export const RES_NOT_2xx = 'RES_NOT_2xx'











