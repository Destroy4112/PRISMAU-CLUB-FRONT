import { useAppSelector } from "@core/store/redux/hooks";
import { selectIsAuthenticated } from "@features/auth/shared/presentation/store/session/session.selectors";
import LoadingComponent from "@shared/components/loading/LoadingComponent";
import { PUBLIC_ROUTES } from "@app/routes/constants/rutas";
import { validateToken } from "@shared/utilities/token/token.utility";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

export const AuthGuard = () => {
   const isAuthenticated = useAppSelector(selectIsAuthenticated);
   const [verificado, setVerificado] = useState(false);

   useEffect(() => {
      const verificar = async () => {
         const esValido = await validateToken();
         setVerificado(esValido);
      };
      verificar();
   }, []);

   if (!isAuthenticated) return <Navigate replace to={PUBLIC_ROUTES.LOGIN} />;
   if (!verificado) return <LoadingComponent />;
   return <Outlet />;
};
