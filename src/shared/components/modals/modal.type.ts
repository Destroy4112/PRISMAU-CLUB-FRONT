import type { ReactNode } from "react";

export type ModalProps = {
    titulo: string,
    size: string,
    children: ReactNode,
    show: boolean,
    loading: boolean,
    cerrarModal: () => void,
    handleSubmit: () => void,
}

export type ModalSencillaProps = {
    titulo: string,
    size: string,
    children: ReactNode,
    show: boolean,
    cerrarModal: () => void,
}