import FiltrosBusqueda from "@shared/components/buscador/FiltrosBusqueda";
import DataTableComponent from "@shared/components/dataTable/DataTableComponent";
import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import MenuSencillo from "@shared/components/menu/MenuSencillo";
import VentanaModal from "@shared/components/modals/VentanaModal";
import FormClave from "@shared/components/shared/users/formulario/FormClave";
import { ShieldUser } from "lucide-react";
import type { Administrador } from "../../domain/administrador.model";
import AdminColumns from "../components/AdminColumns";
import { CAMPOS_ADMIN } from "../components/camposAdmin";
import DataExportAdmins from "../components/DataExportAdmins";
import FormAdmin from "../components/FormAdmin";
import useAdministrador from "../hooks/useAdministrador";

function AdministradoresPage() {

    const { titulo, subtitulo, tituloModal, modals, admins, filters, limit, page, total, admin, isLoading, loading, isEditing,
        tituloModalClave, isChanging, handleChange, toggleModal, handler, cargar, handleDelete, handleFilterChange,
        limpiarFiltros, handleUpdateStatus, onPageChange, onRowsPerPageChange, cambiarClave, handleUpdateClave, switchModalClave
    } = useAdministrador();

    const columns = AdminColumns({ cargar, handleDelete, handleUpdateStatus, cambiarClave });

    const data = DataExportAdmins(admins);

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<ShieldUser className="w-7 h-7" />} color="pink" />
            <Contenido>
                <MenuSencillo toggleModal={toggleModal} exportar data={data} titulo={titulo} noBuscar />
                <FiltrosBusqueda fields={CAMPOS_ADMIN} values={filters} handleChange={handleFilterChange}
                    limpiar={limpiarFiltros} />
                <DataTableComponent<Administrador> columns={columns} data={admins} loading={isLoading} page={page}
                    limit={limit} total={total} onRowsPerPageChange={onRowsPerPageChange} onPageChange={onPageChange} />
                <VentanaModal size={'7xl'} titulo={tituloModal} show={modals.crearEditar} cerrarModal={toggleModal}
                    hanleSubmit={handler} loading={loading}><></>
                    <FormAdmin isEditing={isEditing} form={admin} hanleChange={handleChange} />
                </VentanaModal>
                <VentanaModal size={'4xl'} titulo={tituloModalClave} show={modals.clave} cerrarModal={switchModalClave}
                    hanleSubmit={handleUpdateClave} loading={isChanging}>
                    <FormClave value={admin.user.password} hanleChange={handleChange} />
                </VentanaModal>
            </Contenido>
        </>
    );
}

export default AdministradoresPage;