import TituloPage from "@shared/components/helpers/TituloPage";
import { CircleDollarSign } from "lucide-react";
import MenuPagos from "./components/MenuPagos";

export default function GestionPage() {

    const titulo = "Gestión de Pagos";
    const subtitulo = "Administra y supervisa todos los aspectos relacionados con los pagos dentro de la plataforma.";

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} color="red" icono={<CircleDollarSign className="w-7 h-7" />} />
            <MenuPagos />
        </>
    )
}
