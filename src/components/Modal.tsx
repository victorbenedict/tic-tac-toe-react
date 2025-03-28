import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { useState } from 'react';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(true);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Dialog
        open={isOpen}
        as='div'
        className='relative z-10 focus:outline-none '
        onClose={close}
      >
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex h-[336px] items-center justify-center p-4'>
            <DialogPanel
              onClick={close}
              transition
              className='w-full max-w-md border border-slate-400 rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
            >
              <DialogTitle
                as='h3'
                className='text-base/7 font-medium text-black text-center'
              >
                GAME RESULT
              </DialogTitle>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
