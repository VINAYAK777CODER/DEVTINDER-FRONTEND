import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: [],
  reducers: {
    addRequests: (state, action) => action.payload || [],  // always array
    removeRequests: () => [],   // reset safely
  }
});

export const { addRequests, removeRequests } = requestSlice.actions;
export default requestSlice.reducer;
