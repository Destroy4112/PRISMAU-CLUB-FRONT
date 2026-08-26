export const familiarKeys = {
   all: ["familiar"] as const,
   lists: () => [...familiarKeys.all, "list"] as const,
   list: (id: number, rol: string) => [...familiarKeys.lists(), id, rol]
};