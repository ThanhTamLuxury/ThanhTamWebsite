
import * as Constant from '../constants';
import Swal from 'sweetalert2';


export const confirmDelete = async () => {
    let isConfirm = false;
    let promise = await Swal.fire({
        title: Constant.MSG_CONFIRM_DELETED_TITLE,
        text: Constant.MSG_CONFIRM_DELETED_TEXT,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đồng ý xóa'
      });
    
    if (promise.value) {
        isConfirm = true;
    }

    return isConfirm;
};

// export const notify = async (message) => {
    
//     let promise = await Swal.fire({
//         position: 'top-end',
//         type: 'success',
//         title: message,
//         showConfirmButton: false,
//         timer: 1500
//       });

//       console.log("timer released: " + promise.value);

//     return false;
      
// };