import type { ModalsApi } from '@shared/hooks/useModal';
import { alertConfirm } from '@shared/utilities/alerts/alertas.utility';
import { useState, type ChangeEvent } from 'react';
import { empleadoImagenFormToInput } from '../mapper/empleado-form.mapper';
import { useDeleteImagenEmpleadoMutation } from '../mutations/useDeleteImagenEmpleadoMutation';
import { useUpdateImagenEmpleadoMutation } from '../mutations/useUpdateImagenEmpleadoMutation';
import { EMPLEADO_IMAGEN_INITIAL, type EmpleadoImagenForm, type EmpleadoModalKey } from '../types/empleado';

export default function useEmpleadoImagen(modalApi: ModalsApi<EmpleadoModalKey>) {

   const { toggleModal } = modalApi;

   const [empleadoImagenForm, setEmpleadoImagenForm] = useState<EmpleadoImagenForm>(EMPLEADO_IMAGEN_INITIAL);

   const resetForm = (): void => {
      setEmpleadoImagenForm(EMPLEADO_IMAGEN_INITIAL);
   };

   const closeModalImagen = (): void => {
      toggleModal("imagen");
      resetForm();
   };

   const { mutate: updateImagenMutation, isPending: isUpdatingImagen } = useUpdateImagenEmpleadoMutation({
      onOk: () => closeModalImagen(),
   });

   const { mutate: eliminarImagenMutation } = useDeleteImagenEmpleadoMutation({
      onOk: () => closeModalImagen(),
   });

   const cargarImagen = (id: number, imagen: string): void => {
      setEmpleadoImagenForm((prev) => ({ ...prev, id, imagen: null, imagenActualUrl: imagen }));
      toggleModal("imagen");
   };

   const handleChangeImagen = (e: ChangeEvent<HTMLInputElement>): void => {
      const file = e.target.files?.[0] ?? null;
      setEmpleadoImagenForm((prev) => ({ ...prev, imagen: file, }));
   };

   const handleUpdateImagen = (): void => {
      updateImagenMutation(empleadoImagenFormToInput(empleadoImagenForm));
   };


   const handleDeleteImagen = async (): Promise<void> => {
      if (await alertConfirm("¿Seguro que quiere eliminar la imagen de este empleado?", "Si, eliminar!")) {
         eliminarImagenMutation(empleadoImagenForm.id!);
      }
   }

   return {
      tituloModalImagen: "Cambiar imagen",
      empleadoImagenForm,
      isUpdatingImagen,
      closeModalImagen,
      cargarImagen,
      handleChangeImagen,
      handleUpdateImagen,
      handleDeleteImagen,
   }

}