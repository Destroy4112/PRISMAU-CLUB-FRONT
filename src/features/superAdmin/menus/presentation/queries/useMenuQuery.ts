import { useAppQuery } from '@core/store/react-query/hooks'
import { menuUseCases } from '../../application/container/menu.container'
import type { Menu } from '../../domain/model/menu.model'
import { menuKeys } from './menu.keys'

export function useMenuQuery() {
    return useAppQuery<Menu[], Error>({
        queryKey: menuKeys.lists(),
        queryFn: () => menuUseCases.getAll(),
    })
}
