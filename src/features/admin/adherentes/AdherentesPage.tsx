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
import type { IAdherente } from "@models/usuario/Usuario.model";
import apiQueryAsociado from "../asociados/api/apiQueryAsociado";
import AdherenteColumns from "./components/AdherenteColumns";
import { CAMPOS_ADHERENTE } from "./components/camposAdherente";
import FormAdherente from "./components/FormAdherente";
import useAdherente from "./hooks/useAdherente";
import { User } from "lucide-react";

export default function AdherentesPage() {

    const { resetearPassword } = useUsuario();

    const { asociados } = apiQueryAsociado();

    const { titulo, subtitulo, adherente, total, limit, page, solicitudes, isLoading, tituloModal, modals, loading,
        touched, filters, tituloModalEstado, adherenteEstado, isUpdatingStatus, tituloModalImagen, isUpdatingImagen,
        handleFilterChange, limpiarFiltros, goFamiliares, handleChangeEstado, switchModalEstado, onPageChange, handler,
        onRowsPerPageChange, toggleModal, handleChange, changeState, handleDelete, handleUpdateEstado, switchModalImagen,
        cargar, cargarImagen, handleChangeImagen, handleUpdateImagen, handleDeleteImagen, handleUpdateToAsociado } = useAdherente();

    const columns = AdherenteColumns({
        cargar, handleDelete, goFamiliares, changeState, cargarImagen, changeToAsociado: handleUpdateToAsociado,
        reset: resetearPassword
    });

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<User className="w-7 h-7" />} color="purple" />
            <Contenido>
                <MenuSencillo toggleModal={toggleModal} noBuscar />
                <FiltrosBusqueda fields={CAMPOS_ADHERENTE} values={filters} handleChange={handleFilterChange} limpiar={limpiarFiltros} />
                <DataTableComponent<IAdherente> columns={columns} data={solicitudes} loading={isLoading}
                    limit={limit} page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
                <VentanaModal size={'full'} titulo={tituloModal} show={modals.crearEditar} cerrarModal={toggleModal}
                    hanleSubmit={handler} loading={loading}>
                    <FormAdherente adherente={adherente} touched={touched} handleChange={handleChange} asociados={asociados} />
                </VentanaModal>
                <VentanaModal size="full" titulo={tituloModalEstado} show={modals.estado} cerrarModal={switchModalEstado}
                    hanleSubmit={handleUpdateEstado} loading={isUpdatingStatus}>
                    <FormEstado estado={adherenteEstado} handleChange={handleChangeEstado} />
                </VentanaModal>
                <VentanaModal size={'4xl'} titulo={tituloModalImagen} show={modals.imagen} cerrarModal={switchModalImagen}
                    hanleSubmit={handleUpdateImagen} loading={isUpdatingImagen}>
                    <FormImagen label="Cambiar imagen" name="imagen" handleChange={handleChangeImagen}
                        value={adherente.imagen && URL_BACK + adherente.imagen} deleteImagen={handleDeleteImagen} />
                </VentanaModal>
            </Contenido>
        </>
    );
}
