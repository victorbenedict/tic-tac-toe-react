import { generateId } from './lib/util';
import { EMark, EPlayerType } from './types/constants';

export class Player {
  readonly id: string;
  type: EPlayerType;
  mark: EMark;

  constructor(type: EPlayerType, mark: EMark) {
    this.id = generateId();
    this.type = type;
    this.mark = mark;
  }
}
