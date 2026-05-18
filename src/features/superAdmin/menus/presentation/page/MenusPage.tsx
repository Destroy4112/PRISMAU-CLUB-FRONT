import DataTableComponent from "@shared/components/dataTable/DataTableComponent";
import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import VentanaModal from "@shared/components/modals/VentanaModal";
import { List } from "lucide-react";
import FormMenu from "../components/FormMenu";
import MenuColumns from "../components/MenuColumns";
import useMenu from "../hooks/useMenu";


export default function MenusPage() {

    const { titulo, subtitulo, loading, menus, tituloModal, modals, menuForm, isLoading,
        openCreate, closeModal, handleChange, cargarMenu, submit, handleDelete, } = useMenu();

    const columns = MenuColumns({ cargar: cargarMenu, eliminar: handleDelete });

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<List className="w-7 h-7" />} color="yellow"
                canCreate label="Nuevo Modulo" accion={openCreate} />
            <Contenido>
                <DataTableComponent data={menus} loading={isLoading} columns={columns} />
                <VentanaModal size={'4xl'} titulo={tituloModal} show={modals.crearEditar} cerrarModal={closeModal}
                    handleSubmit={submit} loading={loading}>
                    <FormMenu handleChange={handleChange} form={menuForm} />
                </VentanaModal>
            </Contenido>
        </>
    );
}