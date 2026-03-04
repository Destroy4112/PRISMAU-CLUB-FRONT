import { format, parse } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { es } from "date-fns/locale";

const zonaHoraria = 'America/Bogota';

export const normalizeText = (text: string): string => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
}

export const formatearFecha = (valor: string): string => {
    if (!valor) return "-";
    const fecha = new Date(valor);
    if (isNaN(fecha.getTime())) return "-";
    const zonedDate = toZonedTime(fecha, zonaHoraria);
    return format(zonedDate, 'dd/MM/yyyy', { locale: es });
};

export const formatearFechaString = (valor: string): string => {
    const fecha = new Date(valor);
    if (isNaN(fecha.getTime())) return "-";
    const zonedDate = toZonedTime(fecha, zonaHoraria);
    return format(zonedDate, 'dd MMMM yyyy', { locale: es });
}

export const formatearFechaHora = (valor: string): string => {
    const fecha = new Date(valor);
    if (isNaN(fecha.getTime())) return "-";
    const zonedDate = toZonedTime(fecha, zonaHoraria);
    return format(zonedDate, 'dd MMMM yyyy hh:mm a', { locale: es });
}

export const formatearHora = (valor: string): string => {
    const parsedDate = parse(valor, 'HH:mm:ss', new Date());
    return format(parsedDate, 'hh:mm a');
}

export const formatearMoneda = (valor: number) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
    }).format(valor);
};