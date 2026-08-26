import { TIPOS_EMPLEADOS } from "@shared/constants/options/Options.model";
import { type ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import type { Empleado } from "../../domain/model/empleado.model";
import { empleadoDomainToForm, empleadoFormToCreateInput, empleadoFormToUpdateInput } from "../mapper/empleado-form.mapper";
import { useCreateEmpleadoMutation } from "../mutations/useCreateEmpleadoMutation";
import { useUpdateEmpleadoMutation } from "../mutations/useUpdateEmpleadoMutation";
import { EMPLEADO_FORM_INITIAL, type EmpleadoForm, type EmpleadoModalKey } from "../types/empleado";

export function useEmpleadoForm(modalApi: ModalsApi<EmpleadoModalKey>) {

   const { toggleModal } = modalApi;

   const [empleadoForm, setEmpleadoForm] = useState<EmpleadoForm>(EMPLEADO_FORM_INITIAL);
   const [touched, setTouched] = useState<boolean>(false);
   const [editId, setEditId] = useState<number | null>(null);
   const isEditing = editId != null;

   const resetForm = (): void => {
      setTouched(false);
      setEmpleadoForm(EMPLEADO_FORM_INITIAL);
      setEditId(null);
   };

   const openModal = (): void => {
      resetForm();
      toggleModal("crearEditar");
   };

   const closeModal = (): void => {
      toggleModal("crearEditar");
      resetForm();
   };

   const { mutate: createEmpleadoMutation, isPending: isCreating } = useCreateEmpleadoMutation({
      onOk: () => closeModal(),
   });

   const { mutate: updateEmpleadoMutation, isPending: isUpdating } = useUpdateEmpleadoMutation({
      onOk: () => closeModal(),
   });

   const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
      const { name, value } = target;
      setEmpleadoForm((prev) => {
         if (name !== "rol") return { ...prev, [name]: value, };
         const rol = Number(value);
         const tipoEmpleado = TIPOS_EMPLEADOS.find((tipo) => tipo.value === rol);
         const requiereCargoPersonalizado = rol === 4 || rol === 7;
         return { ...prev, rol, cargo: requiereCargoPersonalizado ? "" : tipoEmpleado?.label ?? "", };
      });
   };

   const cargar = (row: Empleado): void => {
      setEditId(row.id!);
      setEmpleadoForm(empleadoDomainToForm(row));
      toggleModal("crearEditar");
   };

   const submit = (): void => {
      setTouched(true);
      if (isEditing && editId != null) {
         updateEmpleadoMutation(empleadoFormToUpdateInput(empleadoForm, editId));
         return;
      }
      createEmpleadoMutation(empleadoFormToCreateInput(empleadoForm));
   };

   return {
      empleadoForm,
      touched,
      loading: isCreating || isUpdating,
      tituloModal: isEditing ? "Editar Empleado" : "Crear Empleado",
      openModal,
      closeModal,
      cargar,
      handleChange,
      submit,
   };
}