import { alertError, alertSucces, alertWarning } from "@utils/alerts/alertas.utility";

type BaseSuccess = {
    status: boolean;
    message: string;
    errors?: string[];
};

export function handleApiSuccess(res: BaseSuccess, onOk?: () => void) {
    if (res.status) {
        alertSucces(res.message);
        onOk?.();
        return true;
    }

    (res.errors ?? ["Ocurrió un error"]).forEach((e) => alertWarning(e));
    return false;
}

export function handleApiError(error: unknown, label: string) {
    const message = error instanceof Error ? error.message : typeof error === "string" ? error : "Error inesperado";
    alertError(`${label}: ${message}`);
}