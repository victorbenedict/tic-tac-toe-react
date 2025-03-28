import { Player } from '../model';

export type TBoard = (Player | undefined)[];

export enum EPlayerType {
  Human = 'Human',
  Bot = 'Bot',
}

export enum EMark {
  X = 'X',
  O = 'O',
}

export enum EGameStatus {
  OnGoing = 'OnGoing',
  Win = 'Win',
  Draw = 'Draw',
}

export type TGameResult = { id: string | undefined; status: EGameStatus };
