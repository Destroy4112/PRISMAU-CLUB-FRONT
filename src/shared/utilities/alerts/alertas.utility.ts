import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const alertSucces = (text: string) => {
    toast.success(text);
}

export const alertError = (text: string) => {
    toast.error(text);
}

export const alertWarning = (text: string) => {
    toast.error(text, { icon: '⚠️' });
}

export const alertConfirm = async (title: string, confirmButtonText: string) => {
    const result = await Swal.fire({
        title,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText,
        cancelButtonText: "No, cancelar",
    });
    return result.isConfirmed;
};

export const alertOk = async (title: string, text: string, confirmButtonText: string) => {
    const result = await Swal.fire({
        icon: "warning",
        title,
        text,
        confirmButtonColor: "#3085d6",
        confirmButtonText,
        allowOutsideClick: false,
        allowEscapeKey: false,
    });
    return result.isConfirmed;
};