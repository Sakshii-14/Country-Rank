import filterreducer from "./filterSlice.js";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    filterslice: filterreducer,
  },
});
