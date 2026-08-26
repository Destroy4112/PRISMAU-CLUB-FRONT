export type Filter = {
   search: string;
};

export type FilterState = number | string | boolean | null;

export type FilterWithState<TState extends FilterState = number | string | boolean | null> = Filter & {
   state: TState;
};

export const INITIAL_FILTERS: Filter = {
   search: "",
};

export const INITIAL_FILTERS_WITH_STATE: FilterWithState = {
   search: "",
   state: null,
};