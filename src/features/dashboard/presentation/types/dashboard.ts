import type { ReactNode } from "react";

export type CardsDashboardProps = {
    cards: DashboardCard[];
    loading: boolean
}

export type DashboardCard = {
    texto: string;
    cantidad: number | undefined;
    color: string;
    icono: ReactNode;
};   