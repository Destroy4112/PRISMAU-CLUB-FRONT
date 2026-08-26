import { PUBLIC_ROUTES } from "@app/routes/constants/rutas";
import { useAppNavigate } from "@app/routes/hooks";
import { useAppDispatch } from "@core/store/redux/hooks";
import { clearSession } from "@features/auth/shared/presentation/store/session/session.slice";
import { alertConfirm } from "@shared/utilities/alerts/alertas.utility";
import { useCallback } from "react";

export default function useLogout() {

   const navigate = useAppNavigate();
   const dispatch = useAppDispatch();

   const logout = useCallback(async (): Promise<void> => {
      const ok = await alertConfirm("¿Quiere cerrar la sesión actual?", "Si, salir!");
      if (!ok) return;
      dispatch(clearSession());
      navigate(PUBLIC_ROUTES.LOGIN, { replace: true });
   }, [dispatch, navigate]);

   return { logout };
}