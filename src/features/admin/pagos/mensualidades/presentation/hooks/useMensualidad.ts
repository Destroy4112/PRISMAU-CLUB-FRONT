import { useAppLocation } from '@app/routes/hooks';
import type { Socio } from '@features/admin/pagos/administracion/domain/models/socio.model';
import useModals from '@shared/hooks/useModal';
import type { MensualidadModalKey } from '../types/mensualidad';
import useMensualidadForm from './useMensualidadForm';
import useMensualidadList from './useMensualidadList';

export default function useAdministracion() {

    const socio: Socio = useAppLocation().state?.socio;

    const modalApi = useModals<MensualidadModalKey>();

    const list = useMensualidadList(socio.documento);
    const form = useMensualidadForm(modalApi);

    return {
        titulo: "Mensualidades",
        subtitulo: "Consulta el estado e historial de las mensualidades del socio",
        campos: "año...",
        modals: modalApi.modals,
        socio,
        ...list,
        ...form
    }
}
