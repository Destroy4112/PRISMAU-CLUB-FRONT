import { memo } from "react";
import type { ContainerProps } from "../types/plantilla";

function ContainerContenido({ children, collapsed }: ContainerProps) {

    return (
        <main className={`pt-20 px-4 transition-all duration-300 sm:ml-64 ${collapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
            {children}
        </main>
    );
}

export default memo(ContainerContenido);