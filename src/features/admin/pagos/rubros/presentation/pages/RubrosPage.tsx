import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import MenuSencillo from "@shared/components/menu/MenuSencillo";
import VentanaModal from "@shared/components/modals/VentanaModal";
import { Wallet } from "lucide-react";
import CardsRubro from "../components/CardsRubro";
import FormRubro from "../components/FormRubro";
import useRubro from "../hooks/useRubro";

export default function RubrosPage() {

    const { titulo, subtitulo, tituloModal, isLoading, loading, modals, rubroForm, rubros, page, total, filters, totalPages,
        handleChangeBusqueda, onPageChange, handleChange, handleDelete, handler,
        toggleModal, cargarRubro } = useRubro();

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<Wallet className="w-7 h-7" />} color="red" />
            <Contenido>
                <MenuSencillo toggleModal={toggleModal} busqueda={filters.rubro} handleBusqueda={handleChangeBusqueda} />
                <CardsRubro rubros={rubros} loading={isLoading} cargar={cargarRubro} handleDelete={handleDelete}
                    totalPages={totalPages} page={page} total={total} onPageChange={onPageChange} />
                <VentanaModal size={'4xl'} titulo={tituloModal} show={modals.crearEditar} cerrarModal={toggleModal}
                    hanleSubmit={handler} loading={loading}>
                    <FormRubro form={rubroForm} handleChange={handleChange} />
                </VentanaModal>
            </Contenido>
        </>
    )
}
