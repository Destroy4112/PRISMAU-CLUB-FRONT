import type { ChangeEvent } from "react"
import type { Evento } from "../../domain/model/evento.model"

export type EventoModalKey = "crearEditar"

export type EventoForm = {
    titulo: string,
    descripcion: string,
    vencimiento: string,
    destinatario: string,
    hora: string,
    tipo: string,
    correo: boolean,
    push: boolean,
    fecha: string
}

export const INITIAL_EVENTO_FORM: EventoForm = {
    titulo: "",
    descripcion: "",
    vencimiento: "",
    destinatario: "",
    hora: "",
    tipo: "",
    correo: false,
    push: false,
    fecha: ""
}

export type FormEventoProps = {
    form: EventoForm,
    touched: boolean,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
    handleChangeCheck: (e: ChangeEvent<HTMLInputElement>) => void
}

export type ColumnEventoProps = {
    cargar: (evento: Evento) => void,
    handleDelete: (id: number) => void
}