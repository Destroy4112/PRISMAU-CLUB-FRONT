import { PUBLIC_ROUTES } from '@app/routes/constants/rutas';
import { useAppLocation, useAppNavigate } from '@app/routes/hooks';
import { alertError, alertSucces, alertWarning } from '@shared/utilities/alerts/alertas.utility';
import { useState, type ChangeEvent } from 'react';
import { verificarFormToPayload } from '../mappers/verificar-form.mapper';
import useVerificarMutation from '../mutation/useVerificarMutation';
import { buildVerificarContext, INITIAL_VERIFICAR_FORM, type VerificarForm } from '../types/verificarCodigo';

export default function useVerificarCodigo() {

   const navigate = useAppNavigate();
   const documento = useAppLocation()?.state?.documento;

   const { isPending, mutate: verificarMutation } = useVerificarMutation();

   const [data, setData] = useState<VerificarForm>(INITIAL_VERIFICAR_FORM);

   //--------------------- INITIAL STATE -----------------------------------------

   const context = buildVerificarContext(documento);

   const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setData(prev => ({ ...prev, code: e.target.value }));
   }

   const handleSubmit = (): void => {
      const payload = verificarFormToPayload(data, context);
      verificarMutation(payload, {
         onSuccess: (res) => {
            if (res.status) {
               alertSucces(res.message);
               navigate(PUBLIC_ROUTES.CHANGE_PASSWORD, { state: { data: payload }, replace: true });
            } else {
               setData(INITIAL_VERIFICAR_FORM);
               res.errors?.forEach((error: string) => alertWarning(error));
            }
         }, onError: (error) => alertError(error.message)
      });
   }

   return {
      title: "Recuperación de cuenta",
      description: "Se ha enviado un código de verificación a tu correo, por favor ingresalo para recuperar tu cuenta",
      data,
      loading: isPending,
      handleChange,
      handleSubmit,
   }
}
