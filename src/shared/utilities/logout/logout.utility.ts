import { store } from "@core/store/redux/store";
import { clearSession } from "@features/auth/login/presentation/store/auth.slice";
import { PUBLIC_ROUTES } from "@shared/constants/rutas/Rutas.model";

export const cerrarSesionAutomatica = () => {
    store.dispatch(clearSession());
    window.location.href = PUBLIC_ROUTES.LOGIN;
};
