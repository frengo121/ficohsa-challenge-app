import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
    itemDetails: null,
    error: {
      error: false,
      message: "",
    },
  },
  reducers: {
    setResults: (state, action) => {
      state.error.error = false;
      state.results = action.payload;
    },
    setItemDetails: (state, action) => {
      state.error.error = false;
      state.itemDetails = action.payload;
    },
    setError: (state, action) => {
      state.error.error = true;
      state.error.message = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { setResults, setItemDetails, setError } = searchSlice.actions;
