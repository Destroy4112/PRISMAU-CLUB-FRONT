import DataTableComponent from "@shared/components/dataTable/DataTableComponent";
import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import VentanaModal from "@shared/components/modals/VentanaModal";
import FormClave from "@shared/components/shared/users/formulario/FormClave";
import { ShieldUser } from "lucide-react";
import type { Administrador } from "../../domain/models/administrador.model";
import AdminColumns from "../components/AdminColumns";
import AdminToolbar from "../components/AdminToolbar";
import DataExportAdmins from "../components/DataExportAdmins";
import FormAdmin from "../components/FormAdmin";
import useAdministrador from "../hooks/useAdministrador";
import type { AdministradorExport } from "../types/admin";

function AdministradoresPage() {

    const { titulo, subtitulo, tituloModal, modals, admins, filters, limit, page, total, admin, isLoading, loading, isEditing,
        tituloModalClave, isChanging, passwordForm, handleChangePassword, handleChange, openModal, closeModal, submit, cargar,
        handleDelete, openModalPass, closeModalPass, handleUpdatePass, handleFilterChange, limpiarFiltros, handleUpdateStatus,
        onPageChange, onRowsPerPageChange } = useAdministrador();

    const columns = AdminColumns({ cargar, handleDelete, handleUpdateStatus, cambiarClave: openModalPass });

    const data = DataExportAdmins(admins) ?? [];

    return (
        <>
            <TituloPage<AdministradorExport> titulo={titulo} subtitulo={subtitulo} icono={<ShieldUser className="w-7 h-7" />} color="pink"
                canCreate label="Crear" canExport data={data} accion={openModal} />
            <Contenido>
                <AdminToolbar total={total} filters={filters} onSearchChange={handleFilterChange} onClearSearch={limpiarFiltros} />
                <DataTableComponent<Administrador> columns={columns} data={admins} loading={isLoading} page={page}
                    limit={limit} total={total} onRowsPerPageChange={onRowsPerPageChange} onPageChange={onPageChange} />
                <VentanaModal size={'7xl'} titulo={tituloModal} show={modals.crearEditar} cerrarModal={closeModal}
                    hanleSubmit={submit} loading={loading}><></>
                    <FormAdmin isEditing={isEditing} form={admin} hanleChange={handleChange} />
                </VentanaModal>
                <VentanaModal size={'4xl'} titulo={tituloModalClave} show={modals.clave} cerrarModal={closeModalPass}
                    hanleSubmit={handleUpdatePass} loading={isChanging}>
                    <FormClave value={passwordForm.password} hanleChange={handleChangePassword} />
                </VentanaModal>
            </Contenido>
        </>
    );
}

export default AdministradoresPage;