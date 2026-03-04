import useModals from "@hooks/useModal";
import type { IPregunta, IRespuesta } from "@models/entities/Entity.model";
import { alertConfirm, alertError, alertSucces, alertWarning } from "@utils/alerts/alertas.utility";
import { useState, type ChangeEvent } from "react";
import apiQueryPregunta from "../api/apiQueryPregunta";

export default function usePregunta(id: number) {

    const { modals, toggleModal } = useModals();
    const { preguntas, isCreating, isLoading, isUpdating, createPreguntaMutation, actualizarPreguntaMutation,
        eliminarPreguntaMutation } = apiQueryPregunta(id);

    const [pregunta, setPregunta] = useState<IPregunta>(getPreguntaEmpty());

    /*=========== Recargar ==============================*/

    function getPreguntaEmpty(): IPregunta {
        return {
            encuesta_id: id,
            Pregunta: ''
        }
    }

    const recargar = (): void => {
        setPregunta(getPreguntaEmpty());
    }

    const abrirModal = (): void => {
        recargar();
        toggleModal("crear");
    };

    /*=========== Crear ==============================*/

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        setPregunta({ ...pregunta, [target.name]: target.value });
    }

    const handleSubmit = (): void => {
        createPreguntaMutation(pregunta, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    abrirModal();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            }, onError: (error) => { alertError(`Error al crear la pregunta: ${error.message}`); }
        });
    }

    /*=========== Actualizar ==============================*/

    const cargarPregunta = (item: IPregunta | IRespuesta): void => {
        if ('encuesta_id' in item) setPregunta(item);
        toggleModal("crear");
    }

    const handleUpdate = (): void => {
        actualizarPreguntaMutation(pregunta, {
            onSuccess: (data) => {
                if (data.status) {
                    toggleModal("crear");
                    alertSucces(data.message);
                    recargar();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            }, onError: (error) => { alertError(`Error al actualizar la pregunta: ${error.message}`); }
        })
    }

    /*=========== Eliminar ==============================*/

    const handleDelete = async (id: number) => {
        if (await alertConfirm("¿Estás seguro de que deseas eliminar esta pregunta?", "Sí, eliminar!")) {
            eliminarPreguntaMutation(id, {
                onSuccess: () => alertSucces("Eliminado correctamente"),
                onError: (error) => alertError(`Error al eliminar la pregunta: ${error.message}`),
            });
        }
    }

    return {
        titulo: 'Preguntas',
        subtitulo: 'Listado de preguntas de la encuesta',
        tituloModal: pregunta.id ? 'Editar pregunta' : 'Crear pregunta',
        preguntas,
        modals,
        pregunta,
        loading: isCreating || isUpdating,
        isLoading,
        toggleModal: abrirModal,
        handleChange,
        handler: pregunta.id ? handleUpdate : handleSubmit,
        cargarPregunta,
        handleDelete
    }
}