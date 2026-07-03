import useAdministracionActions from './useAdministracionActions';
import useAdministracionSocio from './useAdministracionSocio';

export default function useAdministracion() {

    const socios = useAdministracionSocio();
    const actions = useAdministracionActions();

    return {
        titulo: "Socios",
        subtitulo: "Administración de la información financiera de asociados y adherentes",
        ...socios,
        ...actions
    }
}
