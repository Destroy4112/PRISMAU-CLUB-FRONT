import { useAppQuery } from '@core/store/react-query/hooks'
import { menuRolUseCases } from '../../application/container/menu.container'
import type { MenuRole } from '../../domain/model/menu-role.model'
import { menuRolKeys } from './menu-rol.keys'

export function useMenuRolQuery(id: number) {
   return useAppQuery<MenuRole[], Error>({
      queryKey: menuRolKeys.listByRol(id),
      queryFn: () => menuRolUseCases.getByRol(id),
   })
}
