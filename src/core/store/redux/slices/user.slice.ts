import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Usuario } from "@shared/constants/usuario/Usuario.model";
import { crearStorage, removerStorage, usarStorage } from "@shared/utilities/localstorage/localstorage.utility";

const key = "@usuario";
const localStorage = usarStorage<Usuario>(key);

const userEmpty: Usuario = {} as Usuario;

export const userSlice = createSlice({
    name: "user",
    initialState: localStorage ?? userEmpty,
    reducers: {
        crearUser: (state, action: PayloadAction<Usuario>) => {
            crearStorage<Usuario>(key, action.payload);
            Object.assign(state, action.payload);
        },
        resetUser: () => {
            removerStorage(key);
            return userEmpty
        },
    },
});

export const { crearUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
