import { memo, type PropsWithChildren } from "react";

function ContainerContenido({ children }: PropsWithChildren) {

    return (
        <div className="p-4 sm:ml-64 mt-14">
            {children}
        </div>
    );
}

export default memo(ContainerContenido);