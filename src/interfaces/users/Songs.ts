export interface Isong {
  songName: string;
  album: string;
  year: string;
  band: string;
  firstInstrument: string;
  secondInstrument: string;
  image: string;
  embeded: string;
  id: string;
  owner: string;
}

export type Songs = Isong[];

export interface IcreateSong {
  songName: string;
  album: string;
  year: string;
  band: string;
  firstInstrument: string;
  secondInstrument: string;
  image: string;
}
