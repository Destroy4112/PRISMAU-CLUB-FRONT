import { useAppSelector } from '@core/store/redux/hooks';
import { selectIsAuthenticated } from '@features/auth/shared/presentation/store/session/session.selectors';
import { PRIVATE_ROUTES } from '@app/routes/constants/rutas';
import { Navigate, Outlet } from 'react-router';

export const SesionGuard = () => {
   const isAuthenticated = useAppSelector(selectIsAuthenticated);
   return isAuthenticated ? <Navigate replace to={PRIVATE_ROUTES.DASHBOARD} /> : <Outlet />;
};