import { store } from "@core/store/redux/store";
import { clearSession } from "@features/auth/shared/presentation/store/session/session.slice";
import { PUBLIC_ROUTES } from "@app/routes/constants/rutas";

export const cerrarSesionAutomatica = () => {
   store.dispatch(clearSession());
   window.location.href = PUBLIC_ROUTES.LOGIN;
};
