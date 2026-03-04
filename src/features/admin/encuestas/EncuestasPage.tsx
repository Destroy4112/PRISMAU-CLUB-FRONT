import DataTableComponent from "@components/dataTable/DataTableComponent";
import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import MenuSencillo from "@shared/components/menu/MenuSencillo";
import VentanaModal from "@shared/components/modals/VentanaModal";
import { ClipboardList } from "lucide-react";
import EncuestaColumns from "./components/EncuestaColumns";
import FormEncuesta from "./components/FormEncuesta";
import useEncuesta from "./hooks/useEncuesta";

export default function EncuestasPage() {

    const { titulo, subtitulo, tituloModal, encuesta, encuestas, loading, isLoading, modals,
        handleChange, cargarEncuesta, handleDelete, handler, toggleModal } = useEncuesta();

    const columns = EncuestaColumns({ cargarEncuesta, handleDelete });

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<ClipboardList className="w-7 h-7" />} color="red" />
            <Contenido>
                <MenuSencillo toggleModal={toggleModal} noBuscar />
                <DataTableComponent data={encuestas} loading={isLoading} columns={columns} />
                <VentanaModal size={'5xl'} titulo={tituloModal} show={modals.crearEditar} cerrarModal={toggleModal}
                    hanleSubmit={handler} loading={loading}>
                    <FormEncuesta encuesta={encuesta} handleChange={handleChange} />
                </VentanaModal>
            </Contenido>
        </>
    )
}
