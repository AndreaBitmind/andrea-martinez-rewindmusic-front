import { rest } from "msw";

const data = {
  userName: "paquito",
  password: "12345",
};

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}users/register`,
    async (req, res, ctx) => {
      const body = await req.json();
      if (!body.userName || !body.password) {
        return res(
          ctx.status(400),
          ctx.json({
            error: "Wrong data",
          })
        );
      }

      return res(ctx.status(201), ctx.json([data]));
    }
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL}users/login`,
    async (req, res, ctx) => {
      const body = await req.json();
      if (!body.userName || !body.password) {
        return res(
          ctx.status(400),
          ctx.json({
            error: "Wrong data",
          })
        );
      }
      return res(
        ctx.status(200),
        ctx.json({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTBjMWViM2E4ZDdlMDg4YzU2NDU1YiIsInVzZXJOYW1lIjoidGVzdExvZ2luIiwiaWF0IjoxNjYyMDQ0MjM4fQ.JHO3TfUX4Qen6cMb7S7nl-8kuvdowjzwNMgroyH9e08",
        })
      );
    }
  ),
];
