import type { ModalsApi } from '@shared/hooks/useModal';
import { alertConfirm } from '@shared/utilities/alerts/alertas.utility';
import { useState, type ChangeEvent } from 'react';
import { asociadoImagenFormToInput } from '../mapper/asociado-form.mapper';
import { useDeleteImagenAsociadoMutation } from '../mutations/useDeleteImagenAsociadoMutation';
import { useUpdateImagenAsociadoMutation } from '../mutations/useUpdateImagenAsociadoMutation';
import { ASOCIADO_IMAGEN_INITIAL, type AsociadoImagenForm, type AsociadoModalKey } from '../types/asociado';

export default function useAsociadoImagen(modalApi: ModalsApi<AsociadoModalKey>) {

    const { toggleModal } = modalApi;

    const [asociadoImagenForm, setAsociadoImagenForm] = useState<AsociadoImagenForm>(ASOCIADO_IMAGEN_INITIAL);

    const resetForm = (): void => {
        setAsociadoImagenForm(ASOCIADO_IMAGEN_INITIAL);
    };

    const closeModalImagen = (): void => {
        toggleModal("imagen");
        resetForm();
    };

    const { mutate: updateImagenMutation, isPending: isUpdatingImagen } = useUpdateImagenAsociadoMutation({
        onOk: () => closeModalImagen(),
    });

    const { mutate: eliminarImagenMutation } = useDeleteImagenAsociadoMutation({
        onOk: () => closeModalImagen(),
    });

    const cargarImagen = (id: number, imagen: string): void => {
        setAsociadoImagenForm((prev) => ({ ...prev, id, imagenActualUrl: imagen }));
        toggleModal("imagen");
    };

    const handleChangeImagen = (e: ChangeEvent<HTMLInputElement>): void => {
        const files = e.target.files;
        if (!files || files.length === 0) return;
        const file = files[0];
        setAsociadoImagenForm({ ...asociadoImagenForm, imagen: file });
    };

    const handleUpdateImagen = (): void => {
        updateImagenMutation(asociadoImagenFormToInput(asociadoImagenForm));
    };


    const handleDeleteImagen = async (): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar la imagen de este asociado?", "Si, eliminar!")) {
            eliminarImagenMutation(asociadoImagenForm.id!);
        }
    }

    return {
        tituloModalImagen: "Cambiar imagen",
        asociadoImagenForm,
        isUpdatingImagen,
        closeModalImagen,
        cargarImagen,
        handleChangeImagen,
        handleUpdateImagen,
        handleDeleteImagen,
    }

}