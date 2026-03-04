import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICredenciales } from "@shared/constants/usuario/Usuario.model";
import { crearStorage, removerStorage, usarStorage } from "@shared/utilities/localstorage/localstorage.utility";

const key = "@credenciales";
const localStorage = usarStorage<ICredenciales>(key);

const credencialesEmpty: ICredenciales = { id: 0, Documento: "", Rol: 0 };

export const credencialesSlice = createSlice({
    name: "credenciales",
    initialState: localStorage ? localStorage : credencialesEmpty,
    reducers: {
        crearCredenciales: (state, action: PayloadAction<ICredenciales>) => {
            crearStorage<ICredenciales>(key, action.payload)
            Object.assign(state, action.payload);
        },
        resetCredenciales: () => {
            removerStorage(key);
            return credencialesEmpty;
        },
    },
});

export const { crearCredenciales, resetCredenciales } = credencialesSlice.actions;

export default credencialesSlice.reducer;