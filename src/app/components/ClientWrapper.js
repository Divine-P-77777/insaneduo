"use client";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "../store/store"; // Corrected Import
import Navbar from "./Navbar";
import SmoothScroll from "./SmoothScroll";


export default function ClientWrapper({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* App Components */}
        <Navbar />
        <SmoothScroll />

        {children}


      </PersistGate>
    </Provider>
  );
}
