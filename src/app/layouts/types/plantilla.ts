import type { Usuario } from "@shared/constants/usuario/Usuario.model"
import type { ReactNode } from "react"

export type NavBarProps = {
    usuario: Usuario,
    logout: () => void
}

export type SidebarProps = {
    usuario: Usuario,
}

export type SidebarInfoUserProps = {
    usuario: Usuario,
}

export type SidebarLinksProps = {
    menu: {
        link: string,
        icono: ReactNode,
        color: string,
        texto: string,
        isTitle?: boolean,
        activeSubroutes?: string[]
    },
    activeSubroutes: [string]
}

export type SidebarInfoRolProps = {
    rol: number
}