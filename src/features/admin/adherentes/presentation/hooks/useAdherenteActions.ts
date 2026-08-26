import { useAppNavigate } from "@app/routes/hooks";
import useResetPasswordMutation from "@features/users/presentation/mutations/useResetPasswordMutation";
import { PRIVATE_ROUTES } from "@app/routes/constants/rutas";
import type { ModalsApi } from "@shared/hooks/useModal";
import { alertConfirm, alertError, alertSucces, alertWarning } from "@shared/utilities/alerts/alertas.utility";
import { useCallback, useState, type ChangeEvent } from "react";
import type { Adherente } from "../../domain/model/adherente.model";
import { adherenteEstadoFormToInput } from "../mapper/adherente-form.mapper";
import { useDeleteAdherenteMutation } from "../mutations/useDeleteAdherenteMutation";
import { useUpdateStatusAdherenteMutation } from "../mutations/useUpdateStatusAdherenteMutation";
import { ADHERENTE_ESTADO_INITIAL, type AdherenteEstadoForm, type AdherenteModalKey } from "../types/adherente";
import { useChangeAdherenteMutation } from "../mutations/useChangeAdherenteMutation";

export function useAdherenteActions(modalApi: ModalsApi<AdherenteModalKey>) {

   const navigate = useAppNavigate();

   const { toggleModal } = modalApi;

   const [adherenteEstadoForm, setAdherenteEstadoForm] = useState<AdherenteEstadoForm>(ADHERENTE_ESTADO_INITIAL);

   const resetForm = () => {
      setAdherenteEstadoForm(ADHERENTE_ESTADO_INITIAL);
   }

   //-------------------- GO FAMILIARES -------------------------------------

   const goFamiliares = (adherente: Adherente) => {
      navigate(PRIVATE_ROUTES.FAMILIARES_ADHERENTE, { state: { adherente } });
   }

   // -------------------- CAMBIAR ESTADO -------------------------------------

   const { mutate: cambiarEstadoMutation, isPending: isUpdatingStatus } = useUpdateStatusAdherenteMutation({
      onOk: () => closeModalEstado(),
   });

   const closeModalEstado = (): void => {
      toggleModal("estado");
      resetForm();
   };

   const handleChangeEstado = ({ target }: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
      setAdherenteEstadoForm((prev) => ({ ...prev, [target.name]: target.value }));
   };

   const changeState = async (id: number): Promise<void> => {
      if (await alertConfirm("¿Seguro que quiere cambiar el estado de este adherente?", "Si, cambiar!")) {
         toggleModal("estado");
         setAdherenteEstadoForm((prev) => ({ ...prev, id }));
      }
   };

   const handleUpdateEstado = (): void => {
      cambiarEstadoMutation(adherenteEstadoFormToInput(adherenteEstadoForm));
   };

   //-------------------- CAMBIAR A ASOCIADO -------------------------------------

   const { mutate: cambiarAsociadoMutation } = useChangeAdherenteMutation();

   const handleUpdateAsociado = useCallback(async (id: number): Promise<void> => {
      if (await alertConfirm("¿Seguro que quiere cambiar el estado de este adherente a Asociado?", "Si, cambiar!")) {
         cambiarAsociadoMutation(id);
      }
   }, [cambiarEstadoMutation]);

   //-------------------- ELIMINAR ADHERENTE -------------------------------------

   const { mutate: eliminarMutation } = useDeleteAdherenteMutation();

   const handleDelete = useCallback(async (id: number): Promise<void> => {
      if (await alertConfirm("¿Seguro que quiere eliminar este adherente?", "Si, eliminar!")) {
         eliminarMutation(id);
      }
   }, [eliminarMutation]);

   //-------------------- RESETEAR CONTRASEÑA -------------------------------------

   const { mutate: resetPasswordMutation } = useResetPasswordMutation();

   const handleResetPassword = useCallback(async (id: number): Promise<void> => {
      if (await alertConfirm("¿Seguro que quiere restablecer la contraseña de este adherente?", "Si, restablecer!")) {
         resetPasswordMutation(id, {
            onSuccess: (res) => {
               if (res.status) {
                  alertSucces(res.message);
               } else {
                  res.errors?.forEach((error: string) => alertWarning(error));
               }
            },
            onError: (error) => alertError(error.message)
         });
      }
   }, [resetPasswordMutation]);

   return {
      tituloModalEstado: "Cambiar estado",
      adherenteEstadoForm,
      isUpdatingStatus,
      closeModalEstado,
      goFamiliares,
      handleChangeEstado,
      changeState,
      handleDelete,
      handleUpdateEstado,
      handleResetPassword,
      handleUpdateAsociado
   };
}