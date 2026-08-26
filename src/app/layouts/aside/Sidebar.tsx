import { useAppSelector } from '@core/store/redux/hooks';
import { selectRol } from '@features/auth/shared/presentation/store/session/session.selectors';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { memo } from 'react';
import type { SidebarProps } from '../types/plantilla';
import InfoRol from './InfoRol';
import InfoUser from './InfoUser';
import LinkAside from './LinkAside';
import LinkInicio from './LinkInicio';
import { getMenuItemsByproyecto } from './sidebar-items';

const Sidebar = memo(function Sidebar({ usuario, collapsed, setCollapsed }: SidebarProps) {

   const rol = useAppSelector(selectRol);
   const items = getMenuItemsByproyecto(rol!);

   return (
      <aside id="logo-sidebar" aria-label="Sidebar" className={`fixed top-0 left-0 z-40 h-screen pt-16 transition-all duration-300 -translate-x-full sm:translate-x-0 bg-white border-r border-gray-200 w-64 ${collapsed ? 'lg:w-20' : 'lg:w-64'}`}>
         <div className="flex flex-col h-full relative">
            <button type="button" onClick={() => setCollapsed?.((prev) => !prev)}
               className="hidden lg:flex absolute -right-3 top-5 z-50 items-center justify-center w-6 h-6 rounded-full border border-gray-300 bg-white shadow hover:bg-gray-100"
               aria-label={collapsed ? 'Expandir sidebar' : 'Colapsar sidebar'}
               title={collapsed ? 'Expandir sidebar' : 'Colapsar sidebar'}
            >
               {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
            <InfoUser usuario={usuario} collapsed={collapsed} />
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white hide-scrollbar">
               <ul className="font-medium pt-2">
                  <LinkInicio collapsed={collapsed} />
                  {items?.map((menu: any, index: number) =>
                     menu.isTitle ? (
                        !collapsed && (
                           <li key={`title-${index}`} className="text-gray-500 uppercase text-xs font-semibold my-4">
                              {menu.texto}
                           </li>
                        )
                     ) : (
                        <LinkAside key={menu.texto} menu={menu} activeSubroutes={menu.activeSubroutes} collapsed={collapsed} />
                     )
                  )}
               </ul>
            </div>
            <InfoRol rol={rol!} collapsed={collapsed} />
         </div>
      </aside>
   );
})

export default Sidebar;