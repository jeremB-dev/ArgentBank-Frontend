import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Actions asynchrones pour les appels API, pour la connexion
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    // Appel API pour la connexion
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Corps de la requête; // Envoi des identifiants
      });

      const data = await response.json();
      //console.log("Response data:", data); // Pour déboguer

      if (response.ok) {
        if (rememberMe) {
          localStorage.setItem("token", data.body.token); // Stocke le token localement
        } else {
          sessionStorage.setItem("token", data.body.token); // Stocke le token dans la session
        }
        return data.body;
      }
      return rejectWithValue(data.message);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Pour obtenir le profil de l'utilisateur
export const getUserProfile = createAsyncThunk(
  "auth/profile",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth; // Récupère le token du state
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Ajoute le token dans l'en-tête de la requête
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      // console.log("Profile data:", data); // Pour déboguer

      if (response.ok) {
        return data.body;
      }
      return rejectWithValue(data.message);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Pour mettre à jour le profil de l'utilisateur
export const updateUserProfile = createAsyncThunk(
  "auth/updateProfile",
  async ({ userName }, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      // Appel API pour mettre à jour le profil
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName }), // Corps de la requête; nouvelles données
        }
      );

      const data = await response.json();
      // console.log("Update profile data:", data); // Pour déboguer

      if (response.ok) {
        return data.body;
      }
      return rejectWithValue(data.message);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  // État initial
  initialState: {
    token: localStorage.getItem("token"), // Token stocké localement
    userData: null, // Données de l'utilisateur
    status: "idle", // État de la requête ; 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null, // Message d'erreur
  },

  // Reducers pour les actions synchrones
  reducers: {
    logout: (state) => {
      state.token = null;
      state.userData = null;
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("token");
      localStorage.removeItem("rememberedEmail");
    },

    clearError: (state) => {
      state.error = null;
    },
  },

  // Reducers pour les actions asynchrones
  extraReducers: (builder) => {
    builder

      // gestion des états de connexion
      // Cas où la requête de connexion est en cours
      .addCase(loginUser.pending, (state) => {
        state.status = "loading"; // Met à jour le statut pour indiquer le chargement
        state.error = null; // Réinitialise les erreurs précédentes
      })
      // Cas où la requête de connexion est réussie
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded"; // Met à jour le statut pour indiquer le succès
        state.token = action.payload.token; // Stocke le token JWT reçu du serveur
        state.error = null; // S'assure qu'il n'y a pas d'erreur affichée
      })
      // Cas où la requête de connexion echoue
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed"; // Met à jour le statut pour indiquer l'échec
        state.error = action.payload; // Stocke le message d'erreur reçu
      })

      // Gestion des états pour la récupération du profil utilisateur
      // Cas où la requête de récupération du profil est en cours
      .addCase(getUserProfile.pending, (state) => {
        state.status = "loading"; // Indique que les données sont en cours de chargement
      })
      // Cas où la requête de récupération du profil est réussie
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded"; // Indique que la requête est réussie
        state.userData = action.payload; // Stocke les données de l'utilisateur reçues
      })
      // Cas où la requête de récupération du profil echoue
      .addCase(getUserProfile.rejected, (state, action) => {
        state.status = "failed"; // Indique que la récupération a echoué
        state.error = action.payload; // Stocke le message d'erreur reçu
      })

      // Gestion des états pour la mise à jour du profil utilisateur
      // Cas où la requête de mise à jour du profil est en cours
      .addCase(updateUserProfile.pending, (state) => {
        state.status = "loading"; // Indique que la mise à jour est en cours
      })
      // Cas où la requête de mise à jour du profil est réussie
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded"; // Indique que la mise à jour est réussie
        state.userData = action.payload; // Met à jour les données utilisateur avec les nouvelles informations
      })
      // Cas où la requête de mise à jour du profil a échoué
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = "failed"; // Indique que la mise à jour a échoué
        state.error = action.payload; // Stocke le message d'erreur reçu
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
