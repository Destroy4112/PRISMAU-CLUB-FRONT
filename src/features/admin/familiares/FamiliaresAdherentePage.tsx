import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import MenuSencillo from "@shared/components/menu/MenuSencillo";
import VentanaModal from "@shared/components/modals/VentanaModal";
import FormImagen from "@components/shared/users/formulario/FormImagen";
import { useAppLocation } from "@hooks/useStore";
import useUsuario from "@hooks/useUsuario";
import { URL_BACK } from "@models/endpoints/Endpoints.model";
import { Users } from "lucide-react";
import CardFamiliares from "./components/CardFamiliares";
import FormFamiliar from "./components/FormFamiliar";
import useFamiliares from "./hooks/useFamiliares";

export default function FamiliaresAdherentePage() {

    const location = useAppLocation();
    const { adherente } = location.state || {};

    const { resetearPassword } = useUsuario();

    const { titulo, subtitulo, familiares, isLoading, loading, familiar, touched, modals, tituloModal, tituloModalImagen,
        loadingImage, switchModal, cargar, handleChange, handler, cargarImagen, handleChangeImage, handleUpdateImage,
        switchModalImagen, handleDelete, handleDeleteImagen } = useFamiliares(adherente, 'Adherente');

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<Users className="w-7 h-7" />} color="yellow" />
            <Contenido>
                <MenuSencillo toggleModal={switchModal} noBuscar />
                <CardFamiliares familiares={familiares} loading={isLoading} cargar={cargar} handleDelete={handleDelete}
                    change={cargarImagen} reset={resetearPassword} />
                <VentanaModal size={'full'} titulo={tituloModal} show={modals.crearEditar} cerrarModal={switchModal}
                    hanleSubmit={handler} loading={loading}>
                    <FormFamiliar familiar={familiar} touched={touched} handleChange={handleChange} />
                </VentanaModal>
                <VentanaModal size={'4xl'} titulo={tituloModalImagen} show={modals.imagen} cerrarModal={switchModalImagen}
                    hanleSubmit={handleUpdateImage} loading={loadingImage}>
                    <FormImagen label="Cambiar imagen" name="imagen" handleChange={handleChangeImage}
                        value={familiar.imagen && URL_BACK + familiar.imagen} deleteImagen={handleDeleteImagen} />
                </VentanaModal>
            </Contenido>
        </>
    );
}
