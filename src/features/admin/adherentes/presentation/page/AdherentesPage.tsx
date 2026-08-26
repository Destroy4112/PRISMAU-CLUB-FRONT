import DataTableComponent from "@shared/components/dataTable/DataTableComponent";
import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import VentanaModal from "@shared/components/modals/VentanaModal";
import FormEstado from "@shared/components/shared/users/formulario/FormEstado";
import FormImagen from "@shared/components/shared/users/formulario/FormImagen";
import ToolbarFilterSocios from "@shared/components/toolbar/ToolbarFilterSocios";
import { User } from "lucide-react";
import type { Adherente } from "../../domain/model/adherente.model";
import AdherenteColumns from "../components/AdherenteColumns";
import FormAdherentes from "../components/FormAdherentes";
import useAdherente from "../hooks/useAdherente";
import { statusAdherentes } from "../utils/adherente.util";

export default function AdherentesPage() {

   const { titulo, subtitulo, adherenteForm, total, limit, page, adherentes, isLoading, tituloModal, modals, loading, touched,
      filters, tituloModalEstado, adherenteEstadoForm, isUpdatingStatus, tituloModalImagen, isUpdatingImagen, adherenteImagenForm,
      asociados, loadingAsociados, handleUpdateAsociado,
      handleFilterChange, clearFilter, setFilter, goFamiliares, handleChangeEstado, closeModalEstado, onPageChange, submit, cargar,
      onRowsPerPageChange, openModal, closeModal, handleChange, changeState, handleDelete, handleUpdateEstado, cargarImagen,
      closeModalImagen, handleChangeImagen, handleUpdateImagen, handleDeleteImagen, handleResetPassword } = useAdherente();

   const columns = AdherenteColumns({ cargar, handleDelete, goFamiliares, changeState, cargarImagen, reset: handleResetPassword, changeToAsociado: handleUpdateAsociado });

   // const data = DataExportAdherentes(adherentes);

   return (
      <>
         <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<User className="w-7 h-7" />} color="purple"
            canCreate label="Crear" accion={openModal} />
         <Contenido>
            <ToolbarFilterSocios<number | null> filters={filters} total={total} onSearchChange={handleFilterChange}
               entityName={titulo} statusOptions={statusAdherentes} onClearSearch={() => clearFilter("search")}
               onStatusFilterChange={(v) => setFilter("state", v)} />
            <DataTableComponent<Adherente> columns={columns} data={adherentes} loading={isLoading}
               limit={limit} page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
            <VentanaModal size={'full'} titulo={tituloModal} show={modals.crearEditar} cerrarModal={closeModal}
               handleSubmit={submit} loading={loading}>
               <FormAdherentes form={adherenteForm} asociados={asociados} touched={touched} handleChange={handleChange}
                  loading={loadingAsociados} />
            </VentanaModal>
            <VentanaModal size="full" titulo={tituloModalEstado} show={modals.estado} cerrarModal={closeModalEstado}
               handleSubmit={handleUpdateEstado} loading={isUpdatingStatus}>
               <FormEstado estado={adherenteEstadoForm} handleChange={handleChangeEstado} />
            </VentanaModal>
            <VentanaModal size={'4xl'} titulo={tituloModalImagen} show={modals.imagen} cerrarModal={closeModalImagen}
               handleSubmit={handleUpdateImagen} loading={isUpdatingImagen}>
               <FormImagen label="Cambiar imagen" name="imagen" handleChange={handleChangeImagen}
                  value={adherenteImagenForm.imagenActualUrl} deleteImagen={handleDeleteImagen} />
            </VentanaModal>
         </Contenido>
      </>
   );
}
