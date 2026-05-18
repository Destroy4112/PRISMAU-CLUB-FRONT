import DataTableComponent from "@shared/components/dataTable/DataTableComponent";
import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import VentanaModal from "@shared/components/modals/VentanaModal";
import { ClipboardList } from "lucide-react";
import EncuestaColumns from "../components/EncuestaColumns";
import FormEncuesta from "../components/FormEncuesta";
import useEncuesta from "../hooks/useEncuesta";

export default function EncuestasPage() {

    const { titulo, subtitulo, tituloModal, encuestaForm, encuestas, loading, isLoading, modal,
        handleChange, cargarEncuesta, handleDelete, submit, openCreate, closeModal } = useEncuesta();

    const columns = EncuestaColumns({ cargarEncuesta, handleDelete });

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<ClipboardList className="w-7 h-7" />} color="red"
                canCreate label="Nueva Encuesta" accion={openCreate} />
            <Contenido>
                <DataTableComponent data={encuestas} loading={isLoading} columns={columns} />
                <VentanaModal size={'5xl'} titulo={tituloModal} show={modal} cerrarModal={closeModal}
                    hanleSubmit={submit} loading={loading}>
                    <FormEncuesta form={encuestaForm} handleChange={handleChange} />
                </VentanaModal>
            </Contenido>
        </>
    )
}
