import { useAppNavigate } from "@app/routes/hooks";
import { useAppDispatch } from "@core/store/redux/hooks";
import { resetCredenciales } from "@core/store/redux/slices/credenciales.slice";
import { resetUser } from "@core/store/redux/slices/user.slice";
import { CONST_TOKEN } from "@shared/constants/constants/constants.model";
import { PUBLIC_ROUTES } from "@shared/constants/rutas/Rutas.model";
import { alertConfirm } from "@shared/utilities/alerts/alertas.utility";
import { removerStorage } from "@shared/utilities/localstorage/localstorage.utility";
import { useCallback } from "react";

export default function useLogout() {
    
    const navigate = useAppNavigate();
    const dispatch = useAppDispatch();

    const logout = useCallback(async (): Promise<void> => {
        const ok = await alertConfirm("¿Quiere cerrar la sesión actual?", "Si, salir!");
        if (!ok) return;

        removerStorage(CONST_TOKEN);
        dispatch(resetUser());
        dispatch(resetCredenciales());
        navigate(PUBLIC_ROUTES.LOGIN, { replace: true });
    }, [dispatch, navigate]);

    return { logout };
}