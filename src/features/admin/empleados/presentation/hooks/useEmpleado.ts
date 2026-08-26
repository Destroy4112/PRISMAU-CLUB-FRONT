import useModals from "@shared/hooks/useModal";
import type { EmpleadoModalKey } from "../types/empleado";
import { useEmpleadoActions } from "./useEmpleadoActions";
import { useEmpleadoForm } from "./useEmpleadoForm";
import useEmpleadoImagen from "./useEmpleadoImagen";
import { useEmpleadoList } from "./useEmpleadoList";

function useEmpleado() {

   const modalApi = useModals<EmpleadoModalKey>();

   const list = useEmpleadoList();
   const form = useEmpleadoForm(modalApi);
   const action = useEmpleadoActions();
   const imagen = useEmpleadoImagen(modalApi);

   return {
      titulo: "Empleados",
      subtitulo: "Gestión de empleados del club",
      campos: "nombre, apellido, documento, cargo...",
      modals: modalApi.modals,
      ...list,
      ...form,
      ...action,
      ...imagen,
   };
}

export default useEmpleado;
