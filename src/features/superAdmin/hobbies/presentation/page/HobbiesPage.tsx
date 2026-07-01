import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import { WandSparkles } from "lucide-react";
import Hobbies from "../components/Hobbies";

function HobbiesPage() {

    const titulo = 'Hobbies';
    const subtitulo = 'Catálogo de hobbies y pasatiempos';

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<WandSparkles className="w-7 h-7" />} color="yellow" />
            <Contenido>
                <Hobbies />
            </Contenido>
        </>
    );
}

export default HobbiesPage;