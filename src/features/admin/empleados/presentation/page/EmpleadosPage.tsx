import DataTableComponent from "@shared/components/dataTable/DataTableComponent";
import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import VentanaModal from "@shared/components/modals/VentanaModal";
import FormImagen from "@shared/components/shared/users/formulario/FormImagen";
import ToolbarFilter from "@shared/components/toolbar/ToolbarFilter";
import { User } from "lucide-react";
import type { Empleado } from "../../domain/model/empleado.model";
import EmpleadoColumns from "../components/EmpleadoColumns";
import FormEmpleados from "../components/FormEmpleado";
import useEmpleado from "../hooks/useEmpleado";
import { statusEmpleados } from "../utils/empleado.util";

export default function EmpleadosPage() {

    const { titulo, subtitulo, empleadoForm, total, limit, page, empleados, isLoading, tituloModal, modals, loading, touched,
        filters, tituloModalImagen, isUpdatingImagen, empleadoImagenForm, campos, handleFilterChange, clearFilter, setFilter, onPageChange,
        submit, cargar, onRowsPerPageChange, openModal, closeModal, handleChange, handleDelete, cargarImagen, closeModalImagen,
        handleChangeImagen, handleUpdateImagen, handleDeleteImagen, handleResetPassword } = useEmpleado();

    const columns = EmpleadoColumns({ cargar, handleDelete, cargarImagen, reset: handleResetPassword });

    // const data = DataExportEmpleados(empleados);

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<User className="w-7 h-7" />} color="green"
                canCreate label="Crear" accion={openModal} />
            <Contenido>
                <ToolbarFilter<number | null> filters={filters} total={total} onSearchChange={handleFilterChange}
                    entityName={titulo} statusOptions={statusEmpleados} onClearSearch={() => clearFilter("search")}
                    campos={campos} onStatusFilterChange={(v) => setFilter("state", v)} />
                <DataTableComponent<Empleado> columns={columns} data={empleados} loading={isLoading}
                    limit={limit} page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
                <VentanaModal size={'full'} titulo={tituloModal} show={modals.crearEditar} cerrarModal={closeModal}
                    handleSubmit={submit} loading={loading}>
                    <FormEmpleados form={empleadoForm} touched={touched} handleChange={handleChange} />
                </VentanaModal>
                <VentanaModal size={'4xl'} titulo={tituloModalImagen} show={modals.imagen} cerrarModal={closeModalImagen}
                    handleSubmit={handleUpdateImagen} loading={isUpdatingImagen}>
                    <FormImagen label="Cambiar imagen" name="imagen" handleChange={handleChangeImagen}
                        value={empleadoImagenForm.imagenActualUrl} deleteImagen={handleDeleteImagen} />
                </VentanaModal>
            </Contenido>
        </>
    );
}
