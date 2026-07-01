import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import VentanaModal from "@shared/components/modals/VentanaModal";
import ToolbarFilter from "@shared/components/toolbar/ToolbarFilter";
import { MapPinHouse } from "lucide-react";
import CardsEspacios from "../components/CardsEspacios";
import DisponibilidadEspacio from "../components/DisponibilidadEspacio";
import FormEspacios from "../components/FormEspacio";
import useEspacio from "../hooks/useEspacio";
import { statusEspacios } from "../utils/espacio.util";

export default function EspaciosPage() {

    const { titulo, subtitulo, espacioForm, total, limit, page, espacios, isLoading, tituloModal, modals, loading, touched,
        filters, campos, disponibilidadSemanal, openDrawer, espacioSeleccionado, isLoadingSave,
        handleFilterChange, clearFilter, setFilter, cargar, onPageChange, submit, onRowsPerPageChange, openModal, closeModal,
        handleChange, handleDelete, handleChangeImagen, abrirDisponibilidad, cerrarDisponibilidad, cambiarEstadoDia,
        cambiarHora, save } = useEspacio();

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<MapPinHouse className="w-7 h-7" />} color="red"
                canCreate label="Crear" accion={openModal} />
            <Contenido>
                <ToolbarFilter<number | null> filters={filters} total={total} onSearchChange={handleFilterChange}
                    entityName={titulo} statusOptions={statusEspacios} onClearSearch={() => clearFilter("search")}
                    campos={campos} onStatusFilterChange={(v) => setFilter("state", v)} />
                <CardsEspacios loading={isLoading} espacios={espacios} cargar={cargar} handleDelete={handleDelete}
                    disponibilidad={abrirDisponibilidad} limit={limit}
                    page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
                <VentanaModal size={'full'} titulo={tituloModal} show={modals.crearEditar} cerrarModal={closeModal}
                    handleSubmit={submit} loading={loading}>
                    <FormEspacios form={espacioForm} touched={touched} handleChange={handleChange}
                        handleImageChange={handleChangeImagen} />
                </VentanaModal>
                <DisponibilidadEspacio open={openDrawer} espacio={espacioSeleccionado} disponibilidades={disponibilidadSemanal}
                    loading={isLoading} onClose={cerrarDisponibilidad} onToggleDia={cambiarEstadoDia} onChangeHora={cambiarHora}
                    saving={isLoadingSave} onSave={save} />
            </Contenido>
        </>
    );
}
