import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Actions asynchrones pour les appels API, pour la connexion
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
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
        localStorage.setItem("token", data.body.token); // Stockage du token dans le localStorage
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
  async ({ firstName, lastName }, { getState, rejectWithValue }) => {
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
          body: JSON.stringify({ firstName, lastName }), // Corps de la requête; nouvelles données
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
  name: "auth", // Nom du slice
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
    },
    clearError: (state) => {
      state.error = null;
    },
  },

  // Reducers pour les actions asynchrones
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Get Profile cases
      .addCase(getUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userData = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // mise a jour du profil
      .addCase(updateUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userData = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
