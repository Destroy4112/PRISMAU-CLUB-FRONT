import type { ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import type { CuotaBaile } from "../../domain/models/cuotaBaile.model";
import type { PagoCuotaBaileResponse } from "../../domain/models/cuotaBaile.response.model";
import { cuotaBaileDomainToForm, payCuotaBaileFormToInput } from "../mapper/cuotaBaile-form.mapper";
import { usePayCuotaBaileMutation } from "../mutations/usePayCuotaBaileMutation";
import { INITIAL_PAY_CUOTAS_FORM, type CuotaBaileModalKey, type PayCuotaBaileForm } from "../types/cuotaBaile";

export default function useCuotaBaileForm(modalApi: ModalsApi<CuotaBaileModalKey>) {

   const { toggleModal } = modalApi;

   const [payCuotaBaileForm, setPayCuotaBaileForm] = useState<PayCuotaBaileForm>(INITIAL_PAY_CUOTAS_FORM);
   const [pagoInfo, setPagoInfo] = useState<PagoCuotaBaileResponse | null>(null);
   const [archivoSeleccionado, setArchivoSeleccionado] = useState<File | null>(null)

   const cargar = (row: CuotaBaile): void => {
      setPayCuotaBaileForm(cuotaBaileDomainToForm(row));
      toggleModal("pagar");
   };

   const ver = (row: CuotaBaile): void => {
      setPayCuotaBaileForm(cuotaBaileDomainToForm(row));
      toggleModal("ver");
   };

   const closeModal = (): void => {
      toggleModal("pagar");
      setPayCuotaBaileForm(INITIAL_PAY_CUOTAS_FORM);
   };

   const closeModalFactura = (): void => {
      toggleModal("ver");
      setPayCuotaBaileForm(INITIAL_PAY_CUOTAS_FORM);
   };

   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
      const { name, value } = e.target;
      const fieldValue = e.target instanceof HTMLInputElement && e.target.type === "checkbox" ? e.target.checked : value;
      setPayCuotaBaileForm(prev => ({ ...prev, [name]: fieldValue, }));
   };

   const handleChangeFile = (e: ChangeEvent<HTMLInputElement>): void => {
      const file = e.target.files?.[0] ?? null;
      if (file == null) return;
      setPayCuotaBaileForm((prev) => ({ ...prev, soporte: file }));
      setArchivoSeleccionado(file)
   };

   const { mutate: payMutation, isPending: loading } = usePayCuotaBaileMutation({
      onOk: (data) => {
         if (data.status) {
            closeModal();
            setPagoInfo(data.data);
            toggleModal("pago");
         }
      },
   });

   const handleSubmit = (): void => {
      payMutation(payCuotaBaileFormToInput(payCuotaBaileForm));
   };

   const closeModalPago = (): void => {
      toggleModal("pago");
      setPagoInfo(null);
   };

   const limpiarArchivo = () => {
      setArchivoSeleccionado(null);
      setPayCuotaBaileForm((prev) => ({ ...prev, soporte: null }));
   }

   return {
      tituloModal: "Pagar Cuota de Baile",
      payCuotaBaileForm,
      loading,
      pagoInfo,
      archivoSeleccionado,
      limpiarArchivo,
      ver,
      cargar,
      closeModal,
      closeModalFactura,
      closeModalPago,
      handleChange,
      handleChangeFile,
      handleSubmit
   };
}