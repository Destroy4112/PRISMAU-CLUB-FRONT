import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import { UserSearch } from "lucide-react";
import BuscadorUsuario from "./component/BuscadorUsuario";
import ResultadoBusqueda from "./component/ResultadoBusqueda";
import useBusqueda from "./hook/useBusqueda";

export default function BusquedaUserPage() {

    const { titulo, subtirulo, loading, busqueda, activo, data, handleSubmit, handleChangeBusqueda, recargar } = useBusqueda();

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtirulo} icono={<UserSearch className="w-7 h-7" />} color="yellow" />
            <Contenido>
                <BuscadorUsuario busqueda={busqueda} handleChange={handleChangeBusqueda} handleSubmit={handleSubmit} />
                <ResultadoBusqueda data={data} loading={loading} activo={activo} recargar={recargar} />
            </Contenido>
        </>
    );
}