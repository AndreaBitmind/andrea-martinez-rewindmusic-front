import { rest } from "msw";

const data = {
  userName: "paquito",
  password: "12345",
};

export const handlers = [
  rest.post(process.env.REACT_APP_API_URL as string, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];
