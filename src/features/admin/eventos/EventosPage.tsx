import DataTableComponent from "@components/dataTable/DataTableComponent";
import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import MenuSencillo from "@shared/components/menu/MenuSencillo";
import VentanaModal from "@shared/components/modals/VentanaModal";
import { CalendarDays } from "lucide-react";
import EventosColumns from "./components/EventosColumns";
import useEvento from "./hook/useEvento";
import FormEvento from "./components/FormEvento";

export default function EventosPage() {

    const { titulo, subtitulo, tituloModal, loading, modals, busqueda, evento, isLoading, lista, touched,
        handleChange, handleChangeCheck, handleChangeBusqueda, toggleModal, handler, cargar, handleDelete } = useEvento();

    const columns = EventosColumns({ cargar, handleDelete });

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<CalendarDays className="w-7 h-7" />} color="yellow" />
            <Contenido>
                <MenuSencillo toggleModal={toggleModal} busqueda={busqueda} handleBusqueda={handleChangeBusqueda} />
                <DataTableComponent columns={columns} data={lista} loading={isLoading} />
                <VentanaModal size={'full'} titulo={tituloModal} show={modals.crearEditar} cerrarModal={toggleModal}
                    hanleSubmit={handler} loading={loading}>
                    <FormEvento evento={evento} touched={touched} handleChange={handleChange}
                        handleChangeCheck={handleChangeCheck} />
                </VentanaModal>
            </Contenido>
        </>
    )
}
