import { EMark, TBoard } from '@/types/constants';
import { FaRegCircle, FaXmark } from 'react-icons/fa6';
import Modal from './Modal';

const MarkIconMap = {
  [EMark.X]: <FaXmark className='text-slate-600 h-20 w-20' />,
  [EMark.O]: <FaRegCircle className='text-slate-600 h-14 w-14' />,
};

interface BoardProps {
  gameboard?: TBoard;
  cellOnClick?: (index: number) => void;
}

export default function Board({ gameboard, cellOnClick }: BoardProps) {
  const handleCellClick = (index: number) => {
    if (cellOnClick) cellOnClick(index);
  };

  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-1 bg-slate-500 h-[334px] w-[334px]'>
      {gameboard?.map((player, index) => {
        return (
          <button
            className='bg-white place-items-center aspect-square cursor-pointer'
            key={index}
            onClick={() => handleCellClick(index)}
          >
            {player?.mark && MarkIconMap[player.mark]}
          </button>
        );
      })}
    </div>
  );
}
