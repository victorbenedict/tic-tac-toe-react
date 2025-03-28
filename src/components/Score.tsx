import { FaRegCircle, FaXmark } from 'react-icons/fa6';
import { EPlayer } from '@/types/constants';

interface ScoreboardProps {
  scores: { [key in EPlayer]: number };
}

export default function Score({ scores }: ScoreboardProps) {
  return (
    <div className='grid grid-cols-2 grid-rows-2 mx-auto max-w-sm text-center text-gray-700 place-items-center text-3xl font-mono'>
      <div className='border-b border-gray-300'>
        <FaXmark className='w-8 h-8' />
      </div>
      <div className='border-b border-gray-300'>
        <FaRegCircle className='w-8 h-8 pb-1.25' />
      </div>
      <div>{scores[EPlayer.One].toString()}</div>
      <div>{scores[EPlayer.Two].toString()}</div>
    </div>
  );
}
