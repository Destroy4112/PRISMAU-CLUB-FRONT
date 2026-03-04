import type { ReactNode } from "react"

export type ContentProps = {
    children: ReactNode
}

export type tituloPageProps = {
    icono?: ReactNode,
    color?: string,
    titulo: string,
    subtitulo?: string
}

export type NoDataProps = {
    mensaje: string
}