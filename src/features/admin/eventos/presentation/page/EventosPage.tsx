import DataTableComponent from "@shared/components/dataTable/DataTableComponent";
import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import VentanaModal from "@shared/components/modals/VentanaModal";
import { CalendarDays } from "lucide-react";
import EventosColumns from "../components/EventosColumns";
import FormEvento from "../components/FormEvento";
import useEvento from "../hook/useEvento";

export default function EventosPage() {

   const { titulo, subtitulo, tituloModal, loading, modals, isLoading, touched, eventoForm, eventos,
      closeModal, openModal, handleChange, handleChangeCheck, cargar, handleDelete, submit } = useEvento();

   const columns = EventosColumns({ cargar, handleDelete });

   return (
      <>
         <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<CalendarDays className="w-7 h-7" />} color="yellow"
            accion={openModal} canCreate label="Nuevo Evento" />
         <Contenido>
            <DataTableComponent columns={columns} data={eventos} loading={isLoading} />
            <VentanaModal size={'full'} titulo={tituloModal} show={modals.crearEditar} cerrarModal={closeModal}
               handleSubmit={submit} loading={loading}>
               <FormEvento form={eventoForm} touched={touched} handleChange={handleChange}
                  handleChangeCheck={handleChangeCheck} />
            </VentanaModal>
         </Contenido>
      </>
   )
}
