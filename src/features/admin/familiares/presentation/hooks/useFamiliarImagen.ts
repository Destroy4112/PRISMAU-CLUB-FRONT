import type { ModalsApi } from '@shared/hooks/useModal';
import { alertConfirm } from '@shared/utilities/alerts/alertas.utility';
import { useState, type ChangeEvent } from 'react';
import { familiarImagenFormToPayload } from '../mapper/familiar-form.mapper';
import { useDeleteImagenFamiliarMutation } from '../mutations/useDeleteImagenFamiliarMutation';
import { useUpdateImagenFamiliarMutation } from '../mutations/useUpdateImagenFamiliarMutation';
import { FAMILIAR_IMAGEN_FORM_INITIAL, type FamiliarImagenForm, type FamiliarModalKey } from '../types/familiar';

export default function useFamiliarImagen(modalApi: ModalsApi<FamiliarModalKey>) {

    const { toggleModal } = modalApi;

    const [familiarImagenForm, setFamiliarImagenForm] = useState<FamiliarImagenForm>(FAMILIAR_IMAGEN_FORM_INITIAL);

    const resetForm = (): void => {
        setFamiliarImagenForm(FAMILIAR_IMAGEN_FORM_INITIAL);
    };

    const closeModalImagen = (): void => {
        toggleModal("imagen");
        resetForm();
    };

    const { mutate: updateImagenMutation, isPending: isUpdatingImagen } = useUpdateImagenFamiliarMutation({
        onOk: () => closeModalImagen(),
    });

    const { mutate: eliminarImagenMutation } = useDeleteImagenFamiliarMutation({
        onOk: () => closeModalImagen(),
    });

    const cargarImagen = (id: number, imagen: string): void => {
        setFamiliarImagenForm((prev) => ({ ...prev, id, imagenActualUrl: imagen }));
        toggleModal("imagen");
    };

    const handleChangeImagen = (e: ChangeEvent<HTMLInputElement>): void => {
        const files = e.target.files;
        if (!files || files.length === 0) return;
        const file = files[0];
        setFamiliarImagenForm({ ...familiarImagenForm, imagen: file });
    };

    const handleUpdateImagen = (): void => {
        updateImagenMutation(familiarImagenFormToPayload(familiarImagenForm));
    };

    const handleDeleteImagen = async (): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar la imagen de este familiar?", "Si, eliminar!")) {
            eliminarImagenMutation(familiarImagenForm.id!);
        }
    }

    return {
        tituloModalImagen: "Cambiar imagen",
        familiarImagenForm,
        isUpdatingImagen,
        closeModalImagen,
        cargarImagen,
        handleChangeImagen,
        handleUpdateImagen,
        handleDeleteImagen,
    }

}