import { renderHook } from "@testing-library/react";
import { toast } from "react-toastify";
import { ProtoUser } from "../interfaces/users/User";
import Wrapper from "../utils/Wrapper";
import useUser from "./useUser";

jest.mock("react-toastify");

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
});
