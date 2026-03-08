import { useAppSelector } from '@core/store/redux/hooks';
import { selectIsAuthenticated } from '@features/auth/login/presentation/store/auth.selectors';
import { PRIVATE_ROUTES } from '@shared/constants/rutas/Rutas.model';
import { Navigate, Outlet } from 'react-router';

export const SesionGuard = () => {
    const isAuthenticated = useAppSelector(selectIsAuthenticated);
    return isAuthenticated ? <Navigate replace to={PRIVATE_ROUTES.DASHBOARD} /> : <Outlet />;
};