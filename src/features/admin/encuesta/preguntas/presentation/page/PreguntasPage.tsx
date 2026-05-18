import DataTableComponent from '@shared/components/dataTable/DataTableComponent'
import Contenido from '@shared/components/helpers/Contenido'
import InfoData from '@shared/components/helpers/InfoData'
import TituloPage from '@shared/components/helpers/TituloPage'
import VentanaModal from '@shared/components/modals/VentanaModal'
import { ClipboardList, FileQuestion } from 'lucide-react'
import FormPreguntaRespuesta from '../components/FormPregunta'
import PreguntaColumns from '../components/PreguntaColumns'
import usePregunta from '../hooks/usePregunta'

export default function PreguntasPage() {

    const { titulo, subtitulo, tituloModal, modals, preguntaForm, encuesta, preguntas, isLoading, loading,
        openModal, closeModal, handleChange, cargarPregunta, submit, handleDelete } = usePregunta();

    const columns = PreguntaColumns({ cargar: cargarPregunta, handleDelete });

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<FileQuestion className="w-7 h-7" />} color="red"
                canCreate label="Nueva Pregunta" accion={openModal} />
            <Contenido>
                <InfoData titulo={encuesta.titulo} descripcion={encuesta?.descripcion}
                    icon={<ClipboardList className="h-7 w-7" />} color="red" />
                <DataTableComponent data={preguntas} loading={isLoading} columns={columns} />
                <VentanaModal size={'5xl'} titulo={tituloModal} show={modals} cerrarModal={closeModal}
                    handleSubmit={submit} loading={loading}>
                    <FormPreguntaRespuesta value={preguntaForm.pregunta} handleChange={handleChange} />
                </VentanaModal>
            </Contenido>
        </>
    )
}
