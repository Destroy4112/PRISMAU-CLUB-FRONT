import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import { Home } from "lucide-react";
import { useMemo } from "react";
import CardsDashboard from "../components/CardsDashboard";
import { ItemsCardsDashboard } from "../components/ItemsCardsDashboard";
import useDashboard from "../hook/useDashboard";

export default function DashboardPage() {

    const { titulo, subtitulo, rol, stats, isLoading } = useDashboard()

    const cards = useMemo(() => ItemsCardsDashboard(rol, stats), [rol, stats]);

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<Home className="w-7 h-7" />} color="green" />
            <Contenido>
                <CardsDashboard cards={cards} loading={isLoading} />
            </Contenido>
        </>
    )
}
