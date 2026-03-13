import { useAppLocation } from "@app/routes/hooks";
import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import MenuSencillo from "@shared/components/menu/MenuSencillo";
import VentanaModal from "@shared/components/modals/VentanaModal";
import FormImagen from "@shared/components/shared/users/formulario/FormImagen";
import type { SocioDetail } from "@shared/models/usuario-detail.model";
import { Users } from "lucide-react";
import CardFamiliares from "../components/CardFamiliares";
import FormFamiliar from "../components/FormFamiliar";
import useFamiliar from "../hooks/useFamiliar";

export default function FamiliaresAdherentePage() {

    const adherente: SocioDetail = useAppLocation().state?.adherente;

    const { titulo, subtitulo, familiares, isLoading, loading, familiarForm, touched, modals, tituloModal, tituloModalImagen,
        isUpdatingImagen, familiarImagenForm, openModal, closeModal, cargar, handleChange, submit, cargarImagen, handleChangeImagen,
        handleUpdateImagen, closeModalImagen, handleDelete, handleDeleteImagen, handleResetPassword } = useFamiliar(adherente, 'Adherente');

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<Users className="w-7 h-7" />} color="yellow" />
            <Contenido>
                <MenuSencillo toggleModal={openModal} noBuscar />
                <CardFamiliares familiares={familiares} loading={isLoading} cargar={cargar} handleDelete={handleDelete}
                    change={cargarImagen} reset={handleResetPassword} />
                <VentanaModal size={'full'} titulo={tituloModal} show={modals.crearEditar} cerrarModal={closeModal}
                    hanleSubmit={submit} loading={loading}>
                    <FormFamiliar form={familiarForm} touched={touched} handleChange={handleChange} />
                </VentanaModal>
                <VentanaModal size={'4xl'} titulo={tituloModalImagen} show={modals.imagen} cerrarModal={closeModalImagen}
                    hanleSubmit={handleUpdateImagen} loading={isUpdatingImagen}>
                    <FormImagen label="Cambiar imagen" name="imagen" handleChange={handleChangeImagen}
                        value={familiarImagenForm.imagenActualUrl} deleteImagen={handleDeleteImagen} />
                </VentanaModal>
            </Contenido>
        </>
    );
}
