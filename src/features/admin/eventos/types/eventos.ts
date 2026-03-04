import type { IEvento } from "@models/entities/Entity.model"
import type { ChangeEvent } from "react"

export type FormEventoProps = {
    evento: IEvento,
    touched: boolean,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
    handleChangeCheck: (e: ChangeEvent<HTMLInputElement>) => void
}

export type ColumnEventoProps = {
    cargar: (evento: IEvento) => void,
    handleDelete: (id: number) => void
}