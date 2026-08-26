import DataTableComponent from "@shared/components/dataTable/DataTableComponent";
import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import VentanaModal from "@shared/components/modals/VentanaModal";
import ToolbarFilter from "@shared/components/toolbar/ToolbarFilter";
import { Inbox } from "lucide-react";
import FormSolicitudes from "../components/FormSolicitudes";
import SolicitudColumns from "../components/SolicitudColumns";
import useSolicitud from "../hooks/useSolicitud";
import { statusSolicitudes } from "../utils/solicitud.util";

function SolicitudesPage() {

   const { titulo, subtitulo, solicitudes, limit, page, isLoading, filters, modals, tituloModal, solicitudReplyForm, loading,
      total, solicitud, campos, handleFilterChange, clearFilter, onPageChange, onRowsPerPageChange, openModal, closeModal,
      setFilter, handleChange, handleSubmit } = useSolicitud();

   const columns = SolicitudColumns({ cargarSolicitud: openModal });

   return (
      <>
         <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<Inbox className="w-7 h-7" />} color="purple" />
         <Contenido>
            <ToolbarFilter<number | null> filters={filters} total={total} campos={campos} onSearchChange={handleFilterChange}
               entityName={titulo} statusOptions={statusSolicitudes} onClearSearch={() => clearFilter("search")}
               onStatusFilterChange={(v) => setFilter("state", v)} />
            <DataTableComponent data={solicitudes} loading={isLoading} columns={columns} limit={limit} page={page}
               total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
            <VentanaModal size={'full'} titulo={tituloModal} show={modals.reply} cerrarModal={closeModal}
               handleSubmit={handleSubmit} loading={loading}>
               <FormSolicitudes form={solicitudReplyForm} solicitud={solicitud} handleChange={handleChange} />
            </VentanaModal>
         </Contenido>
      </>
   );
}

export default SolicitudesPage