import DataTableComponent from '@components/dataTable/DataTableComponent'
import Caja from '@components/helpers/Caja'
import Contenido from '@components/helpers/Contenido'
import TituloPage from '@components/helpers/TituloPage'
import MenuSencillo from '@components/menu/MenuSencillo'
import VentanaModal from '@components/modals/VentanaModal'
import { useAppLocation } from '@hooks/useStore'
import FormPreguntaRespuesta from './components/FormPreguntaRespuesta'
import PreguntaRespuestaColumns from './components/PreguntaRespuestaColumns'
import usePregunta from './hooks/usePregunta'
import { FileQuestion } from 'lucide-react'

export default function PreguntasPage() {

    const location = useAppLocation();
    const { encuesta } = location.state || {};

    const { titulo, subtitulo, tituloModal, modals, pregunta, preguntas, isLoading, loading,
        toggleModal, handleChange, cargarPregunta, handler, handleDelete } = usePregunta(encuesta.id);

    const columns = PreguntaRespuestaColumns({ name: 'Pregunta', cargar: cargarPregunta, handleDelete });

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<FileQuestion className="w-7 h-7" />} color="red" />
            <Contenido>
                <MenuSencillo toggleModal={toggleModal} noBuscar={true}  />
                <Caja>{encuesta.Titulo}</Caja>
                <DataTableComponent data={preguntas} loading={isLoading} columns={columns} />
                <VentanaModal size={'5xl'} titulo={tituloModal} show={modals.crear} cerrarModal={toggleModal}
                    hanleSubmit={handler} loading={loading}>
                    <FormPreguntaRespuesta value={pregunta.Pregunta} handleChange={handleChange} name={'Pregunta'} />
                </VentanaModal>
            </Contenido>
        </>
    )
}
