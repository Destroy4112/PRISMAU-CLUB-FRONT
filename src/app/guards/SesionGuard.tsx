import { useAppSelector } from '@core/store/redux/hooks';
import { PRIVATE_ROUTES } from '@shared/constants/rutas/Rutas.model';
import { Navigate, Outlet } from 'react-router';

export const SesionGuard = () => {
    const usuario = useAppSelector((state) => state.user);
    return usuario.id ? <Navigate replace to={PRIVATE_ROUTES.DASHBOARD} /> : <Outlet />;
};