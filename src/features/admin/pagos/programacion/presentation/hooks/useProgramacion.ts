import useProgramacionForm from './useProgramacionForm';
import { useRubroProgramacion } from './useRubroProgramacion';

export default function useProgramacion() {

    const rubros = useRubroProgramacion();
    const form = useProgramacionForm(rubros.rubros);

    return {
        titulo: "Programación de Pagos",
        subtitulo: "Administra y planifica pagos recurrentes",
        ...form,
        ...rubros
    }
}
