import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [] // initial data
};

// data slice for manage job list
const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setData: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

// export slice methods
export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
