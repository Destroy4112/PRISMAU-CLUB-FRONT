import { useMenuQuery } from "../queries/useMenuQuery";

export function useMenuList() {
    
    const { data: menus, isLoading } = useMenuQuery();

    return {
        menus,
        isLoading,
    };
}