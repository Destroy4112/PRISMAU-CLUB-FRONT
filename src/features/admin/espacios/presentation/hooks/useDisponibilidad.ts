import { alertWarning } from "@shared/utilities/alerts/alertas.utility";
import { useEffect, useState } from "react";
import type { Disponibilidad } from "../../domain/model/disponibilidad.model";
import type { Espacio } from "../../domain/model/espacio.model";
import { disponibilidadDomainToForm } from "../mapper/disponibilidad-form.mapper";
import { useSaveDisponibilidadMutation } from "../mutations/useSaveDisponibilidadMutation";
import { useDisponibilidadQuery } from "../queries/useDisponibilidadQuery";
import type { DisponibilidadForm } from "../types/disponibilidad";

export function useDisponibilidad() {

    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [espacioSeleccionado, setEspacioSeleccionado] = useState<Espacio | null>(null);
    const [disponibilidadSemanal, setDisponibilidadSemanal] = useState<DisponibilidadForm[]>([]);
    const espacioId = espacioSeleccionado?.id;

    const { data: disponibilidades = [], isLoading } = useDisponibilidadQuery(espacioId);

    useEffect(() => {
        if (!openDrawer) return;
        setDisponibilidadSemanal(disponibilidadDomainToForm(disponibilidades));
    }, [disponibilidades, openDrawer]);

    const abrirDisponibilidad = (espacio: Espacio) => {
        setEspacioSeleccionado(espacio);
        setOpenDrawer(true);
    };

    const cerrarDisponibilidad = () => {
        setOpenDrawer(false);
        setEspacioSeleccionado(null);
        setDisponibilidadSemanal([]);
    };

    const cambiarEstadoDia = (dia: Disponibilidad["dia"], activo: boolean,) => {
        setDisponibilidadSemanal((current) => current.map((item) => item.dia === dia ? { ...item, activo } : item));
    };

    const cambiarHora = (dia: Disponibilidad["dia"], campo: "inicio" | "fin", valor: string,) => {
        setDisponibilidadSemanal((current) => current.map((item) => item.dia === dia ? { ...item, [campo]: valor } : item));
    };

    const { mutate: saveMutation, isPending: isLoadingSave } = useSaveDisponibilidadMutation({
        onOk: () => cerrarDisponibilidad(),
    });

    const validarDisponibilidad = (): boolean => {
        const diasActivos = disponibilidadSemanal.filter((item) => item.activo,);

        for (const item of diasActivos) {
            if (!item.inicio || !item.fin) {
                alertWarning(`Debe completar el horario de ${item.dia}.`,);
                return false;
            }

            if (item.inicio >= item.fin) {
                alertWarning(`En ${item.dia}, la hora final debe ser mayor a la inicial.`,);
                return false;
            }
        }
        return true;
    };

    const save = (): void => {
        if (!espacioSeleccionado) return;

        if (!validarDisponibilidad()) return;

        const payload = {
            espacioId: espacioSeleccionado.id,
            disponibilidades: disponibilidadSemanal
                .filter((item) => item.activo)
                .map((item) => ({
                    id: item.id,
                    dia: item.dia,
                    inicio: item.inicio,
                    fin: item.fin,
                })),
        };
        saveMutation(payload);
    }

    return {
        openDrawer,
        isLoading,
        espacioSeleccionado,
        disponibilidadSemanal,
        isLoadingSave,
        abrirDisponibilidad,
        cerrarDisponibilidad,
        cambiarEstadoDia,
        cambiarHora,
        save
    };
}