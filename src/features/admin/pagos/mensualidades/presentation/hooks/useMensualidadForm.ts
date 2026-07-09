import type { ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import type { Mensualidad } from "../../domain/models/mensualidad.model";
import { mensualidadDomainToForm, payMensualidadFormToInput } from "../mapper/mensualidad-form.mapper";
import { usePayMensualidadMutation } from "../mutations/usePayMensualidadMutation";
import { INITIAL_PAY_MENSUALIDAD_FORM, type MensualidadModalKey, type PayMensualidadForm } from "../types/mensualidad";

export default function useMensualidadForm(modalApi: ModalsApi<MensualidadModalKey>) {

    const { toggleModal } = modalApi;

    const [payMensualidadForm, setPayMensualidadForm] = useState<PayMensualidadForm>(INITIAL_PAY_MENSUALIDAD_FORM);

    const cargar = (row: Mensualidad): void => {
        setPayMensualidadForm(mensualidadDomainToForm(row));
        toggleModal("pagar");
    };

    const ver = (row: Mensualidad): void => {
        setPayMensualidadForm(mensualidadDomainToForm(row));
        toggleModal("ver");
    };

    const closeModal = (): void => {
        toggleModal("pagar");
        setPayMensualidadForm(INITIAL_PAY_MENSUALIDAD_FORM);
    };
    
    const closeModalFactura = (): void => {
        toggleModal("ver");
        setPayMensualidadForm(INITIAL_PAY_MENSUALIDAD_FORM);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        const fieldValue = e.target instanceof HTMLInputElement && e.target.type === "checkbox" ? e.target.checked : value;
        setPayMensualidadForm(prev => ({ ...prev, [name]: fieldValue, }));
    };

    const handleChangeFile = (e: ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files?.[0] ?? null;
        if (file == null) return;
        setPayMensualidadForm((prev) => ({ ...prev, soporte: file }));
    };

    const { mutate: payMutation, isPending: loading } = usePayMensualidadMutation({
        onOk: () => closeModal(),
    });

    const handleSubmit = (): void => {
        payMutation(payMensualidadFormToInput(payMensualidadForm));
    };

    return {
        tituloModal: "Pagar Mensualidad",
        payMensualidadForm,
        loading,
        ver,
        cargar,
        closeModal,
        closeModalFactura,
        handleChange,
        handleChangeFile,
        handleSubmit
    };
}