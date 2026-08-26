import { useMenuQuery } from "../queries/useMenuQuery";

export function useMenusSource() {

   const { data: menus, isLoading: isLoadingMenus } = useMenuQuery();

   return {
      menus,
      isLoadingMenus,
   };
}