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
    loginUser: (previousUsers, action: PayloadAction<RegisteredUse>) => ({
      ...action.payload,
    }),
    logOutUser: (previousUsers) => usersInitialState,
  },
});

export const { reducer: userReducer } = usersSlice;

export const {
  loginUser: loginUsersActionCreator,
  logOutUser: logOutActionCreator,
} = usersSlice.actions;
export default usersSlice.reducer;
