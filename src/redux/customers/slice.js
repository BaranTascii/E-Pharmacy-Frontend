import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
});

export default customersSlice.reducer;
