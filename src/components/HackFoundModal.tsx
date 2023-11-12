'use client'
import { Dialog, Transition } from '@headlessui/react'
import React, {Fragment, useEffect, useState} from 'react'
import {playSound} from "@/helpers/sound";
import Confetti from "react-dom-confetti";

export default function HackFoundModal({
  title,
  changeState,
  children
}:{
  title: string;
  changeState?: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactElement
}) {
  let [isOpen, setIsOpen] = useState(true)
  const [isExploding, setIsExploding] = React.useState(false);

  const yaySounds = [
    new Audio('/audio/tada.mp3'),
    new Audio('/audio/yippee.mp3'),
    new Audio('/audio/child_yay.mp3'),
    new Audio('/audio/holy_moly.mp3'),
    new Audio('/audio/tacobell.mp3'),
    new Audio('/audio/doot.mp3'),
  ]

  function randomYay() {
    return yaySounds[Math.floor(Math.random()*yaySounds.length)]
  }

  useEffect(() => {
    setTimeout(() => {
      setIsExploding(true);
      playSound(randomYay());
    }, 500)
  })

  function closeModal() {
    setIsOpen(false);
    if (changeState) {
      changeState(false);
    }
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-show rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-black"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    {children}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
                      onClick={closeModal}
                    >
                      <Confetti
                        active={isExploding}
                        config={{
                          spread: 360,
                          elementCount: 300,
                          startVelocity: 30
                        }}
                      />
                      Got It 😎
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
