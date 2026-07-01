import Caja from "@shared/components/helpers/Caja";
import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import VentanaModal from "@shared/components/modals/VentanaModal";
import { UserCog } from "lucide-react";
import CardMenusRol from "../components/CardMenusRol";
import CardsRoles from "../components/CardsRoles";
import FormAsignarMenu from "../components/FormAsignarMenu";
import HeaderAsigMenu from "../components/HeaderAsigMenu";
import useMenuRole from "../hooks/useMenuRol";

function RolesPage() {

    const { titulo, subtitulo, isLoading, isCreating, rol, menusRol, modals, tituloModal, menus, menuRolForm,
        cargarRol, handleChange, handleDelete, handleSubmit, openModal, closeModal } = useMenuRole();

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<UserCog className="w-7 h-7" />} color="pink" />
            <Contenido>
                <CardsRoles cargarRol={cargarRol} />
                {rol !== 0 &&
                    <Caja>
                        <HeaderAsigMenu toggleModal={openModal} />
                        <CardMenusRol menus={menusRol} eliminar={handleDelete} loading={isLoading} />
                    </Caja>
                }
                <VentanaModal size={'2xl'} titulo={tituloModal} show={modals.crear} cerrarModal={closeModal}
                    handleSubmit={handleSubmit} loading={isCreating}><></>
                    <FormAsignarMenu form={menuRolForm} handleChange={handleChange} menus={menus} />
                </VentanaModal>
            </Contenido>
        </>
    );
}

export default RolesPage;