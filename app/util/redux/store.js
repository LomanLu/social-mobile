import { configureStore } from "@reduxjs/toolkit";
import { meTestSlice } from "./MeTest/MetestSlice";

export const store = configureStore({
  reducer: {
    [meTestSlice.name]: meTestSlice.reducer
  },
  devTools: false,
});


function makeStore() {
  return store;
}
export default makeStore;
