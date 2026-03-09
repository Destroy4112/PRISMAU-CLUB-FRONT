import { useAppSelector } from '@core/store/redux/hooks';
import useLogout from '@features/auth/login/presentation/hooks/useLogout';
import { selectCurrentUser } from '@features/auth/login/presentation/store/auth.selectors';
import { initFlowbite } from 'flowbite';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Sidebar from './aside/Sidebar';
import ContainerContenido from './content/ContainerContenido';
import Navbar from './nav/Navbar';

function Plantilla() {

    const usuario = useAppSelector(selectCurrentUser);

    const { logout } = useLogout();

    const [collapsed, setCollapsed] = useState<boolean>(false);

    useEffect(() => { initFlowbite(); }, []);

    return (
        <>
            <Navbar usuario={usuario} logout={logout} />
            <Sidebar usuario={usuario} collapsed={collapsed} setCollapsed={setCollapsed} />
            <ContainerContenido collapsed={collapsed}>
                <Outlet />
            </ContainerContenido>
        </>
    );
}

export default React.memo(Plantilla);