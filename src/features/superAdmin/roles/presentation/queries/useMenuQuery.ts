import { useAppQuery } from '@core/store/react-query/hooks';
import { menuUseCases } from '@features/superAdmin/menus/application/menu.container';
import { menuRolKeys } from './menu-rol.keys';

export function useMenuQuery() {

    const usecase = () => menuUseCases.getAll();
    type MenusForRole = Awaited<ReturnType<typeof usecase>>;

    return useAppQuery<MenusForRole, Error>({
        queryKey: menuRolKeys.list(),
        queryFn: () => menuUseCases.getAll(),
    })
}
