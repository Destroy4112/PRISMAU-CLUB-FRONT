import useModals from '@shared/hooks/useModal';
import { type MenuRolModalKey } from '../types/menuRol';
import { useMenuRolActions } from './useMenuRolActions';
import { useMenuRolForm } from './useMenuRolForm';
import { useMenuRolList } from './useMenuRolList';
import { useMenusSource } from './useMenusSource';
export default function useMenuRol() {

   const modalsApi = useModals<MenuRolModalKey>();

   const menusSource = useMenusSource();
   const list = useMenuRolList();
   const form = useMenuRolForm({ modalsApi, rol: list.rol });
   const actions = useMenuRolActions();

   return {
      titulo: "Roles",
      subtitulo: "Gestión de menús asignados a roles",
      tituloModal: "Asignar menu a rol",
      modals: modalsApi.modals,
      ...menusSource,
      ...list,
      ...form,
      ...actions,
   }
}