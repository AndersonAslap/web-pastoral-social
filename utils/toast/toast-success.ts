import { toast } from "./toast";

type ToastSuccessProps = {
    title?: string
}

export const toastSuccess = ({title = "Sucesso"} : ToastSuccessProps) => {
    return toast.fire({
        icon: 'success',
        title,
        padding: '10px 20px'
    });
}