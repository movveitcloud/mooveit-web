import { toast } from "react-toastify";

export const errorPopUp = ({ msg, callback, duration }) => {
  toast.error(msg, {
    onClose: callback || "",
    position: "bottom-center",
    autoClose: duration || 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
  });
};

export const successPopUp = ({ msg, callback, duration }) => {
  toast.success(msg, {
    onClose: callback || "",
    position: "bottom-center",
    autoClose: duration || 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
  });
};
