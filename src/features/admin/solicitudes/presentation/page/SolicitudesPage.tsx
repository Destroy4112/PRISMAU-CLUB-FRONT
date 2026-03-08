import FiltrosBusqueda from "@shared/components/buscador/FiltrosBusqueda";
import DataTableComponent from "@shared/components/dataTable/DataTableComponent";
import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import VentanaModal from "@shared/components/modals/VentanaModal";
import { Inbox } from "lucide-react";
import { CAMPOS_SOLICITUD } from "../components/camposSolicitud";
import FormSolicitudes from "../components/FormSolicitudes";
import SolicitudColumns from "../components/SolicitudColumns";
import useSolicitud from "../hooks/useSolicitud";


function SolicitudesPage() {

  const { titulo, subtitulo, solicitudes, limit, page, isLoading, filters, modals, tituloModal, solicitudForm, loading, total,
    solicitud, handleFilterChange, limpiarFiltros, onPageChange, onRowsPerPageChange, openModal, closeModal, handleChange,
    handleSubmit } = useSolicitud();

  const columns = SolicitudColumns({ cargarSolicitud: openModal });

  return (
    <>
      <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<Inbox className="w-7 h-7" />} color="purple" />
      <Contenido>
        <FiltrosBusqueda fields={CAMPOS_SOLICITUD} values={filters} handleChange={handleFilterChange}
          limpiar={limpiarFiltros} />
        <DataTableComponent data={solicitudes} loading={isLoading} columns={columns} limit={limit} page={page}
          total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
        <VentanaModal size={'full'} titulo={tituloModal} show={modals.reply} cerrarModal={closeModal}
          hanleSubmit={handleSubmit} loading={loading}>
          <FormSolicitudes form={solicitudForm} solicitud={solicitud} handleChange={handleChange} />
        </VentanaModal>
      </Contenido>
    </>
  );
}

export default SolicitudesPage