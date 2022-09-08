export interface Isong {
  songName: string;
  album: string;
  year: string;
  band: string;
  instrument: string[];
  image: string;
  embeded: string;
  id: string;
  owner: string;
}

export type Songs = Isong[];
