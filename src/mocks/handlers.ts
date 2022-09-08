import { rest } from "msw";

const data = {
  userName: "paquito",
  password: "12345",
};

const idSong: string = "232464fe42536dd232";

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
          user: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTBjMWViM2E4ZDdlMDg4YzU2NDU1YiIsInVzZXJOYW1lIjoidGVzdExvZ2luIiwiaWF0IjoxNjYyNDc2MTc5fQ.QthCeuT1iSEUp29Px9tayUBQEBUjzr08pdFkPozDsc0",
          },
        })
      );
    }
  ),
  rest.get(`${process.env.REACT_APP_API_URL}songs`, async (req, res, ctx) => {
    const headerTestError = req.headers.get("IsTestError");

    if (headerTestError) {
      return res(
        ctx.status(500),
        ctx.json({
          error: "Something went wrong",
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        songs: [
          {
            songName: "We are your friends",
            album: "We are your friends",
            year: "2001",
            band: "Justice, Simian",
            instrument: ["guitar"],
            image: "http://picture.com",
            embeded: "prueba2",
            id: "135165",
            owner: "123456",
          },
          {
            songName: "Barbie girl",
            album: "vicios y virtudes",
            year: "2001",
            band: "SFDK",
            instrument: ["piano"],
            image: "http://picture.com",
            embeded: "prueba2",
            id: "135165",
            owner: "123456",
          },
        ],
      })
    );
  }),
  rest.delete(
    `${process.env.REACT_APP_API_URL}songs/${idSong}`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          songDelete: {
            id: idSong,
          },
        })
      );
    }
  ),
  rest.delete(
    `${process.env.REACT_APP_API_URL}songs/wrongId`,
    async (req, res, ctx) => {
      return res(ctx.status(404), ctx.json({ error: "Song not found" }));
    }
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}songs/${idSong}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          song: {
            songName: "We are your friends",
            album: "We are your friends",
            year: "2001",
            band: "Justice, Simian",
            instrument: ["guitar"],
            image: "http://picture.com",
            embeded: "prueba2",
            id: "232464fe42536dd232",
            owner: "135165",
          },
        })
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}songs/wrongId`,
    (_req, res, ctx) => {
      return res(ctx.status(404), ctx.json({ error: "Something went wrong" }));
    }
  ),
];
