export const menuKeys = {
   all: ["menu"] as const,
   lists: () => [...menuKeys.all, "list"] as const,
}; 