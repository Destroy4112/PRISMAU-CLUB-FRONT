import { useAppQuery } from '@core/store/react-query/hooks'
import { menuUseCases } from '../../application/menu.container'
import type { Menu } from '../../domain/model/menu.model'
import { menuKeys } from './menu.keys'

export function useMenuQuery() {
    return useAppQuery<Menu[], Error>({
        queryKey: menuKeys.list(),
        queryFn: () => menuUseCases.getAll(),
    })
}
