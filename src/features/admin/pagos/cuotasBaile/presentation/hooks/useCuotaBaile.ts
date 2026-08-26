import { useAppLocation } from '@app/routes/hooks';
import type { Socio } from '@features/admin/pagos/administracion/domain/models/socio.model';
import useModals from '@shared/hooks/useModal';
import type { CuotaBaileModalKey } from '../types/cuotaBaile';
import useCuotaBaileForm from './useCuotaBaileForm';
import useCuotaBaileList from './useCuotaBaileList';

export default function useCuotaBaile() {

   const socio: Socio = useAppLocation().state?.socio;

   const modalApi = useModals<CuotaBaileModalKey>();

   const list = useCuotaBaileList(socio.documento);
   const form = useCuotaBaileForm(modalApi);

   return {
      titulo: "Cuotas de baile",
      subtitulo: "Consulta el estado e historial de las cuotas de baile del socio",
      campos: "año...",
      modals: modalApi.modals,
      socio,
      ...list,
      ...form
   }
}
