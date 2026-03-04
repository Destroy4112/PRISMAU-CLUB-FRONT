import { useAppSelector } from "@core/store/redux/hooks";
import useQueryDashboard from "../queries/useQueryDashboard";
;

export default function useDashboard() {

    const rol = Number(useAppSelector((state) => state.credenciales.Rol));
    
    const { data, isLoading } = useQueryDashboard();

    const stats = {
        contContrataciones: data?.contContrataciones ?? 0,
        contAdmins: data?.contAdmins ?? 0,
        contRoles: data?.contRoles ?? 0,
        contModulos: data?.contModulos ?? 0,
        contHobbies: data?.contHobbies ?? 0,
        contSolicitudes: data?.contSolicitudes ?? 0,
        contReservas: data?.contReservas ?? 0,
        contEncuestas: data?.contEncuestas ?? 0,
        contFamiliares: data?.contFamiliares ?? 0,
        contAsociados: data?.contAsociados ?? 0,
        contAdherentes: data?.contAdherentes ?? 0,
        contEmpleados: data?.contEmpleados ?? 0,
        contEspacios: data?.contEspacios ?? 0,
        contNoticias: data?.contNoticias ?? 0,
        contInvitados: data?.contInvitados ?? 0,
        contFamiliaresSocio: data?.contFamiliaresSocio ?? 0,
        contInvitadosSocio: data?.contInvitadosSocio ?? 0,
    };

    return {
        titulo: "Dashboard",
        subtitulo: "Indicadores Generales del Sistema",
        rol,
        stats,
        isLoading
    };
}
