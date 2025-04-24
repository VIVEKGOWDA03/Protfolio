import { createSlice } from "@reduxjs/toolkit";

// Initialize the state from localStorage or default to false if not available
const initialState = {
  isOn: JSON.parse(localStorage.getItem("toggleState")) || false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleSwitch: (state) => {
      state.isOn = !state.isOn;
      // Save the updated state to localStorage whenever it changes
      localStorage.setItem("toggleState", JSON.stringify(state.isOn));
    },
  },
});

export const { toggleSwitch } = toggleSlice.actions;

export default toggleSlice.reducer;
