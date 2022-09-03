import { renderHook } from "@testing-library/react";
import { toast } from "react-toastify";
import { ProtoUser } from "../interfaces/users/User";
import Wrapper from "../utils/Wrapper";
import useUser from "./useUser";

jest.mock("react-toastify");

const mockUseDispatch = jest.fn();

jest.mock("../../src/app/hooks", () => ({
  ...jest.requireActual("../../src/app/hooks"),
  useAppDispatch: () => mockUseDispatch,
}));

describe("Given a useUser hook", () => {
  describe("When invoke register function with a mockUser", () => {
    test("Then it should post a new user", async () => {
      const mockUser: ProtoUser = {
        userName: "paquito",
        password: "12345",
      };

      const {
        result: {
          current: { register },
        },
      } = renderHook(useUser, { wrapper: Wrapper });
      await register(mockUser);

      expect(toast.success).toHaveBeenCalledWith("Successfully signed up!", {
        position: toast.POSITION.TOP_CENTER,
      });
    });

    describe("When invoke register function with a mockUser without required properties", () => {
      test("Then it should send a modal error", async () => {
        const mockUser2: ProtoUser = {
          userName: "paquito",
          password: "",
        };

        const {
          result: {
            current: { register },
          },
        } = renderHook(useUser, { wrapper: Wrapper });
        await register(mockUser2);

        expect(toast.error).toHaveBeenCalledWith(
          "Error, something went wrong",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      });
    });
  });

  describe("When login function is called with a User name and a password", () => {
    test("Then it should return a token", async () => {
      const mockUserTest: ProtoUser = {
        password: "testLogin",
        userName: "123456",
      };

      const {
        result: {
          current: { login },
        },
      } = renderHook(useUser, { wrapper: Wrapper });

      await login(mockUserTest);

      const expectedResult = {
        payload: {
          iat: 1662044238,
          id: "6310c1eb3a8d7e088c56455b",
          userName: "testLogin",
        },
        type: "users/loginUser",
      };

      expect(mockUseDispatch).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe("When login function is called with a User name or password not valid", () => {
    test("Then it should send a modal error", async () => {
      const mockUserTest: ProtoUser = {
        password: "testLogin",
        userName: "",
      };

      const {
        result: {
          current: { login },
        },
      } = renderHook(useUser, { wrapper: Wrapper });

      await login(mockUserTest);

      expect(toast.error).toHaveBeenCalledWith(
        "Oops! Something went wrong, try again...",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    });
  });
});
