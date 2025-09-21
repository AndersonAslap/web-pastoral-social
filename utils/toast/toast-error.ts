import { toast } from "./toast";

type ToastErrorProps = {
    title?: string
}

export const toastError = ({title = "Error"} : ToastErrorProps) => {
    return toast.fire({
        icon: 'error',
        title,
        padding: '10px 20px'
    });
}