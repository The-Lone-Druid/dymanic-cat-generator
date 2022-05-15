import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";
import { RootState } from "../store";

export interface CatsState {
  data: {
    id: string;
    created_at: string;
    tags: [];
    url: string;
  } | null;
}

export interface Actions {
  payload: any;
  type: string;
}

const initialState: CatsState = {
  data: null,
};

export const catsSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    setCat: (state: CatsState, actions: Actions) => {
      state.data = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCat } = catsSlice.actions;
export const getCatFromStore = (state: RootState) => state.cat.data;

export default catsSlice.reducer;
