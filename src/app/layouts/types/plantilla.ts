import type { SessionUser } from "@features/auth/domain/models/session.model";
import type { Dispatch, ReactNode } from "react";

export type NavBarProps = {
    usuario: SessionUser | null,
    logout: () => void
}

export type SidebarProps = {
    usuario: SessionUser | null,
    collapsed: boolean
    setCollapsed: Dispatch<React.SetStateAction<boolean>>;
};

export type SidebarInfoUserProps = {
    usuario: SessionUser | null,
    collapsed: boolean
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
    activeSubroutes: [string],
    collapsed: boolean
}

export type SidebarLinkInicioProps = {
    collapsed: boolean
}

export type SidebarInfoRolProps = {
    rol: number
    collapsed: boolean
}

export type ContainerProps = {
    children: ReactNode,
    collapsed: boolean
}