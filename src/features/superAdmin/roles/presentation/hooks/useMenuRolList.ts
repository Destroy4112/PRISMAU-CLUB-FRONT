import { useCallback, useState } from "react";
import { useMenuRolQuery } from "../queries/useMenuRolQuery";

export function useMenuRolList() {

   const [rol, setRol] = useState<number>(0);

   const cargarRol = useCallback((rolId: number): void => {
      setRol(rolId);
   }, []);

   const { data: menusRol, isLoading } = useMenuRolQuery(rol);

   return {
      rol,
      menusRol,
      isLoading,
      cargarRol
   };
}