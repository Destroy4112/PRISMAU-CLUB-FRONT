import FiltrosBusqueda from "@components/buscador/FiltrosBusqueda";
import DataTableComponent from "@components/dataTable/DataTableComponent";
import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import MenuSencillo from "@shared/components/menu/MenuSencillo";
import VentanaModal from "@shared/components/modals/VentanaModal";
import FormImagen from "@components/shared/users/formulario/FormImagen";
import useUsuario from "@hooks/useUsuario";
import { URL_BACK } from "@models/endpoints/Endpoints.model";
import type { IEmpleado } from '@models/usuario/Usuario.model';
import { IdCardLanyard } from "lucide-react";
import { CAMPOS_EMPLEADO } from "./components/camposEmpleado";
import EmpleadoColumns from "./components/EmpleadoColumns";
import FormEmpleado from "./components/FormEmpleado";
import useEmpleado from "./hooks/useEmpleado";

export default function EmpleadosPage() {

    const { resetearPassword } = useUsuario();

    const { titulo, subtitulo, empleado, total, limit, page, empleados, isLoading, tituloModal, modals, loading,
        touched, filters, tituloModalImagen, isUpdatingImagen, handleFilterChange, limpiarFiltros, onPageChange,
        onRowsPerPageChange, toggleModal, handleChange, handler, cargar, handleDelete, cargarImagen, switchModalImagen,
        handleChangeImagen, handleUpdateImagen, handleDeleteImagen } = useEmpleado();

    const columns = EmpleadoColumns({ cargar, handleDelete, cargarImagen, reset: resetearPassword });

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<IdCardLanyard className="w-7 h-7" />} color="pink" />
            <Contenido>
                <MenuSencillo toggleModal={toggleModal} noBuscar />
                <FiltrosBusqueda fields={CAMPOS_EMPLEADO} values={filters} handleChange={handleFilterChange}
                    limpiar={limpiarFiltros} />
                <DataTableComponent<IEmpleado> columns={columns} data={empleados} loading={isLoading}
                    limit={limit} page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
                <VentanaModal size={'full'} titulo={tituloModal} show={modals.crearEditar} cerrarModal={toggleModal}
                    hanleSubmit={handler} loading={loading}>
                    <FormEmpleado empleado={empleado} touched={touched} handleChange={handleChange} />
                </VentanaModal>
                <VentanaModal size={'4xl'} titulo={tituloModalImagen} show={modals.imagen} cerrarModal={switchModalImagen}
                    hanleSubmit={handleUpdateImagen} loading={isUpdatingImagen}>
                    <FormImagen label="Cambiar imagen" name="imagen" handleChange={handleChangeImagen}
                        value={empleado.imagen && URL_BACK + empleado.imagen} deleteImagen={handleDeleteImagen} />
                </VentanaModal>
            </Contenido>
        </>
    );
}
