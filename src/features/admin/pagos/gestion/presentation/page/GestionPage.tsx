import TituloPage from "@shared/components/helpers/TituloPage";
import { CircleDollarSign } from "lucide-react";
import DashboardPagos from "../components/DashboardPagos";
import MenuPagos from "../components/MenuPagos";
import useFinanza from "../hooks/useFinanza";

export default function GestionPage() {

    const { titulo, subtitulo, estadisticas, isError, isLoading, refetch } = useFinanza();

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} color="red" icono={<CircleDollarSign className="w-7 h-7" />} />
            <MenuPagos />
            <DashboardPagos estadisticas={estadisticas} isError={isError} isLoading={isLoading} refetch={refetch} />
        </>
    )
}
