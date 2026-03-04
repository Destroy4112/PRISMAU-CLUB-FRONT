import { resetCredenciales } from "@core/store/redux/slices/credenciales.slice";
import { resetUser } from "@core/store/redux/slices/user.slice";
import { store } from "@core/store/redux/store";
import { CONST_TOKEN } from "@shared/constants/constants/constants.model";
import { PUBLIC_ROUTES } from "@shared/constants/rutas/Rutas.model";
import { removerStorage } from "../localstorage/localstorage.utility";

export const cerrarSesionAutomatica = () => {
    store.dispatch(resetUser());
    store.dispatch(resetCredenciales());
    removerStorage(CONST_TOKEN);
    window.location.href = PUBLIC_ROUTES.LOGIN;
};
