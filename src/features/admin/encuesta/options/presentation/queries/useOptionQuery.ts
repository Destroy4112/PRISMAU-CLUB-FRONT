import { useAppQuery } from '@core/store/react-query/hooks'
import { optionUseCases } from '../../application/container/option.container'
import type { Option, OptionId } from '../../domain/model/option.model'
import { optionKeys } from './option.keys'

export function useOptionQuery(id: OptionId) {
    return useAppQuery<Option[], Error>({
        queryKey: optionKeys.detail(id),
        queryFn: () => optionUseCases.getAll(id),
    })
}
