import { configureStore } from "@reduxjs/toolkit";

import messageReducer from "./messageSlice.js";
import socketReducer from "./socketSlice.js";
import userReducer from "./userSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
    socket: socketReducer,
  },
});

export default store;
