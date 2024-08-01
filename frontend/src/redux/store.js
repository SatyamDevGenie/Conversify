import { configureStore } from "@reduxjs/toolkit";

import messageReducer from "./messageSlice.js";
import userReducer from "./userSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
  },
});

export default store;
