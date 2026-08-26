import type { Rubro } from '@features/admin/pagos/rubros/domain/model/rubro.model';
import { useMemo, useState, type ChangeEvent } from 'react';
import { programacionFormToCreateInput } from '../mapper/programacion-form.mapper';
import { useProgramarMutation } from '../mutations/useProgramarMutation';
import { INITIAL_PROGRAMACION_FORM, type ProgramacionForm } from '../types/programacion';

const RUBROS_CON_CUOTAS: number[] = [2];

export default function useProgramacionForm(rubros: Rubro[]) {

   const [programacionForm, setProgramacionForm] = useState<ProgramacionForm>(INITIAL_PROGRAMACION_FORM);

   const { isPending, mutate: generarFacturasMutation } = useProgramarMutation({
      onOk: () => { setProgramacionForm(INITIAL_PROGRAMACION_FORM); }
   });

   const rubroSeleccionado = useMemo(() => {
      return rubros.find((rubro) => rubro.id === Number(programacionForm.rubroId));
   }, [rubros, programacionForm.rubroId]);

   const formularioCompleto = Boolean(programacionForm.anio && programacionForm.rubroId && (!programacionForm.isCuota || Number(programacionForm.cuotas) > 0));

   const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
      const { name, value } = target;
      setProgramacionForm((prev) => {
         if (name === 'rubroId') {
            const isCuota = RUBROS_CON_CUOTAS.includes(Number(value));
            return {
               ...prev,
               rubroId: value,
               isCuota,
               cuotas: isCuota ? prev.cuotas : ''
            };
         }
         return { ...prev, [name]: value };
      });
   }

   const handleSubmit = (): void => {
      if (!formularioCompleto || isPending) return;
      generarFacturasMutation(programacionFormToCreateInput(programacionForm));
   }

   return {
      programacionForm,
      rubroSeleccionado,
      formularioCompleto,
      isPending,
      handleChange,
      handleSubmit
   }
}