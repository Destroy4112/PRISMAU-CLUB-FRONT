import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import VentanaModal from "@shared/components/modals/VentanaModal";
import ToolbarFilter from "@shared/components/toolbar/ToolbarFilter";
import { Wallet } from "lucide-react";
import CardsRubro from "../components/CardsRubro";
import FormRubro from "../components/FormRubro";
import useRubro from "../hooks/useRubro";

export default function RubrosPage() {

    const { titulo, subtitulo, tituloModal, isLoading, loading, modals, rubroForm, rubros, page, total, filters, touched,
        campos, limit, onRowsPerPageChange, clearFilter, openModal, closeModal, onPageChange, handleChange, cargar, submit,
        handleDelete, handleFilterChange } = useRubro();

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<Wallet className="w-7 h-7" />} color="red"
                canCreate label="Crear" accion={openModal} />
            <Contenido>
                <ToolbarFilter<number | null> filters={filters} total={total} onSearchChange={handleFilterChange}
                    entityName={titulo} campos={campos} onClearSearch={() => clearFilter('search')} />
                <CardsRubro rubros={rubros} loading={isLoading} cargar={cargar} handleDelete={handleDelete} limit={limit}
                    page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
                <VentanaModal size={'full'} titulo={tituloModal} show={modals.createUpdate} cerrarModal={closeModal}
                    handleSubmit={submit} loading={loading}>
                    <FormRubro form={rubroForm} touched={touched} handleChange={handleChange} />
                </VentanaModal>
            </Contenido>
        </>
    )
}
