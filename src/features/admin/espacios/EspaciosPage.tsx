import Contenido from '@components/helpers/Contenido';
import TituloPage from '@components/helpers/TituloPage';
import MenuSencillo from '@components/menu/MenuSencillo';
import VentanaModal from '@components/modals/VentanaModal';
import FormImagen from '@components/shared/users/formulario/FormImagen';
import { URL_BACK } from '@models/endpoints/Endpoints.model';
import { MapPinHouse } from 'lucide-react';
import CardsEspacios from './components/CardsEspacios';
import FormEspacio from './components/FormEspacio';
import useEspacio from './hooks/useEspacio';

export default function EspaciosPage() {

  const { titulo, subtitulo, tituloModal, tituloModalImagen, espacio, espacios, isLoading, loading, modals, filters,
    touched, isUpdatingImagen,
    handleChangeBusqueda, toggleModal, cargar, handler, handleUpdateImagen, handleDelete,
    handleChange, switchModalImagen, handleChangeImagen, cargarImagen } = useEspacio();

  return (
    <>
      <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<MapPinHouse className="w-7 h-7" />} color="red" />
      <Contenido>
        <MenuSencillo toggleModal={toggleModal} busqueda={filters.Descripcion} handleBusqueda={handleChangeBusqueda} />
        <CardsEspacios loading={isLoading} espacios={espacios} cargar={cargar} handleDelete={handleDelete}
          cambiarImagen={cargarImagen} disponibilidad={handleUpdateImagen} />
        <VentanaModal size={'5xl'} titulo={tituloModal} show={modals.crearEditar} cerrarModal={toggleModal}
          hanleSubmit={handler} loading={loading}>
          <FormEspacio espacio={espacio} handleChange={handleChange} touched={touched} />
        </VentanaModal>
        <VentanaModal size={'4xl'} titulo={tituloModalImagen} show={modals.imagen} cerrarModal={switchModalImagen}
          hanleSubmit={handleUpdateImagen} loading={isUpdatingImagen}>
          <FormImagen label="Cambiar imagen" name="imagen" handleChange={handleChangeImagen}
            value={espacio.imagen && URL_BACK + espacio.imagen} />
        </VentanaModal>
      </Contenido>
    </>
  )
}