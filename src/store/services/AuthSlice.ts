import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { authConnection } from "./AuthCreator";

interface UserState {
  user: any;
  isLoading: boolean;
  isError: string | null;
}
const initialState: UserState = {
  user: {},
  isLoading: false,
  isError: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut(state) {
      state.user = "";
    },
  },
  extraReducers: {
    [authConnection.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isError = "";
    },
    [authConnection.pending.type]: (state) => {
      state.isLoading = true;
    },
    [authConnection.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const { logOut } = authSlice.actions;
export default authSlice;
