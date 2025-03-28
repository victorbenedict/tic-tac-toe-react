'use client';

import { EPlayerType, EMark, TBoard } from '@/types/constants';
import { Player } from '@/model';
import { useEffect, useState } from 'react';
import Board from './Board';
import checkWinner from '@/lib/checkGameResult';
import Minimax from 'tic-tac-toe-minimax';
import Modal from './Modal';

const players = [
  new Player(EPlayerType.Human, EMark.X),
  new Player(EPlayerType.Bot, EMark.O),
];
const defaultBoard: TBoard = Array(9).fill(undefined);

const { ComputerMove } = Minimax;
const difficulty = 'Hard';
const symbols = {
  huPlayer: players[0].mark,
  aiPlayer: players[1].mark,
};

export default function GamePage() {
  const [board, setBoard] = useState<TBoard>(defaultBoard);
  const [turn, setTurn] = useState(0);

  const handleCellClick = (index: number) => {
    const newBoard = [...board];
    const currentPlayer = players[turn % players.length];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setTurn(turn + 1);
  };

  useEffect(() => {
    // console.clear();
    // console.table(board);
    // console.log(checkWinner(board).status);
    const currentPlayer = players[turn % players.length];
    if (currentPlayer.type === EPlayerType.Bot && turn < board.length) {
      const botBoard = board.map((player, index) => {
        return player ? player.mark : index;
      });

      const nextMoveIndex = ComputerMove(botBoard, symbols, difficulty);
      handleCellClick(nextMoveIndex);
    }
  });

  return (
    <div className='mx-auto max-w-sm'>
      <Modal />
      <Board gameboard={board} cellOnClick={handleCellClick} />
    </div>
  );
}

{
  /* <button
        className='text-gray-700 hover:bg-gray-200 active:bg-gray-200 p-2.5 rounded-full hover:cursor-pointer'
        onClick={handleReset}
      >
        <MdRestartAlt className='h-8 w-8' />
      </button> */
}
