export const respuestaEncuestaKeys = {
    all: () => ["respuesta-encuesta"] as const,
    detail: (id: number) => [...respuestaEncuestaKeys.all(), id],
}; 