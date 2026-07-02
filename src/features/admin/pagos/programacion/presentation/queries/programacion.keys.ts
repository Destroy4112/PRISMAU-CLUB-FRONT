export const programacionKeys = {
    all: ["programacion"] as const,
    rubros: () => [...programacionKeys.all, "rubros"] as const,
};
