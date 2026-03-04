import type { Dashboard } from "@features/dashboard/domain/dashboard.model";
import { FileChartColumn, IdCardLanyard, List, MapPinHouse, ShieldUser, User, UserCog, WandSparkles } from "lucide-react";

export function ItemsCardsDashboard(rol: number, stats: Dashboard) {

    const SUPER_ADMIN_CARDS = [
        { texto: "Administradores", cantidad: stats.contAdmins, color: "purple-600", icono: <ShieldUser className="text-purple-600" /> },
        { texto: "Roles", color: "pink-600", cantidad: stats.contRoles, icono: <UserCog className="text-pink-600" /> },
        { texto: "Modulos", color: "red-600", cantidad: stats.contModulos, icono: <List className="text-red-600" /> },
        { texto: "Hobbies", color: "yellow-500", cantidad: stats.contHobbies, icono: <WandSparkles className="text-yellow-500" /> },
        { texto: "Contrataciones", cantidad: stats.contContrataciones, color: "green-600", icono: <FileChartColumn className="text-green-600" /> },
    ];

    const ADMIN_CARDS = [
        { texto: "Adherentes", cantidad: stats.contAdherentes, color: "purple-600", icono: <User className="text-purple-600" /> },
        { texto: "Empleados", cantidad: stats.contEmpleados, color: "pink-600", icono: <IdCardLanyard className="text-pink-500" /> },
        { texto: "Espacios", cantidad: stats.contEspacios, color: "red-500", icono: <MapPinHouse className="text-red-500" /> },
        { texto: "Familiares", cantidad: stats.contFamiliares, color: "yellow-500", icono: <User className="text-yellow-500" /> },
        { texto: "Asociados", cantidad: stats.contAsociados, color: "green-600", icono: <User className="text-green-600" /> },
    ];

    switch (rol) {
        case 0:
            return [...SUPER_ADMIN_CARDS, ...ADMIN_CARDS];
        case 1:
            return ADMIN_CARDS;
        // case 2:
        // case 3:
        //     return SOCIOS_CARDS();
        default:
            return [];
    }
}  
