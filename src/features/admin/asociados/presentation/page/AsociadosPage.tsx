import DataTableComponent from "@shared/components/dataTable/DataTableComponent";
import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import VentanaModal from "@shared/components/modals/VentanaModal";
import FormEstado from "@shared/components/shared/users/formulario/FormEstado";
import FormImagen from "@shared/components/shared/users/formulario/FormImagen";
import ToolbarFilterSocios from "@shared/components/toolbar/ToolbarFilterSocios";
import { User } from "lucide-react";
import type { Asociado } from "../../domain/model/asociado.model";
import AsociadoColumns from "../components/AsociadoColumns";
import FormAsociados from "../components/FormAsociados";
import useAsociado from "../hooks/useAsociado";
import { statusAsociados } from "../utils/asociado.util";

export default function AsociadosPage() {

   const { titulo, subtitulo, asociadoForm, total, limit, page, asociados, isLoading, tituloModal, modals, loading, touched,
      filters, tituloModalEstado, asociadoEstadoForm, isUpdatingStatus, tituloModalImagen, isUpdatingImagen, asociadoImagenForm,
      handleFilterChange, clearFilter, setFilter, goFamiliares, handleChangeEstado, closeModalEstado, onPageChange, submit, cargar,
      onRowsPerPageChange, openModal, closeModal, handleChange, changeState, handleDelete, handleUpdateEstado, cargarImagen,
      closeModalImagen, handleChangeImagen, handleUpdateImagen, handleDeleteImagen, handleResetPassword } = useAsociado();

   const columns = AsociadoColumns({ cargar, handleDelete, goFamiliares, changeState, cargarImagen, reset: handleResetPassword });

   // const data = DataExportAsociados(asociados);

   return (
      <>
         <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<User className="w-7 h-7" />} color="green"
            canCreate label="Crear" accion={openModal} />
         <Contenido>
            <ToolbarFilterSocios<number | null> filters={filters} total={total} onSearchChange={handleFilterChange}
               entityName={titulo} statusOptions={statusAsociados} onClearSearch={() => clearFilter("search")}
               onStatusFilterChange={(v) => setFilter("state", v)} />
            <DataTableComponent<Asociado> columns={columns} data={asociados} loading={isLoading}
               limit={limit} page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
            <VentanaModal size={'full'} titulo={tituloModal} show={modals.crearEditar} cerrarModal={closeModal}
               handleSubmit={submit} loading={loading}>
               <FormAsociados form={asociadoForm} touched={touched} handleChange={handleChange} />
            </VentanaModal>
            <VentanaModal size="full" titulo={tituloModalEstado} show={modals.estado} cerrarModal={closeModalEstado}
               handleSubmit={handleUpdateEstado} loading={isUpdatingStatus}>
               <FormEstado estado={asociadoEstadoForm} handleChange={handleChangeEstado} />
            </VentanaModal>
            <VentanaModal size={'4xl'} titulo={tituloModalImagen} show={modals.imagen} cerrarModal={closeModalImagen}
               handleSubmit={handleUpdateImagen} loading={isUpdatingImagen}>
               <FormImagen label="Cambiar imagen" name="imagen" handleChange={handleChangeImagen}
                  value={asociadoImagenForm.imagenActualUrl} deleteImagen={handleDeleteImagen} />
            </VentanaModal>
         </Contenido>
      </>
   );
}
