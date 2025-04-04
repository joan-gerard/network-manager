import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useRef } from "react";


export const store = configureStore({
  reducer: {},
});