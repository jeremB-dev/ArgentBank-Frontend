// Le store est le conteneur central de l'état de l'application
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer, // On enregistre le reducer d'authentification, 'auth' sera la clé pour accéder à l'état d'authentification
  },
});

export default store;
