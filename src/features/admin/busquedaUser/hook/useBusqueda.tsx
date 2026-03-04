import { useState, type ChangeEvent } from "react";
import apiQueryBusqueda from "../api/apiQueryBusqueda";

export default function useBusqueda() {

    const [busqueda, setBusqueda] = useState<string>("");
    const [documento, setDocumento] = useState<string | null>(null)
    const { getUserQuery } = apiQueryBusqueda();

    /*=========== Recargar ===================================*/

    const recargar = (): void => {
        setBusqueda("");
        setDocumento(null);
    };

    /*=========== Buscador usuario ===========================*/

    const { data, isFetching, isFetched } = getUserQuery(documento || "");

    const handleChangeBusqueda = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        setBusqueda(target.value);
    };

    const handleSubmit = () => {
        if (busqueda.trim() !== "") {
            setDocumento(busqueda);
        }
    };

    return {
        titulo: "Busqueda de Usuarios",
        subtirulo: "Busca usuarios por número de documento",
        busqueda,
        loading: isFetching,
        data,
        activo: isFetched,
        handleChangeBusqueda,
        handleSubmit,
        recargar
    };
}