import FiltrosBusqueda from "@components/buscador/FiltrosBusqueda";
import DataTableComponent from "@components/dataTable/DataTableComponent";
import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import MenuSencillo from "@shared/components/menu/MenuSencillo";
import VentanaModal from "@shared/components/modals/VentanaModal";
import FormEstado from "@components/shared/users/formulario/FormEstado";
import FormImagen from "@components/shared/users/formulario/FormImagen";
import useUsuario from "@hooks/useUsuario";
import { URL_BACK } from "@models/endpoints/Endpoints.model";
import type { IAsociado } from "@models/usuario/Usuario.model";
import { User } from "lucide-react";
import AsociadoColumns from "./components/AsociadoColumns";
import { CAMPOS_ASOCIADO } from "./components/camposAsociado";
import FormAsociados from "./components/FormAsociados";
import useAsociado from "./hooks/useAsociado";

export default function AsociadosPage() {

    const { resetearPassword } = useUsuario();

    const { titulo, subtitulo, asociado, total, limit, page, asociados, isLoading, tituloModal, modals, loading,
        touched, filters, tituloModalEstado, asociadoEstado, isUpdatingStatus, tituloModalImagen, isUpdatingImagen,
        handleFilterChange, limpiarFiltros, goFamiliares, handleChangeEstado, switchModalEstado, onPageChange,
        onRowsPerPageChange, toggleModal, handleChange, handler, cargar, changeState, handleDelete, handleUpdateEstado,
        cargarImagen, switchModalImagen, handleChangeImagen, handleUpdateImagen, handleDeleteImagen } = useAsociado();

    const columns = AsociadoColumns({ cargar, handleDelete, goFamiliares, changeState, cargarImagen, reset: resetearPassword });

    // const data = DataExportAsociados(asociados);

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<User className="w-7 h-7" />} color="green" />
            <Contenido>
                <MenuSencillo<IAsociado> toggleModal={toggleModal} titulo={titulo} noBuscar />
                <FiltrosBusqueda fields={CAMPOS_ASOCIADO} values={filters} handleChange={handleFilterChange} limpiar={limpiarFiltros} />
                <DataTableComponent<IAsociado> columns={columns} data={asociados} loading={isLoading}
                    limit={limit} page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
                <VentanaModal size={'full'} titulo={tituloModal} show={modals.crearEditar} cerrarModal={toggleModal}
                    hanleSubmit={handler} loading={loading}>
                    <FormAsociados asociado={asociado} touched={touched} handleChange={handleChange} />
                </VentanaModal>
                <VentanaModal size="full" titulo={tituloModalEstado} show={modals.estado} cerrarModal={switchModalEstado}
                    hanleSubmit={handleUpdateEstado} loading={isUpdatingStatus}>
                    <FormEstado estado={asociadoEstado} handleChange={handleChangeEstado} />
                </VentanaModal>
                <VentanaModal size={'4xl'} titulo={tituloModalImagen} show={modals.imagen} cerrarModal={switchModalImagen}
                    hanleSubmit={handleUpdateImagen} loading={isUpdatingImagen}>
                    <FormImagen label="Cambiar imagen" name="imagen" handleChange={handleChangeImagen}
                        value={asociado.imagen && URL_BACK + asociado.imagen} deleteImagen={handleDeleteImagen} />
                </VentanaModal>
            </Contenido>
        </>
    );
}
