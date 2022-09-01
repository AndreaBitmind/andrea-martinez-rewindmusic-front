import { toast } from "react-toastify";
import { UnregisteredUser } from "../interfaces/users/User";
import useUser from "./useUser";

jest.mock("react-toastify");

describe("Given a useUser hook", () => {
  describe("When invoke register function with a mockUser", () => {
    test("Then it should post a new user", async () => {
      const mockUser: UnregisteredUser = {
        userName: "paquito",
        password: "12345",
      };

      const { register } = useUser();
      await register(mockUser);

      expect(toast.success).toHaveBeenCalledWith("Successfully signed up!", {
        position: toast.POSITION.TOP_CENTER,
      });
    });

    describe("When invoke register function with a mockUser without required properties", () => {
      test("Then it should send a modal error", async () => {
        const mockUser2: UnregisteredUser = {
          userName: "paquito",
          password: "",
        };

        const { register } = useUser();
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
