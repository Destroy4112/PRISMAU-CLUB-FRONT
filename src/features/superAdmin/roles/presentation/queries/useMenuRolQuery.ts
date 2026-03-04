import { useAppQuery } from '@core/store/react-query/hooks'
import { menuRolUseCases } from '../../application/menu.container'
import type { MenuRole } from '../../domain/menu-rol.model'
import { menuRolKeys } from './menu-rol.keys'

export function useMenuRolQuery(id: number) {
    return useAppQuery<MenuRole[], Error>({
        queryKey: menuRolKeys.listByRol(id),
        queryFn: () => menuRolUseCases.getByRol(id),
    })
}
