import { useAppSelector } from "@core/store/redux/hooks";
import { selectRol } from "@features/auth/shared/presentation/store/session/session.selectors";
import { ERROR_ROUTES } from "@app/routes/constants/rutas";
import { Navigate, Outlet } from "react-router";
;

const prohibido = <Navigate replace to={ERROR_ROUTES.PAGE_403} />;

export const SuperadminGuard = () => {
   const rol = useAppSelector(selectRol);
   return rol === 0 ? <Outlet /> : prohibido;
}

export const AdminGuard = () => {
   const rol = useAppSelector(selectRol);
   return (rol === 1 || rol === 0) ? <Outlet /> : prohibido;
}

export const SocioGuard = () => {
   const rol = useAppSelector(selectRol);
   return rol === 2 || rol === 3 ? <Outlet /> : prohibido;
}

export const AdminSocioGuard = () => {
   const rol = useAppSelector(selectRol);
   return (rol === 1 || rol === 0 || rol === 2 || rol === 3) ? <Outlet /> : prohibido;
}
