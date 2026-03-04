export const crearStorage = <T>(itemName: string, data: T): void => {
  localStorage.setItem(itemName, JSON.stringify(data));
};

export const crearStorageString = (itemName: string, data: string): void => {
  localStorage.setItem(itemName, data);
}

export const removerStorage = (itemName: string): void => {
  localStorage.removeItem(itemName);
};

export const usarStorage = <T>(itemName: string): T | null => {
  const localstorageItem = localStorage.getItem(itemName);
  if (!localstorageItem) return null;
  try {
    return JSON.parse(localstorageItem) as T;
  } catch (e) {
    console.error(`Error al parsear ${itemName} desde localStorage`, e);
    return null;
  }
};

export const usarStorageString = (itemName: string): string | null => localStorage.getItem(itemName);
