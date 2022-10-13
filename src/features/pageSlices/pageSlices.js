import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  steps: [
    "Personal Data",
    "Riwayat Pendidikan",
    "Pengalaman Kerja",
    "Keahlian",
  ],
  currStep: 1,
  completed: false,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.currStep < state.steps.length) {
        state.currStep += 1;
      }
    },
    decrement: (state) => {
      if (state.currStep > 1) {
        state.currStep -= 1;
      }
    },
    setCompleted: (state, action) => {
      state.completed = action.payload;
    },
  },
});

export const { increment, decrement, setCompleted } = pageSlice.actions;

export default pageSlice.reducer;
