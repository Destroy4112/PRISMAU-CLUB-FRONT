export const optionKeys = {
    all: () => ["option"] as const,
    detail: (id: number) => [...optionKeys.all(), id],
}; 