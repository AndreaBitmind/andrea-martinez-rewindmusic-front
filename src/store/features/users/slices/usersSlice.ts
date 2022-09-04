import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisteredUse as RegisteredUser } from "../../../../../interfaces/users/User";

const usersInitialState: RegisteredUser = {
  id: "",
  token: "",
  userName: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    loginUser: (previousUsers, action: PayloadAction<RegisteredUser>) =>
      action.payload,
  },
});

export const { reducer: userReducer } = usersSlice;

export const { loginUser: loginUsersActionCreator } = usersSlice.actions;
export default usersSlice.reducer;
