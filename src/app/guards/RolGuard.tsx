import { useAppSelector } from "@core/store/redux/hooks";
import { ERROR_ROUTES } from "@shared/constants/rutas/Rutas.model";
import { Navigate, Outlet } from "react-router";
;

const prohibido = <Navigate replace to={ERROR_ROUTES.PAGE_403} />;

export const SuperadminGuard = () => {
    const rol = useAppSelector((state) => state.credenciales.Rol);
    return rol === 0 ? <Outlet /> : prohibido;
}

export const AdminGuard = () => {
    const rol = useAppSelector((state) => state.credenciales.Rol);
    return (rol === 1 || rol === 0) ? <Outlet /> : prohibido;
}

export const SocioGuard = () => {
    const rol = useAppSelector((state) => state.credenciales.Rol);
    return rol === 2 || rol === 3 ? <Outlet /> : prohibido;
}

export const AdminSocioGuard = () => {
    const rol = useAppSelector((state) => state.credenciales.Rol);
    return (rol === 1 || rol === 0 || rol === 2 || rol === 3) ? <Outlet /> : prohibido;
}
