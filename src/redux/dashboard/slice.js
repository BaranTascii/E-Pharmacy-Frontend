import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statistics: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;
