import type { SessionUser } from "@features/auth/login/domain/auth-session.model"
import type { ReactNode } from "react"

export type NavBarProps = {
    usuario: SessionUser | null,
    logout: () => void
}

export type SidebarProps = {
    usuario: SessionUser | null,
}

export type SidebarInfoUserProps = {
    usuario: SessionUser | null,
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