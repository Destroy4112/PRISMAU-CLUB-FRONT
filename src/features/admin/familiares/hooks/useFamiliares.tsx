import useModals from '@hooks/useModal';
import type { IAdherente, IAsociado, IFamiliar } from '@models/usuario/Usuario.model';
import { alertConfirm, alertError, alertSucces, alertWarning } from '@utils/alerts/alertas.utility';
import { useState, type ChangeEvent } from 'react';
import apiQueryFamiliar from '../api/apiQueryFamiliar';
import type { IFamiliarLogo } from '../types/familiar';

function useFamiliares(socio: IAsociado | IAdherente, type: 'Asociado' | 'Adherente') {

    const { modals, toggleModal } = useModals();

    const { isCreating, isUpdating, isUpdatingImagen, createFamiliarMutation, getFamiliarsQuery,
        actualizarFamiliarMutation, actualizarImagenMutation, eliminarFamiliarMutation,
        eliminarImagenFamiliarMutation } = apiQueryFamiliar();

    const [touched, setTouched] = useState<boolean>(false);
    const [familiar, setFamiliar] = useState<IFamiliar>(getInitialFamiliar());
    const [familiarLogo, setFamiliarLogo] = useState<IFamiliarLogo>(getFamiliarLogoEmpty());

    /*============== Recargar ================================*/

    function getInitialFamiliar(): IFamiliar {
        return {
            Nombre: "",
            Apellidos: "",
            TipoDocumento: "",
            Documento: "",
            Correo: "",
            Telefono: "",
            FechaNacimiento: "",
            LugarNacimiento: "",
            Sexo: "",
            Codigo: socio.Codigo,
            EstadoCivil: "",
            DireccionResidencia: "",
            CiudadResidencia: "",
            Parentesco: "",
            Estado: socio.Estado,
            [type === 'Asociado' ? 'asociado_id' : 'adherente_id']: socio.id,
        };
    }

    function getFamiliarLogoEmpty(): IFamiliarLogo {
        return {
            id: null,
            imagen: null,
        };
    }

    const recargar = (): void => {
        setFamiliar(getInitialFamiliar());
        setFamiliarLogo(getFamiliarLogoEmpty());
        setTouched(false);
    };

    const switchModal = (): void => {
        recargar();
        toggleModal("crearEditar");
    };

    /*============== Agregar ================================*/

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = target;
        setFamiliar((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (): void => {
        setTouched(true);
        createFamiliarMutation(familiar, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    switchModal();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al crear el asociado: ${error.message}`); },
        });
    };

    //============== Consultar ==============================

    const { data: familiares, isLoading } = getFamiliarsQuery(socio.id!, type);

    //============== Actualizar ==============================

    const cargar = (familiar: IFamiliar): void => {
        setFamiliar(familiar);
        toggleModal("crearEditar");
    };

    const handleUpdate = (): void => {
        setTouched(true);
        actualizarFamiliarMutation(familiar, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    switchModal();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al actualizar el familiar: ${error.message}`); },
        });
    };

    //============== Cambiar imagen ========================

    const switchModalImagen = (): void => {
        toggleModal("imagen");
        recargar();
    };

    const cargarImagen = (id: number, imagen: string): void => {
        toggleModal("imagen");
        setFamiliarLogo((prev) => ({ ...prev, id }));
        setFamiliar((prev) => ({ ...prev, imagen }));
    };

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>): void => {
        const files = e.target.files;
        if (!files || files.length === 0) return;
        const file = files[0];
        setFamiliarLogo((prev) => ({ ...prev, imagen: file }));
    };

    const handleUpdateImage = (): void => {
        const formData = new FormData();
        if (familiarLogo.imagen) {
            formData.append('imagen', familiarLogo.imagen as File);
        }
        actualizarImagenMutation({ id: familiarLogo.id, imagen: formData }, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    switchModalImagen();
                } else {
                    data.errors.forEach(err => { alertWarning(err); })
                }
            },
            onError: (error) => { alertError(error.message); }
        });
    };

    //============== Eliminar ==============================

    const handleDelete = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar este familiar?", "Si, eliminar!")) {
            eliminarFamiliarMutation(id, {
                onSuccess: () => alertSucces("Asociado eliminado con éxito"),
                onError: (error) => alertError(`Error al eliminar el familiar: ${error.message}`),
            });
        }
    };

    /*=========== ELiminar imagen ============================*/

    const handleDeleteImagen = async (): Promise<void> => {
        if (familiarLogo.id) {
            if (await alertConfirm("¿Seguro que quiere eliminar la imagen de este familiar?", "Si, eliminar!")) {
                eliminarImagenFamiliarMutation(familiarLogo.id, {
                    onSuccess: (data) => {
                        if (data.status) {
                            alertSucces(data.message);
                            switchModalImagen();
                        }
                    },
                    onError: (error) => alertError(`Error al eliminar la imagen del familiar: ${error.message}`),
                });
            }
        }
    };

    return {
        titulo: type === 'Asociado' ? 'Familiares' : 'Familiares',
        subtitulo: `Grupo familiar del ${type === 'Asociado' ? 'asociado' : 'adherente'} ${socio.Nombre} ${socio.Apellidos}`,
        tituloModal: familiar.id ? "Editar Familiar" : "Crear Familiar",
        tituloModalImagen: "Cambiar Imagen",
        familiares,
        isLoading,
        modals,
        familiar,
        touched,
        loading: familiar.id ? isUpdating : isCreating,
        loadingImage: isUpdatingImagen,
        switchModal,
        handleChange,
        handler: familiar.id ? handleUpdate : handleSubmit,
        cargar,
        switchModalImagen,
        cargarImagen,
        handleChangeImage,
        handleUpdateImage,
        handleDelete,
        handleDeleteImagen
    };
}

export default useFamiliares;