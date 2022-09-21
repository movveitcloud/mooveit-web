import { toast } from "react-toastify";

export const errorPopUp = ({ msg, callback }) => {
  toast.error(msg, {
    onClose: callback ? callback : "",
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
  });
};

export const successPopUp = ({ msg, callback }) => {
  toast.success(msg, {
    onClose: callback ? callback : "",
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
  });
};
