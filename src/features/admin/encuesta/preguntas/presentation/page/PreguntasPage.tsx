import DataTableComponent from '@shared/components/dataTable/DataTableComponent'
import Caja from '@shared/components/helpers/Caja'
import Contenido from '@shared/components/helpers/Contenido'
import TituloPage from '@shared/components/helpers/TituloPage'
import MenuSencillo from '@shared/components/menu/MenuSencillo'
import VentanaModal from '@shared/components/modals/VentanaModal'
import { FileQuestion } from 'lucide-react'
import FormPreguntaRespuesta from '../components/FormPregunta'
import PreguntaColumns from '../components/PreguntaColumns'
import usePregunta from '../hooks/usePregunta'

export default function PreguntasPage() {

    const { titulo, subtitulo, tituloModal, modals, preguntaForm, encuesta, preguntas, isLoading, loading,
        openModal, closeModal, handleChange, cargarPregunta, submit, handleDelete } = usePregunta();

    const columns = PreguntaColumns({ cargar: cargarPregunta, handleDelete });

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<FileQuestion className="w-7 h-7" />} color="red" />
            <Contenido>
                <MenuSencillo toggleModal={openModal} noBuscar={true} />
                <Caja>{encuesta.Titulo}</Caja>
                <DataTableComponent data={preguntas} loading={isLoading} columns={columns} />
                <VentanaModal size={'5xl'} titulo={tituloModal} show={modals} cerrarModal={closeModal}
                    hanleSubmit={submit} loading={loading}>
                    <FormPreguntaRespuesta value={preguntaForm.Pregunta} handleChange={handleChange} />
                </VentanaModal>
            </Contenido>
        </>
    )
}
