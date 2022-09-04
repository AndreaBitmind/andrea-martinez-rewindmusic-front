import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisteredUse } from "../../../../interfaces/users/User";

const usersInitialState: RegisteredUse = {
  id: "",
  token: "",
  userName: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    loginUser: (previousUsers, action: PayloadAction<RegisteredUse>) =>
      action.payload,
  },
});

export const { reducer: userReducer } = usersSlice;

export const { loginUser: loginUsersActionCreator } = usersSlice.actions;
export default usersSlice.reducer;
