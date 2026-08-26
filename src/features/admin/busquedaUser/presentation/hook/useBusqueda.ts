import { alertError, alertWarning } from "@shared/utilities/alerts/alertas.utility";
import { useState, type ChangeEvent } from "react";
import type { DataResultSearch } from "../../domain/model/busqueda-user.model";
import { useSearchUserMutation } from "../mutations/useSearchUserMutation";

export default function useBusqueda() {

   const [busqueda, setBusqueda] = useState<string>("");
   const [resultado, setResultado] = useState<DataResultSearch | null>(null);
   const [activo, setActivo] = useState<boolean>(false);

   const recargar = (): void => {
      setBusqueda("");
      setActivo(false);
   };

   const { mutate: searchMutation, isPending: loading } = useSearchUserMutation();

   const handleChangeBusqueda = ({ target }: ChangeEvent<HTMLInputElement>): void => {
      setBusqueda(target.value);
   };

   const handleSubmit = () => {
      if (!busqueda) return alertWarning("Ingrese un documento");
      setActivo(true);
      searchMutation(busqueda, {
         onSuccess: (res) => {
            if (res.status) {
               setResultado(res.data);
            } else {
               alertWarning(res.message);
               recargar();
            }
         },
         onError: (error) => { alertError("Error al buscar el usuario" + error.message) }
      });
   };

   return {
      titulo: "Busqueda de Usuarios",
      subtirulo: "Busca usuarios por número de documento",
      busqueda,
      loading,
      data: resultado,
      activo,
      handleChangeBusqueda,
      handleSubmit,
      recargar
   };
}