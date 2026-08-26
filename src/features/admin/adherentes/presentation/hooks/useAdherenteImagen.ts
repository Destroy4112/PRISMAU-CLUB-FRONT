import type { ModalsApi } from '@shared/hooks/useModal';
import { alertConfirm } from '@shared/utilities/alerts/alertas.utility';
import { useState, type ChangeEvent } from 'react';
import { adherenteImagenFormToInput } from '../mapper/adherente-form.mapper';
import { useDeleteImagenAdherenteMutation } from '../mutations/useDeleteImagenAdherenteMutation';
import { useUpdateImagenAdherenteMutation } from '../mutations/useUpdateImagenAdherenteMutation';
import { ADHERENTE_IMAGEN_INITIAL, type AdherenteImagenForm, type AdherenteModalKey } from '../types/adherente';

export default function useAdherenteImagen(modalApi: ModalsApi<AdherenteModalKey>) {

   const { toggleModal } = modalApi;

   const [adherenteImagenForm, setAdherenteImagenForm] = useState<AdherenteImagenForm>(ADHERENTE_IMAGEN_INITIAL);

   const resetForm = (): void => {
      setAdherenteImagenForm(ADHERENTE_IMAGEN_INITIAL);
   };

   const closeModalImagen = (): void => {
      toggleModal("imagen");
      resetForm();
   };

   const { mutate: updateImagenMutation, isPending: isUpdatingImagen } = useUpdateImagenAdherenteMutation({
      onOk: () => closeModalImagen(),
   });

   const { mutate: eliminarImagenMutation } = useDeleteImagenAdherenteMutation({
      onOk: () => closeModalImagen(),
   });

   const cargarImagen = (id: number, imagen: string): void => {
      setAdherenteImagenForm((prev) => ({ ...prev, id, imagen: null, imagenActualUrl: imagen }));
      toggleModal("imagen");
   };

   const handleChangeImagen = (e: ChangeEvent<HTMLInputElement>): void => {
      const file = e.target.files?.[0] ?? null;
      setAdherenteImagenForm((prev) => ({ ...prev, imagen: file, }));
   };

   const handleUpdateImagen = (): void => {
      updateImagenMutation(adherenteImagenFormToInput(adherenteImagenForm));
   };


   const handleDeleteImagen = async (): Promise<void> => {
      if (await alertConfirm("¿Seguro que quiere eliminar la imagen de este adherente?", "Si, eliminar!")) {
         eliminarImagenMutation(adherenteImagenForm.id!);
      }
   }

   return {
      tituloModalImagen: "Cambiar imagen",
      adherenteImagenForm,
      isUpdatingImagen,
      closeModalImagen,
      cargarImagen,
      handleChangeImagen,
      handleUpdateImagen,
      handleDeleteImagen,
   }

}