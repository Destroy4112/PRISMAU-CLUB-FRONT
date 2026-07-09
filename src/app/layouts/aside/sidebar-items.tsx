import { PRIVATE_ROUTES } from "@shared/constants/rutas/Rutas.model";
import { CalendarClock, CalendarDays, CircleDollarSign, ClipboardList, Contact, FileChartColumn, History, IdCardLanyard, Inbox, List, MapPinHouse, ScanQrCode, ShieldUser, User, UserCog, UserSearch, WandSparkles } from "lucide-react";

const SUPER_ADMIN_ITEMS = [
    { isTitle: true, texto: "Configuraciónes" },
    { icono: <ShieldUser className="text-purple-600" />, texto: "Administradores", link: PRIVATE_ROUTES.ADMINISTRADORES },
    { icono: <UserCog className="text-pink-600" />, texto: "Roles y Permisos", link: PRIVATE_ROUTES.ROLES },
    { icono: <List className="text-red-600" />, texto: "Modulos", link: PRIVATE_ROUTES.MODULOS },
    { icono: <WandSparkles className="text-yellow-500" />, texto: "Hobbies", link: PRIVATE_ROUTES.HOBBIES },
    { icono: <FileChartColumn className="text-green-600" />, texto: "Contrataciones", link: PRIVATE_ROUTES.CONTRATOS },
];

const ADMIN_ITEMS = [
    { isTitle: true, texto: "Gestión de Solicitudes" },
    { icono: <Inbox className="text-purple-600" />, texto: "Solicitudes", link: PRIVATE_ROUTES.SOLICITUDES },
    { icono: <CalendarClock className="text-pink-600" />, texto: "Reservas", link: PRIVATE_ROUTES.RESERVAS },
    { icono: <ClipboardList className="text-red-600" />, texto: "Encuestas", link: PRIVATE_ROUTES.ENCUESTAS, activeSubroutes: [PRIVATE_ROUTES.PREGUNTAS, PRIVATE_ROUTES.RESPUESTAS, PRIVATE_ROUTES.ENCUESTA] },
    { isTitle: true, texto: "Gestión de Usuarios" },
    { icono: <UserSearch className="text-yellow-500" />, texto: "Buscar Usuario", link: PRIVATE_ROUTES.BUSCAR_USER },
    { icono: <User className="text-green-600" />, texto: "Asociados", link: PRIVATE_ROUTES.ASOCIADOS, activeSubroutes: [PRIVATE_ROUTES.FAMILIARES_ASOCIADO] },
    { icono: <User className="text-purple-600" />, texto: "Adherentes", link: PRIVATE_ROUTES.ADHERENTES, activeSubroutes: [PRIVATE_ROUTES.FAMILIARES_ADHERENTE] },
    { icono: <IdCardLanyard className="text-pink-600" />, texto: "Empleados", link: PRIVATE_ROUTES.EMPLEADOS },
    { isTitle: true, texto: "Espacios y Comunicaciones" },
    { icono: <MapPinHouse className="text-red-600" />, texto: "Espacios", link: PRIVATE_ROUTES.ESPACIOS, activeSubroutes: [PRIVATE_ROUTES.DISPONIBILIDAD_ESPACIO] },
    { icono: <CalendarDays className="text-yellow-500" />, texto: "Eventos", link: PRIVATE_ROUTES.EVENTOS },
    { isTitle: true, texto: "Seguridad y Finanzas" },
    { icono: <Contact className="text-green-600" />, texto: "Invitaciones", link: PRIVATE_ROUTES.INVITACIONES },
    { icono: <ScanQrCode className="text-purple-600" />, texto: "Control de Accesos", link: PRIVATE_ROUTES.ACCESOS },
    { icono: <History className="text-pink-600" />, texto: "Gestión de Estados", link: PRIVATE_ROUTES.ESTADOS },
    { icono: <CircleDollarSign className="text-red-600" />, texto: "Gestión de Pagos", link: PRIVATE_ROUTES.GESTION_PAGOS, activeSubroutes: [PRIVATE_ROUTES.RUBROS, PRIVATE_ROUTES.PROGRAMACION_PAGOS, PRIVATE_ROUTES.ADMINISTRACION_PAGOS, PRIVATE_ROUTES.MENSUALIDADES, PRIVATE_ROUTES.CUOTAS_BAILE] },
];

export function getMenuItemsByproyecto(rol: number) {

    switch (rol) {
        case 0:
            return [...SUPER_ADMIN_ITEMS, ...ADMIN_ITEMS];
        case 1:
            return ADMIN_ITEMS;
        default:
            return null;
    }
}