import DataTableComponent from '@shared/components/dataTable/DataTableComponent'
import Contenido from '@shared/components/helpers/Contenido'
import InfoData from '@shared/components/helpers/InfoData'
import TituloPage from '@shared/components/helpers/TituloPage'
import VentanaModal from '@shared/components/modals/VentanaModal'
import { ClipboardList, FileQuestion } from 'lucide-react'
import FormOptionRespuesta from '../components/FormOption'
import OptionColumns from '../components/OptionColumns'
import useOption from '../hooks/useOption'

export default function OptionsPage() {

    const { titulo, subtitulo, tituloModal, modals, optionForm, pregunta, options, isLoading, loading,
        openModal, closeModal, handleChange, cargarOption, submit, handleDelete } = useOption();

    const columns = OptionColumns({ cargar: cargarOption, handleDelete });

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<FileQuestion className="w-7 h-7" />} color="red"
                canCreate label="Nueva Option" accion={openModal} />
            <Contenido>
                <InfoData titulo={pregunta.pregunta} icon={<ClipboardList className="h-7 w-7" />} color="red" />
                <DataTableComponent data={options} loading={isLoading} columns={columns} />
                <VentanaModal size={'5xl'} titulo={tituloModal} show={modals} cerrarModal={closeModal}
                    handleSubmit={submit} loading={loading}>
                    <FormOptionRespuesta value={optionForm.respuesta} handleChange={handleChange} />
                </VentanaModal>
            </Contenido>
        </>
    )
}
