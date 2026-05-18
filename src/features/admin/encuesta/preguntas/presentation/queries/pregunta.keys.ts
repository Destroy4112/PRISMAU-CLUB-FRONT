export const preguntaKeys = {
    all: () => ["pregunta"] as const,
    detail: (id: number) => [...preguntaKeys.all(), id],
}; 