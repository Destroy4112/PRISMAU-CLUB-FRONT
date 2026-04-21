import { colorStyles } from "@shared/utilities/convertidores/converters";
import type { ReactNode } from "react";

type InfoDataProps = {
    titulo: string;
    descripcion?: string;
    icon: ReactNode;
    color: "green" | "purple" | "pink" | "red" | "yellow";
};

const headerBackgroundStyles: Record<string, string> = {
    green: "from-green-50 via-white to-green-50",
    purple: "from-purple-50 via-white to-purple-50",
    pink: "from-pink-50 via-white to-pink-50",
    red: "from-red-50 via-white to-red-50",
    yellow: "from-yellow-50 via-white to-yellow-50",
};

export default function InfoData({ titulo, descripcion, icon, color }: InfoDataProps) {
    return (
        <div className="mb-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className={`bg-linear-to-r ${headerBackgroundStyles[color]} border-b border-slate-200 px-6 py-5`}>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start gap-4">
                        <div className={`${colorStyles[color]} flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl`}>
                            {icon}
                        </div>

                        <div className="min-w-0">
                            <h2 className="text-xl font-bold text-slate-800">{titulo}</h2>
                            {descripcion && (
                                <p className="mt-1 text-sm text-slate-500">
                                    {descripcion}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}