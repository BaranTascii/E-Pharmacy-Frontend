import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const suppliersSlice = createSlice({
  name: "suppliers",
  initialState,
  reducers: {},
});

export default suppliersSlice.reducer;
