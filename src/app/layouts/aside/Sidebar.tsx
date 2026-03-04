import { useAppSelector } from '@core/store/redux/hooks';
import { memo } from 'react';
import type { SidebarProps } from '../types/plantilla';
import InfoRol from './InfoRol';
import InfoUser from './InfoUser';
import LinkAside from './LinkAside';
import LinkInicio from './LinkInicio';
import { getMenuItemsByproyecto } from './sidebar-items';

const Sidebar = memo(function Sidebar({ usuario }: SidebarProps) {

    const rol = useAppSelector((state) => state.credenciales.Rol);
    const items = getMenuItemsByproyecto(rol!);

    return (
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0" aria-label="Sidebar">
            <div className="flex flex-col h-full">
                <InfoUser usuario={usuario} />
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white hide-scrollbar">
                    <ul className="font-medium pt-2">
                        <LinkInicio />
                        {items?.map((menu: any, index: number) =>
                            menu.isTitle ? (
                                <li key={`title-${index}`} className="text-gray-500 uppercase text-xs font-semibold my-4">
                                    {menu.texto}
                                </li>
                            ) : (
                                <LinkAside key={menu.texto} menu={menu} activeSubroutes={menu.activeSubroutes} />
                            )
                        )}
                    </ul>
                </div>
                <InfoRol rol={rol!} />
            </div>
        </aside>
    );
})

export default Sidebar;