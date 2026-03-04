import useModals from '@hooks/useModal';
import type { IEvento } from '@models/entities/Entity.model';
import { alertConfirm, alertError, alertSucces, alertWarning } from '@utils/alerts/alertas.utility';
import { normalizeText } from '@utils/convertidores/normalizeText';
import { useState, type ChangeEvent } from 'react';
import apiQueryEvento from '../api/apiQueryEvento';

export default function useEvento() {

    const { modals, toggleModal } = useModals();

    const { eventos, isLoading, isCreating, isUpdating, createEventoMutation, actualizarEventoMutation,
        eliminarEventoMutation } = apiQueryEvento();

    const [touched, setTouched] = useState<boolean>(false);
    const [busqueda, setBusqueda] = useState<string>("");
    const [evento, setEvento] = useState<IEvento>(getInitialEvento());

    /*=========== Recargar ==============================*/

    function getInitialEvento(): IEvento {
        return {
            Titulo: "",
            Descripcion: "",
            Tipo: "",
            Vencimiento: "",
            Fecha: "",
            Correo: false,
            Push: false,
            Destinatario: "",
            Hora: "",
        }
    }

    const recargar = (): void => {
        setEvento(getInitialEvento());
        setTouched(false);
    };

    const abrirModal = (): void => {
        recargar();
        toggleModal("crearEditar");
    };

    /*=========== Agregar ==============================*/

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        const { name, value } = target;
        setEvento({ ...evento, [name]: value });
    };

    const handleChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setEvento(prev => ({ ...prev, [name]: checked }));
    };


    const handleSubmit = (): void => {
        setTouched(true);
        createEventoMutation(evento, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    abrirModal();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al crear el evento: ${error.message}`); },
        });
    };

    /*=========== Buscar ==============================*/

    const handleChangeBusqueda = (value: string): void => {
        setBusqueda(value);
    }

    const filterEvento = (listado: IEvento[] | undefined, busqueda: string): IEvento[] | undefined => {
        if (!busqueda) return listado;

        const busquedaNormalizada = normalizeText(busqueda);
        const palabrasBusqueda = busquedaNormalizada.split(/\s+/);

        return listado?.filter((dato) => {
            const titulo = normalizeText(dato.Titulo);
            return palabrasBusqueda.every((palabra) => titulo.includes(palabra));
        });
    };

    const lista = filterEvento(eventos, busqueda);

    /*=========== Actualizar ==============================*/

    const cargar = (evento: IEvento): void => {
        setEvento(evento);
        toggleModal("crearEditar");
    };

    const handleUpdate = (): void => {
        setTouched(true);
        actualizarEventoMutation(evento, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    abrirModal();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al actualizar el evento: ${error.message}`); },
        });
    };

    /*=========== Eliminar ===================================*/

    const handleDelete = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar este evento?", "Si, eliminar!")) {
            eliminarEventoMutation(id, {
                onSuccess: (data) => alertSucces(data.message),
                onError: (error) => alertError(`Error al eliminar el evento: ${error.message}`),
            });
        }
    };

    return {
        titulo: "Eventos",
        subtitulo: "Gestión de eventos para notificar a los usuarios",
        tituloModal: evento.id ? "Editar Evento" : "Crear Evento",
        loading: isCreating || isUpdating,
        lista,
        modals,
        isLoading,
        touched,
        evento,
        busqueda,
        handleChange,
        handleChangeCheck,
        handleChangeBusqueda,
        handler: evento.id ? handleUpdate : handleSubmit,
        cargar,
        handleDelete,
        toggleModal: abrirModal
    }
}