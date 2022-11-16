import { toast } from "react-toastify";

export const errorPopUp = ({ msg, callback, duration }) => {
  toast.error(msg, {
    onClose: callback || "",
    autoClose: duration || 1500,
  });
};

export const successPopUp = ({ msg, callback, duration }) => {
  toast.success(msg, {
    onClose: callback || "",
    autoClose: duration || 1500,
  });
};
