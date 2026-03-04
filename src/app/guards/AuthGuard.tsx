import { useAppSelector } from "@core/store/redux/hooks";
import LoadingComponent from "@shared/components/loading/LoadingComponent";
import { PUBLIC_ROUTES } from "@shared/constants/rutas/Rutas.model";
import { validateToken } from "@shared/utilities/token/token.utility";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

export const AuthGuard = () => {
    const usuario = useAppSelector((state) => state.user);
    const [verificado, setVerificado] = useState(false);

    useEffect(() => {
        const verificar = async () => {
            const esValido = await validateToken();
            setVerificado(esValido);
        };
        verificar();
    }, []);

    if (!usuario.id) return <Navigate replace to={PUBLIC_ROUTES.LOGIN} />;
    if (!verificado) return <LoadingComponent />;
    return <Outlet />;
};
