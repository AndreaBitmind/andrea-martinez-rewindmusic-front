import { RegisteredUse } from "../../../../../interfaces/users/User";
import usersSlice, { loginUsersActionCreator } from "./usersSlice";

describe("Given a user slice", () => {
  describe("When invoked with an initial state as previous user and a login user action creator with a fakeUser", () => {
    test("Then it should return the fakeUser", () => {
      const initialState: RegisteredUse = {
        id: "",
        token: "",
        userName: "",
      };
      const fakeUser: RegisteredUse = {
        id: "123456789HTMB",
        token: "1m2m45ihbiw8",
        userName: "soyfernando",
      };

      const user = usersSlice(initialState, loginUsersActionCreator(fakeUser));

      expect(user).toStrictEqual(fakeUser);
    });
  });
});
