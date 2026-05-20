import DataTableComponent from '@shared/components/dataTable/DataTableComponent'
import Contenido from '@shared/components/helpers/Contenido'
import InfoData from '@shared/components/helpers/InfoData'
import TituloPage from '@shared/components/helpers/TituloPage'
import VentanaModalSencilla from '@shared/components/modals/VentanaModalSencilla'
import { ClipboardList, FileQuestion } from 'lucide-react'
import FormRespuestaEncuesta from '../components/FormRespuestaEncuesta'
import RespuestaEncuestaColumns from '../components/RespuestaEncuestaColumns'
import useRespuestaEncuesta from '../hooks/useRespuestaEncuesta'

export default function RespuestasEncuestaPage() {

    const { encuesta, isLoading, modals, respuestas, subtitulo, titulo, tituloModal, respuesta, cargar, cerrar } = useRespuestaEncuesta();

    const columns = RespuestaEncuestaColumns({ cargar });

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<FileQuestion className="w-7 h-7" />} color="red" />
            <Contenido>
                <InfoData titulo={encuesta.titulo} descripcion={encuesta?.descripcion}
                    icon={<ClipboardList className="h-7 w-7" />} color="red" />
                <DataTableComponent data={respuestas} loading={isLoading} columns={columns} />
                <VentanaModalSencilla size={'full'} titulo={tituloModal} show={modals} cerrarModal={cerrar}>
                    <FormRespuestaEncuesta data={respuesta} />
                </VentanaModalSencilla>
            </Contenido>
        </>
    )
}
