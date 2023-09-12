import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../..";
import { IUser } from "../../models/IUser";

export const authConnection = createAsyncThunk(
  "authUser",
  async (_, thunkAPI) => {
    try {
      auth.languageCode = "it";
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      const result = await signInWithPopup(auth, provider);

      const user: IUser = {
        id: result.user.uid,
        name: result.user.displayName ?? "empty",
        email: result.user.email ?? "empty",
        avatarUrl: result.user.photoURL ?? "empty",
      };
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue("error with server");
    }
  }
);
