export const traslateStatus = (status: number): string => {
    if (status === 0) return "INACTIVO";
    if (status === 1) return "ACTIVO";
    if (status === 2) return "RETIRADO";
    if (status === 3) return "EN MORA";
    if (status === 4) return "RETIRADO EN MORA";
    return "Desconocido";
}

export const traslateRol = (rol: number): string => {
    if (rol === 0) return "Super Admin";
    if (rol === 1) return "Admin";
    if (rol === 2) return "Asociado";
    if (rol === 3) return "Adherente";
    if (rol === 4) return "Empleado";
    if (rol === 5) return "Familiar";
    if (rol === 6) return "Portero";
    if (rol === 7) return "Administrativo";
    return "Desconocido";
}

export const getColorStatus = (status: number): string => {
    if (status === 0) return "bg-red-100 text-red-600 border-red-300";
    if (status === 1) return "bg-green-100 text-green-600 border-green-300";
    if (status === 2) return "bg-orange-100 text-orange-600 border-orange-300";
    if (status === 3) return "bg-purple-100 text-purple-600 border-purple-300";
    if (status === 4) return "bg-black text-white border-gray-300";
    return "bg-gray-100 text-gray-600 border-gray-300";
}


export const colorStyles: Record<string, string> = {
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    pink: "bg-pink-100 text-pink-500",
    red: "bg-red-100 text-red-600",
    yellow: "bg-yellow-100 text-yellow-600",
};

export const gradientes = [
    "from-violet-400 via-purple-500 to-blue-600",
    "from-pink-400 via-pink-500 to-rose-400",
    "from-red-500 via-rose-500 to-rose-600",
    "from-yellow-400 via-yellow-500 to-yellow-600",
    "from-green-500 via-teal-500 to-emerald-600",
]; 