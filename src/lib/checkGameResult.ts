import { EGameStatus, TBoard, TGameResult } from '@/types/constants';

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function checkGameResult(board: TBoard): TGameResult {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    const idA = board[a]?.id;
    const idB = board[b]?.id;
    const idC = board[c]?.id;

    if (idA && idA === idB && idA === idC) {
      return { id: idA, status: EGameStatus.Win };
    }
  }

  return board.includes(undefined)
    ? { id: undefined, status: EGameStatus.OnGoing }
    : { id: undefined, status: EGameStatus.Draw };
}
