import { useAppSelector } from '@core/store/redux/hooks';
import useLogout from '@features/auth/login/presentation/hooks/useLogout';
import { initFlowbite } from 'flowbite';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Sidebar from './aside/Sidebar';
import ContainerContenido from './content/ContainerContenido';
import Navbar from './nav/Navbar';

function Plantilla() {

    const usuario = useAppSelector((state) => state.user);
    
    const { logout } = useLogout();

    useEffect(() => { initFlowbite(); }, []);

    return (
        <>
            <Navbar usuario={usuario} logout={logout} />
            <Sidebar usuario={usuario} />
            <ContainerContenido>
                <Outlet />
            </ContainerContenido>
        </>
    );
}

export default React.memo(Plantilla);