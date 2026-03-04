import useModals from '@hooks/useModal';
import type { IEncuesta } from '@models/entities/Entity.model';
import { alertConfirm, alertError, alertSucces, alertWarning } from '@utils/alerts/alertas.utility';
import { useState, type ChangeEvent } from 'react';
import apiQueryEncuesta from '../api/apiQueryEncuesta';

export default function useEncuesta() {

    const { modals, toggleModal } = useModals();

    const { data, isLoading, isCreating, isUpdating, createEncuestaMutation, actualizarEncuestaMutation, eliminarEncuestaMutation } = apiQueryEncuesta();

    const [encuesta, setEncuesta] = useState<IEncuesta>(getEncuestaEmpty());

    /*=========== Recargar ==============================*/

    function getEncuestaEmpty(): IEncuesta {
        return {
            Titulo: '',
            Descripcion: '',
            Estado: 1
        }
    }

    const recargar = (): void => {
        setEncuesta(getEncuestaEmpty());
    }

    const abrirModal = (): void => {
        toggleModal("crearEditar");
        recargar();
    };

    /*=========== Crear ==============================*/

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setEncuesta({ ...encuesta, [target.name]: target.value });
    }

    const handleSubmit = (): void => {
        createEncuestaMutation(encuesta, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    abrirModal();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al crearEditar la encuesta: ${error.message}`); },
        })

    }

    /*=========== Actualizar ==============================*/

    const cargarEncuesta = (encuesta: IEncuesta): void => {
        setEncuesta(encuesta);
        toggleModal("crearEditar");
    }

    const handleUpdate = (): void => {
        actualizarEncuestaMutation(encuesta, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    abrirModal();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al actualizar la encuesta: ${error.message}`); },
        });
    }

    /*=========== Eliminar ==============================*/

    const handleDelete = async (id: number): Promise<void> => {
        if (await alertConfirm('¿Seguro que quiere eliminar esta encuesta?', 'Si, eliminar!'))
            eliminarEncuestaMutation(id, {
                onSuccess: () => alertSucces("Eliminado correctamente"),
                onError: (error) => alertError(`Error al eliminar la encuesta: ${error.message}`),
            });
    }

    return {
        titulo: "Encuestas",
        subtitulo: "Listado de encuestas disponibles",
        tituloModal: encuesta.id ? "Editar encuesta" : "Crear encuesta",
        encuesta,
        encuestas: data,
        isLoading,
        loading: isCreating || isUpdating,
        modals,
        toggleModal: abrirModal,
        handleChange,
        handler: encuesta.id ? handleUpdate : handleSubmit,
        cargarEncuesta,
        handleDelete
    }
}