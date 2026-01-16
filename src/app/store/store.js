import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { combineReducers } from "redux";
import themeReducer from "./themeSlice";

// Persist config for theme
const themePersistConfig = {
  key: "theme",
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  theme: persistReducer(themePersistConfig, themeReducer),
});

// Create store with middleware configuration
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// Persistor
const persistor = persistStore(store);

// Export both as named exports
export { store, persistor };
