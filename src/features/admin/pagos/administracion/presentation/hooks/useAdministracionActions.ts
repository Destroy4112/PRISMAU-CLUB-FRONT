import { PRIVATE_ROUTES } from "@app/routes/constants/rutas";
import { useAppNavigate } from "@app/routes/hooks";
import { useState } from "react";
import type { Socio } from "../../domain/models/socio.model";
import { socioEditValueFormToUpdateInput } from "../mapper/administracion-form.mapper";
import { useUpdateSocioValueMutation } from "../mutations/useUpdateSocioValueMutation";
import type { EditableSocioField, EditValorForm } from "../types/administracion";

export default function useAdministracionActions() {
   const navigate = useAppNavigate();

   const [edit, setEdit] = useState<EditValorForm | null>(null);

   const startEdit = (data: EditValorForm): void => {
      setEdit(data);
   };

   const cancelEdit = (): void => {
      setEdit(null);
   };

   const changeEditValue = (value: string): void => {
      setEdit(prev => {
         if (!prev) return null;
         return { ...prev, value, };
      });
   };

   const { mutate: updateSocioMutation, isPending: loading } = useUpdateSocioValueMutation({
      onOk: () => { setEdit(null); }
   });

   const saveEdit = (): void => {
      if (!edit) return;
      updateSocioMutation(socioEditValueFormToUpdateInput(edit));
   };

   const go = (field: EditableSocioField, socio: Socio) => {
      if (field === "mensualidad") {
         navigate(PRIVATE_ROUTES.MENSUALIDADES, { state: { socio }, replace: true });
      } else {
         navigate(PRIVATE_ROUTES.CUOTAS_BAILE, { state: { socio }, replace: true });
      }
   };

   return {
      edit,
      loading,
      startEdit,
      cancelEdit,
      changeEditValue,
      saveEdit,
      go
   };
}