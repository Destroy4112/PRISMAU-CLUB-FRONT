export type Filter = {
    search: string
}

export type FilterWithState = Filter & {
    state: number | null
}

export const INITIAL_FILTERS: Filter = {
    search: "",
}

export const INITIAL_FILTERS_WITH_STATE: FilterWithState = {
    search: "",
    state: null,
}